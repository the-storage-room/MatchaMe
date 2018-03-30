import db from '../../config/database/index';

import {
  fetchMultipleUsersHelper,
  fetchUsersTagsForRatingHelper,
  fetchUsersPhotosHelper,
  fetchSingleUserAttractivenessHelper,
  updateRaterRateeRelationshipHelper,
  updateTotalAttractivenessHelper,
  updateAverageAttractivenessHelper,
} from './ratingsSQLHelper';

export const fetchMultipleUsersQuery = async id => {
  try {
    const { rows } = await fetchSingleUserAttractivenessQuery(id);

    const attractiveness = rows[0].averageattractiveness;
    const min = attractiveness - 3;
    const max = attractiveness + 3;

    const infoQueryString = fetchMultipleUsersHelper();
    const photoQueryString = fetchUsersPhotosHelper();
    const tagQueryString = fetchUsersTagsForRatingHelper();

    const userData = await db.query(infoQueryString, [min, max, id]);
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
            tags.push(tagRows[z].tag);
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

export const updateRaterRateeRelationshipQuery = async body => {
  try {
    const queryString = await updateRaterRateeRelationshipHelper(body);
    const data = await db.query(queryString);
    return data;
  } catch (err) {}
};


export const updateTotalAttractivenessQuery = async ({
  attractiveness,
  ratee
}) => {
  try {
    const queryString = await updateTotalAttractivenessHelper();
    console.log(attractiveness, ratee);
    const data = await db.query(queryString, [attractiveness, ratee]);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateAverageAttractivenessQuery = async body => {
  try {
    const queryString = await updateAverageAttractivenessHelper(body);
    console.log(queryString);
    const data = await db.query(queryString);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSingleUserAttractivenessQuery = async id => {
  try {
    const queryString = await fetchSingleUserAttractivenessHelper();
    const data = await db.query(queryString, [id]);
    return data;
  } catch (err) {
    console.log(err);
  }
};