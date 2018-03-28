import axios from 'axios';

const { REST_SERVER_URL } = process.env;

export default {
  acceptCurrentMatch() {
    return async (dispatch, getState) => {
      const { currentMatch } = getState();
      const matchId = currentMatch.id;
      const userId = getState().accountData.id;
      try {
        await axios
          .put(`${REST_SERVER_URL}/api/stageTwo/acceptStageTwo/${matchId}/${userId}`);
        const { data } = await axios
          .get(`${REST_SERVER_URL}/api/stageTwo/fetchStageTwo/${userId}`)
        dispatch({
          type: 'CURRENT_MATCH_ACCECPTED',
          payload: data
          });
      } catch (err) {
        console.error
      }
    }
  },
  rejectCurrentMatch() {
    return async (dispatch, getState) => {
      const matchId = getState().currentMatch.id;
      const userId = getState().accountData.id;
      try {
        await axios
          .put(`${REST_SERVER_URL}/api/stageTwo/rejectStageTwo/${matchId}/${userId}`);
        const { data } = await axios
          .get(`${REST_SERVER_URL}/api/stageTwo/fetchStageTwo/${userId}`)
        dispatch({
          type: 'CURRENT_MATCH_REJECTED',
          payload: data,
        });
      } catch (err) {
        console.error
      }
    }
  },
  endCurrentMatch() {
    return async (dispatch, getState) => {
      const matchId = getState().currentMatch.id;
      const userId = getState().accountData.id;
      try {
        await axios
          .put(`${REST_SERVER_URL}/api/stageTwo/endStageTwo/${matchId}`);
        const { data } = await axios
          .get(`${REST_SERVER_URL}/api/stageTwo/fetchStageTwo/${userId}`)
        dispatch({
          type: 'CURRENT_MATCH_ENDED',
          payload: data,
        });
      } catch (err) {
        console.error
      }
    }
  },
  checkForNewMatch() {
    return async (dispatch, getState) => {
      const userId = getState().accountData.id;
      try {
        const { data } = await axios
          .get(`${REST_SERVER_URL}/api/stageTwo/fetchStageTwo/${userId}`)
        dispatch({
          type: 'CURRENT_MATCH_REFRESHED',
          payload: data,
        });
      } catch (err) {
        console.error
      }
    }
  },
}