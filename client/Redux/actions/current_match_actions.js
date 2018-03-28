import axios from 'axios';

const { REST_SERVER_URL } = process.env;

router.route('/acceptStageTwo/:id/:userId').put(acceptStageTwoController);

router.route('/rejectStageTwo/:id').put(rejectStageTwoController);

export default {
  acceptCurrentMatch() {
    return async (dispatch, getState) => {
     
      try {
        await axios
          .put(`${REST_SERVER_URL}/api/stageTwo/acceptStageTwo/${matchId}/${userId}`);
        dispatch({
          type: 'CURRENT_MATCH_ACCECPTED',
          payload: data.data
          });
      } catch (err) {
        console.error
      }
    }
  },
  rejectCurrentMatch(ratingObject) {
    return async (dispatch, getState) => {
      try {
        await axios
          .put(`${REST_SERVER_URL}/api/stageTwo/rejectStageTwo/${matchId}/${userId}`);
        dispatch({
          type: 'CURRENT_MATCH_REJECTED',
          payload: newRatings
        });
      } catch (err) {
        console.error
      }
    }
  },
  endCurrentMatch(ratingObject) {
    return async (dispatch, getState) => {
      try {
        await axios
          .put(`${REST_SERVER_URL}/api/users/updateUserRating`, ratingObject);
        dispatch({
          type: 'RATING_SUBMITTED',
          payload: newRatings
        });
      } catch (err) {
        console.error
      }
    }
  },
}