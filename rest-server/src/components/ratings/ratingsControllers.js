import {
  fetchMultipleUsersQuery,
  updateRaterRateeRelationshipQuery,
  updateTotalAttractivenessQuery,
  updateAverageAttractivenessQuery,
} from './ratingsQueries';


export const updateUserAttractivenessController = async (req, res) => {
  try {
    const score = {
      attractiveness: req.body.attractiveness,
      ratee: req.body.ratee
    };
    let { rows } = await updateTotalAttractivenessQuery(score);
    const newTotalAttractivenessScore = rows[0].totalattractiveness;
    let newTotalNumOfRatings = (rows[0].totalnumofratings + 1);
    const newAverageAttractiveness = Math.round(newTotalAttractivenessScore / (newTotalNumOfRatings));
    const body = {
      ratee: req.body.ratee,
      newAverageAttractiveness: newAverageAttractiveness,
      newTotalNumOfRatings: newTotalNumOfRatings
    };
    await updateAverageAttractivenessQuery(body);
    const raterRatee = {
      rater: req.body.rater,
      ratee: req.body.ratee
    };
    await updateRaterRateeRelationshipQuery(raterRatee);
    return res.send('user attractiveness updated');
  } catch (err) {
    console.error;
  }
};

export const fetchMultipleUsersController = async (req, res) => {
  try {
    const data = await fetchMultipleUsersQuery(req.params.id);
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
};