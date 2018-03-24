import db from '../../config/database/index';

import {
  fetchAllUsersHelper,
  fetchSingleUserHelper,
  fetchMultipleUsersHelper,
  fetchUsersTagsForRatingHelper,
  fetchUsersPhotosHelper,
  fetchSingleUserAttractivenessHelper,
  updateRaterRateeRelationshipHelper,
  updateTotalAttractivenessHelper,
  updateAverageAttractivenessHelper,
  updateUserInfoHelper,
  updateAndIncreasePRForTrueAndYesHelper,
  updateAndDecreasePRForTrueAndNoHelper,
  updateAndIncreasePRForFalseAndNoHelper,
  updateAndIncreasePRForFalseAndYesHelper
} from './userSQLHelper';

import { fetchAllPhotosQuery } from '../photos/photoQueries';

export const fetchAllUsersQuery = async body => {
  try {
  } catch (err) {
    console.log(err);
  }
};

export const fetchSingleUsersQuery = async body => {
  try {
    const { userId } = body;
    const queryString = fetchSingleUserHelper();
    const { rows } = await db.query(queryString, [userId]);
    rows[0].photos = await fetchAllPhotosQuery(userId);
    return rows[0];
  } catch (err) {
    console.log(err);
  }
};

export const fetchMultipleUsersQuery = async (id) => {
  try {
    const { rows } = await fetchSingleUserAttractivenessQuery(id);
    
    const attractiveness = rows[0].averageattractiveness;
    const min = (attractiveness - 3);
    const max = (attractiveness + 3);
    
    const infoQueryString = fetchMultipleUsersHelper();
    const photoQueryString = fetchUsersPhotosHelper();
    const tagQueryString = fetchUsersTagsForRatingHelper();

    const userData = await db.query(infoQueryString, [min, max]);
    const userRows = userData.rows;
    

    const photoData = await db.query(photoQueryString, [min, max]);
    const photoRows = photoData.rows;

    const tagData = await db.query(tagQueryString, [min, max]);
    const tagRows = tagData.rows;

    let tags = [];
    let preferenceTags = [];
    let photos = [];

    for (let i = 0; i < userRows.length; i++) {
      for (let z = 0; z < tagRows.length; z++) {
        if (userRows[i].id === tagRows[z].id) {
          if (tagRows[z].type === 0) {
            tags.push(tagRows[z].tag)
            userRows[i].tags = tags;
          } else {
            continue;
          }
        }
      }
      tags = [];
      preferenceTags = [];
    }

    for (let i = 0; i < userRows.length; i++) {
      for (let z = 0; z < photoRows.length; z++) {
        if (userRows[i].id === photoRows[z].id) {
          photos.push(photoRows[z].url);
          userRows[i].photos = photos;
        }
      }
      photos = [];
    }
   // console.log('userrows', userRows)
    return userRows;
  } catch (err) {
    console.log(err);
  }
};

// I don't think this function below is being used anywhere, aka unneeded.
  // I'll wait a day or two to be sure before deleting it

// export const fetchUsersTagsForRatingQuery = async (body) => {
//   try {
//     const queryString = await fetchUsersTagsForRatingHelper(body);
//     const data = await db.query(queryString);
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };

export const fetchSingleUserAttractivenessQuery = async (id) => {
  try {
    const queryString = await fetchSingleUserAttractivenessHelper();
    const data = await db.query(queryString, [id]);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateRaterRateeRelationshipQuery = async (body) => {
  try {
    const queryString = await updateRaterRateeRelationshipHelper(body);
    const data = await db.query(queryString);
    return data;
  } catch (err) {

  }
};

export const updateUserInfoQuery = async body => {
  try {
    let data;
    for (let key in body) {
      if (key === 'id' || key === 'username') {
        continue;
      } else {
        if (
          key === 'age' ||
          key === 'location' ||
          key === 'gender' ||
          key === 'preference'
        ) {
          body[key] = Number(body[key]);
        }
        let queryString = updateUserInfoHelper(
          key,
          body[key],
          body.id
        );
        data = await db.query(queryString, [key, body[key], body.id]);
        console.log('success on userInfoQuery')
      }
    }
  } catch (err) { 
    console.log(err);
  }
}

export const updateTotalAttractivenessQuery = async ({ attractiveness, ratee }) => {
  try {
    const queryString = await updateTotalAttractivenessHelper();
    console.log(attractiveness, ratee);
    const data = await db.query(queryString, [attractiveness, ratee]);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateAverageAttractivenessQuery = async (body) => {
  try {
    const queryString = await updateAverageAttractivenessHelper(body);
    console.log(queryString)
    const data = await db.query(queryString);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateUserRankingForTrueQuery = async matchId => {
  try {
    let dataObj = {};
    const queryString1 = updateAndIncreasePRForTrueAndYesHelper();
    const data1 = await db.query(queryString1, [matchId]);
    dataObj['increasedPR'] = data1;
    const queryString2 = updateAndDecreasePRForTrueAndNoHelper();
    const data2 = await db.query(queryString2, [matchId]);
    dataObj['decreasedPR'] = data2;
    console.log('Success on updateUserRankingForTrueQuery');
    return dataObj;
  } catch (err) {
    console.log('Error on updateUserRankingForTrueQuery', err);
  }
};

export const updateUserRankingForFalseQuery = async matchId => {
  try {
    let dataObj = {};
    const queryString1 = updateAndIncreasePRForFalseAndNoHelper();
    const data1 = await db.query(queryString1, [matchId]);
    dataObj['increasedPR'] = data1;
    const queryString2 = updateAndIncreasePRForFalseAndYesHelper();
    const data2 = await db.query(queryString2, [matchId]);
    dataObj['decreasedPR'] = data2;
    console.log('Success on updateUserRankingsForFalseQuery', dataObj);
  } catch (err) {
    console.log('Error on updateUserRankingsForFalseQuery', err);
  }
};
