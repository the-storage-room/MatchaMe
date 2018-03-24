import axios from 'axios';

const { REST_SERVER_URL } = process.env;

export default {
  fetchMoreMatchesToRate() {
    return async (dispatch, getState) => {
      const { id } = await getState().accountData
      try {
        const data = await axios
          .get(`${REST_SERVER_URL}/api/users/fetchMultipleUsers/${id}`);
        dispatch({
          type: 'ADDITIONAL_USERS_TO_RATE_ADDED',
          payload: data.data.ratingsData
          });
      } catch (err) {
        console.error
      }
    }
  },
  postRatingOnMatch(ratingObject) {
    return async (dispatch, getState) => {
      const { ratings } = getState();
      const newRatings = JSON.parse(JSON.stringify(ratings))
      newRatings.pop();
      try {
      await axios
        .put(`${REST_SERVER_URL}/api/users/updateUserRating`, ratingObject)
        dispatch({
          type: 'RATING_SUBMITTED',
          payload: newRatings
          });
      } catch (err) {
        console.error
      }
    }
  },
  addCommentOnMatch(ratingObject) {
    return async (dispatch, getState) => {
      const { ratings } = getState();
      const newRatings = JSON.parse(JSON.stringify(ratings))
      newRatings.pop();
      try {
      await axios
        .put(`${REST_SERVER_URL}/api/users/updateUserRating`, ratingObject)
        dispatch({
          type: 'RATING_SUBMITTED',
          payload: newRatings
          });
      } catch (err) {
        console.error
      }
    }
  },
  fetchCommentsOnMatch(ratingObject) {
    return async (dispatch, getState) => {
      const { ratings } = getState();
      const newRatings = JSON.parse(JSON.stringify(ratings))
      newRatings.pop();
      try {
      await axios
        .put(`${REST_SERVER_URL}/api/users/updateUserRating`, ratingObject)
        dispatch({
          type: 'RATING_SUBMITTED',
          payload: newRatings
          });
      } catch (err) {
        console.error
      }
    }
  },
  voteOnCommentOnMatch(ratingObject) {
    return async (dispatch, getState) => {
      const { ratings } = getState();
      const newRatings = JSON.parse(JSON.stringify(ratings))
      newRatings.pop();
      try {
      await axios
        .put(`${REST_SERVER_URL}/api/users/updateUserRating`, ratingObject)
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