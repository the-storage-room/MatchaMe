import axios from 'axios';

import turnBirthdayIntoAge from '../../src/utils/turnBirthdayIntoAge';

const { REST_SERVER_URL } = process.env;
const { REDIS_SERVER_URL } = process.env;

export default {
  initialize(history) {
    return async (dispatch, getState) => {
      try {
        const { id } = await getState().accountData
        const { data } = await axios
          .get(`${REST_SERVER_URL}/api/initialize/${id}`)
        const redisData = await axios
          .get(`${REDIS_SERVER_URL}/redis/leaderboard/fetchLeaderboardAndRank/${id}`)
        data.bioData.realage = turnBirthdayIntoAge(data.bioData.age)
        dispatch({
          type: 'USER_ACCOUNT_DATA_RECIEVED',
          payload: data.accountData || null
          });
        dispatch({
          type: 'USER_BIO_DATA_RECIEVED',
          payload: data.bioData || null
          });
        dispatch({
          type: 'USER_TAGS_RECIEVED',
          payload: data.tagData || null
          });
        dispatch({
          type: 'USER_PHOTOS_RECIEVED',
          payload: data.photoData.photos || null
          });
        dispatch({
          type: 'USER_POWERRANKING_RECIEVED',
          payload: {
            totalPoints: data.powerRankingData.totalPoints, 
            rank: redisData.data.rank 
            } || null
          });
        dispatch({
          type: 'USER_SIGNUP_STATUS_RECIEVED',
          payload: data.signupStatusData || false
          });
        dispatch({
          type: 'USER_FOLLOWS_RECIEVED',
          payload: data.outcomesData || null
          });
        dispatch({
          type: 'USER_CURRENT_MATCH_RECIEVED',
          payload: data.currentMatchData || null
          });
        dispatch({
          type: 'RATINGS_DATA_RECIEVED',
          payload: data.ratingData || null
          });
        dispatch({
          type: 'MATCHES_DATA_RECIEVED',
          payload: data.matchData || null
          });
        dispatch({
          type: 'LEADERBOARD_RECIEVED',
          payload: redisData.data.leaderboard || null
          });
        history.push('/home')
      } catch (err) {
        console.error
      }
    }
  },
}