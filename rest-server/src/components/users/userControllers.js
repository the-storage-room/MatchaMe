import {
  fetchAllUsersQuery,
  fetchSingleUsersQuery,
  fetchMultipleUsersQuery,
  fetchUsersTagsQuery,
  updateUserAttractivenessQuery,
  updateUserInfoQuery,
  updateUserRankingForTrueQuery,
  updateUserRankingForFalseQuery
} from './userQueries';

export const fetchAllUsersController = async (req, res) => {
  try {
  } catch (err) {}
};

export const fetchSingleUserController = async (req, res) => {
  try {
    const data = await fetchSingleUsersQuery(req.params);
    res.status(200).send(data);
  } catch (err) {
    console.log('Error on fetchSingleUserController', err);
  }
};

export const fetchMultipleUsersController = async (req, res) => {
  try {
    const users = {};
    let tags = [];
    const min = Number(req.params.attractiveness) - 3;
    const max = Number(req.params.attractiveness) + 3;
    const payload = {
      min: min,
      max: max
    }

    const tagData = await fetchUsersTagsQuery(payload);
    const tagRows = tagData.rows;
    console.log(tagRows)

    for (let i = 0; i < tagRows.length; i++) {
      let currId = tagRows[i].id;
      tags.push(tagRows[i].tag);
      users[currId] = {
        tags: tags
      };
      if (tagRows[i + 1] === undefined) {
        break;
      }
      if (currId !== tagRows[i + 1].id) {
        tags = [];
      }
    }
    console.log(users)
    const userData = await fetchMultipleUsersQuery(payload);
    const userRows = userData.rows;
    console.log(userRows)

    for (let z = 0; i < userRows.length; z++) {
      console.log('im in')
      console.log('i is', z)

      let currId = userRows[i].id;
      
      
    }

    res.send(users);
  } catch (err) {

  }
};

export const updateUserAttractivenessController = async (req, res) => {
  try {
    await updateUserRatingQuery(req.body);
    return res.status(200).send('success');
  } catch (err) {
    console.error;
  }
};

export const updateUserInfoController = async (req, res) => {
  try {
    console.log(req.body)
    await updateUserInfoQuery(req.body);
    return res.status(200).send('success');
  } catch (err) {
    console.error;
  }
};

//'success' referring to both users accepting the match
export const updateUserRankingController = async (req, res) => {
  try {
    const { finalDecision } = req.body;
    const { matchId } = req.params;
    if(finalDecision ==='success') {
      updateUserRankingForTrueQuery(matchId)
    } 
    if (finalDecision === 'fail') {
      updateUserRankingForFalseQuery(matchId);
    }
    console.log('Success on updateUserRankingController');
    res.status(200).send();
  } catch (err) {
    console.log('Error on updateUserRankingController', err);
  }
};
