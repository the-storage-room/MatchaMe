import axios from 'axios';

const { REST_SERVER_URL } = process.env;

export default {
  starFollow(matchId, index) {
    return async (dispatch, getState) => {
      const { id } = getState().accountData;
      const { starred, allOthers } = getState().follows;
      
      try {
      await axios
        .put(`${REST_SERVER_URL}/api/outcomes/starSingleMatch/${id}/${matchId}`)
        dispatch({
          type: 'FOLLOW_STARRED_SUCCESS',
          payload: newFollows
          });
      } catch (err) {
        console.error
      }
    }
  },
  unstarFollow(matchId, index) {
    return async (dispatch, getState) => {
      const { id } = getState().accountData;
      try {
      await axios
        .put(`${REST_SERVER_URL}/api/outcomes/unstarSingleMatch/${id}/${matchId}`)
        dispatch({
          type: 'FOLLOW_UNSTARRED_SUCCESS',
          payload: newFollows
          });
      } catch (err) {
        console.error
      }
    }
  },
}