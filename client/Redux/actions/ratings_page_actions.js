import axios from 'axios';

const { REST_SERVER_URL } = process.env;

export default {
  addPhoto(accountData) {
    return async (dispatch, getState) => {
      const { id } = await getState().accountData
      accountData.id = id;
      await axios
        .put(`${REST_SERVER_URL}/api/users/updateUserInfo`, accountData)
      try {
        dispatch({
          type: 'USER_ACCOUNT_DATA_UPDATED',
          payload: accountData
          });
      } catch (err) {
        console.error
      }
    }
  },
  deletePhoto(accountData) {
    return async (dispatch, getState) => {
      const { id } = await getState().accountData
      accountData.id = id;
      await axios
        .put(`${REST_SERVER_URL}/api/users/updateUserInfo`, accountData)
      try {
        dispatch({
          type: 'USER_ACCOUNT_DATA_UPDATED',
          payload: accountData
          });
      } catch (err) {
        console.error
      }
    }
  },
}