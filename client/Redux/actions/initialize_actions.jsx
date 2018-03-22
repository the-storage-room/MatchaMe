import axios from 'axios';

const { REST_SERVER_URL } = process.env;

export default {
  initialize() {
    return async (dispatch, getState) => {
      const { userId } = await getState().accountData
      const data = await axios
        .get(`${REST_SERVER_URL}/api/initialize/${userId}`)
      try {
        dispatch({
          type: 'USER_ACCOUNT_DATA_RECIEVED',
          payload: data.initializeObject.accountData
          });
        dispatch({
          type: 'USER_BIO_DATA_RECIEVED',
          payload: data.initializeObject.bioData
          });
        dispatch({
          type: 'USER_TAGS_RECIEVED',
          payload: data.initializeObject.tagData
          });
        dispatch({
          type: 'USER_PHOTOS_RECIEVED',
          payload: data.initializeObject.photoData
          });
        dispatch({
          type: 'USER_POWERRANKING_RECIEVED',
          payload: data.initializeObject.powerRankingData
          });
        dispatch({
          type: 'USER_SIGNUP_STATUS_RECIEVED',
          payload: data.initializeObject.signupStatusData
          });
        dispatch({
          type: 'USER_FOLLOWS_RECIEVED',
          payload: data.initializeObject.outcomesData
          });
        dispatch({
          type: 'USER_CURRENT_MATCH_RECIEVED',
          payload: data.initializeObject.currentMatchData
          });
        dispatch({
          type: 'RATINGS_DATA_RECIEVED',
          payload: data.initializeObject.ratingsData
          });
        dispatch({
          type: 'MATCHES_DATA_RECIEVED',
          payload: data.initializeObject.matchesData
          });
        dispatch({
          type: 'LEADERBOARD_RECIEVED',
          payload: data.initializeObject.leaderboardData
          });
      } catch {
        console.error
      }
    }
  },
}
