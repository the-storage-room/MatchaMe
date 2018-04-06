import {
  fetchAllUsersQuery,
  fetchSingleUsersQuery,
  updateUserInfoQuery,
  updateUserRankingForTrueQuery,
  updateUserRankingForFalseQuery
} from './userQueries';

export const fetchAllUsersController = async (req, res) => {
  try {
    const data = await fetchAllUsersQuery();
    res.status(200).send(data);
  } catch (err) {
    console.log('Error on fetchAllUsersController', err);
  }
};

export const fetchSingleUserController = async (req, res) => {
  try {
    const data = await fetchSingleUsersQuery(req.params);
    res.status(200).send(data);
  } catch (err) {
    console.log('Error on fetchSingleUserController', err);
  }
};



export const updateUserInfoController = async (req, res) => {
  try {
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
    if (finalDecision === 'success') {
      updateUserRankingForTrueQuery(matchId);
    }
    if (finalDecision === 'fail') {
      updateUserRankingForFalseQuery(matchId);
    }
    res.status(200).send();
  } catch (err) {
    console.log('Error on updateUserRankingController', err);
  }
};
