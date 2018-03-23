import {
  fetchAllUsersQuery,
  fetchSingleUsersQuery,
  fetchMultipleUsersQuery,
  fetchUsersTagsQuery,
  fetchSingleUserAttractivenessQuery,
  updateTotalAttractivenessQuery,
  updateAverageAttractivenessQuery,
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
    const id = req.body.id;

    const attractiveness = await fetchSingleUserAttractivenessQuery(id);
    console.log(attractiveness)

    const min = Number(req.params.attractiveness) - 3;
    const max = Number(req.params.attractiveness) + 3;
    const constraints = {
      min: min,
      max: max
    }
    const rows = await fetchMultipleUsersQuery(constraints);
    res.status(200).send(rows);
  } catch (err) {
    console.log(err);
  }
};

export const updateUserAttractivenessController = async (req, res) => {
  try {
    let { rows } = await updateTotalAttractivenessQuery(req.body);
    const newTotalAttractivenessScore = rows[0].totalattractiveness;
    let newTotalNumOfRatings = (rows[0].totalnumofratings + 1);

    // change math.floor to reflect proper rounding ...later
    const newAverageAttractiveness = Math.floor(newTotalAttractivenessScore / (newTotalNumOfRatings));

    const body = {
      id: req.body.id,
      newAverageAttractiveness: newAverageAttractiveness,
      newTotalNumOfRatings: newTotalNumOfRatings
    };
    await updateAverageAttractivenessQuery(body);
    return res.send('user attractiveness updated');
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
