import axios from 'axios';

const { REST_SERVER_URL } = process.env;

export default {
  updateAccountData(accountData) {
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
  updateBioData(bioData) {
    return async (dispatch, getState) => {
      // const { id } = await getState().accountData
      bioData.id = 1;
      await axios
        .put(`${REST_SERVER_URL}/api/users/updateUserInfo`, bioData)
      delete bioData.id
      try {
        dispatch({
          type: 'USER_BIO_DATA_UPDATED',
          payload: bioData
          });
      } catch (err) {
        console.error
      }
    }
  },
  // updateTagsData(tagsData) {
  //   return async (dispatch, getState) => {
  //     const { id } = await getState().accountData
  //     try {
  //       dispatch({
  //         type: 'USER_TAGS_UPDATED',
  //         payload: tagsData
  //         });
  //     } catch (err) {
  //       console.error
  //     }
  //   }
  // },
  // updatePhotoData(photosData) {
  //   return async (dispatch, getState) => {
  //     const { id } = await getState().accountData
  //     try {
  //       dispatch({
  //         type: 'USER_PHOTOS_UPDATED',
  //         payload: photosData
  //         });
  //     } catch (err) {
  //       console.error
  //     }
  //   }
  // },
  updateSignupStatus() {
    return async (dispatch, getState) => {
      const { id } = await getState().accountData
      try {
        dispatch({
          type: 'SIGNUP_COMPLETE',
          payload: 1
          });
      } catch (err) {
        console.error
      }
    }
  },
}
