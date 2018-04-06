import axios from 'axios';

const { REST_SERVER_URL } = process.env;

export default {
  fetchUserSignupStatus() {
    return async (dispatch, getState) => {
      const { id } = await getState().signupcomplete;
      try {
        const data = await axios
          .get(`${REST_SERVER_URL}/api/users/fetchSingleUser/${id}`);
        dispatch({
          type: 'USER_SIGNUP_STATUS_RECEIVED',
          payload: data.data
        })
      } catch (err) {
        console.error
      }
    }
  }
}
