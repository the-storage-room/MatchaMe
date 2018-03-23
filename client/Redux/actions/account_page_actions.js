import axios from 'axios';

const { REST_SERVER_URL } = process.env;
const { S3_SERVER_URL } = process.env;


export default {
  updateAccountData(accountData) {
    return async (dispatch, getState) => {
      try {
        const { id } = await getState().accountData
        accountData.id = id;
        await axios
          .put(`${REST_SERVER_URL}/api/users/updateUserInfo`, accountData)
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
      try {
        const { id } = await getState().accountData
        bioData.id = id
        await axios
          .put(`${REST_SERVER_URL}/api/users/updateUserInfo`, bioData)
        delete bioData.id
        dispatch({
          type: 'USER_BIO_DATA_UPDATED',
          payload: bioData
          });
      } catch (err) {
        console.error
      }
    }
  },
  // updateTagsData(type, tags) {
  //   return async (dispatch, getState) => {
  //     try {
  //       const { tagState } = await getState().tagsData;
  //       const { id } = await getState().accountData;
  //       tagState[type] = tags;
  //       tagState.id = id;
  //       await axios
  //         .put(`${REST_SERVER_URL}/api/users/updateUserInfo`, bioData)
  //       delete tagState.id;
  //       dispatch({
  //         type: 'USER_TAGS_UPDATED',
  //         payload: tagState
  //         });
  //     } catch (err) {
  //       console.error
  //     }
  //   }
  // },
  uploadPhoto(formData) {
    return async (dispatch, getState) => {
      const { id } = await getState().accountData;
      try {
        await axios
          .post(`${S3_SERVER_URL}/api/s3`, formData);
        const photoData = await axios
          .get(`${REST_SERVER_URL}/api/photos/fetchAllPhotos/${id}`)
        dispatch({
          type: 'USER_PHOTO_ADDED_UPDATED',
          payload: photoData
          });
      } catch (err) {
        console.error
      }
    }
  },
  deletePhoto(key, photoId, targetPhoto) {
    return async (dispatch, getState) => {
      try {
        let { userPhotos, accountData } = getState();
        const { id } = accountData;
        await axios
          .delete(`${S3_SERVER_URL}/api/s3/${id}/${key}/${photoId}`)
        delete userPhotos[targetPhoto];
        dispatch({
          type: 'USER_PHOTO_DELETED',
          payload: userPhotos,
          });
      } catch (err) {
        console.error
      }
    }
  },
  updatePrimaryPhoto(photoId, targetPhoto) {
    return async (dispatch, getState) => {
      const { id } = getState().accountData;
      const { userPhotos } = getState();
      const newPrimary = userPhotos[targetPhoto];
      userPhotos.splice(targetPhoto, 1)
      userPhotos.unshift(newPrimary)
      try {
        await axios.
        put(`${REST_SERVER_URL}/api/photos/updatePrimaryPhoto/${id}/${photoId}`)
        dispatch({
          type: 'USER_PRIMARY_PHOTO_UPDATED',
          payload: userPhotos
          });
      } catch (err) {
        console.error
      }
    }
  },
  updateSignupStatus() {
    return async (dispatch, getState) => {
      try {
      const { id } = getState().accountData;
      const signupStatusData = { signupcomplete: 1, id: id};
      await axios
          .put(`${REST_SERVER_URL}/api/users/updateUserInfo`, signupStatusData)
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
