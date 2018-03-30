import axios from 'axios';

const { REST_SERVER_URL } = process.env;

export default {
  fetchMoreUsersToRate() {
    return async (dispatch, getState) => {
      const { id } = await getState().accountData;
      console.log(id)
      try {
        const data = await axios
          .get(`${REST_SERVER_URL}/api/ratings/fetchMultipleUsers/${id}`);
        dispatch({
          type: 'ADDITIONAL_USERS_TO_RATE_ADDED',
          payload: data.data
          });
      } catch (err) {
        console.error
      }
    }
  },
  submitRating(ratingObject) {
    return async (dispatch, getState) => {
      const { ratings } = getState();
      const newRatings = JSON.parse(JSON.stringify(ratings))
      newRatings.pop();
      try {
        await axios
          .put(`${REST_SERVER_URL}/api/ratings/updateUserRating`, ratingObject);
        dispatch({
          type: 'RATING_SUBMITTED',
          payload: newRatings
        });
        if (newRatings.length === 2) {
          const data = await axios.get(`${REST_SERVER_URL}/api/ratings/fetchMultipleUsers/${id}`);
          dispatch({
            type: 'ADDITONAL_USERS_TO_RATE_ADDED',
            payload: data.data
          });
        }
      } catch (err) {
        console.error
      }
    }
  },
}