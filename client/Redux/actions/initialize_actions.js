import axios from 'axios';

const { REST_SERVER_URL } = process.env;

export default {
  initialize(history) {
    return async (dispatch, getState) => {
      const { id } = getState().accountData
      try {
        const { data } = await axios
          .get(`${REST_SERVER_URL}/api/initialize/${id}`)
        console.log(data)
        
        // const powerRankingData = {
        //   totalPoints: powerranking,
        //   userRanking: userLeaderboardRanking,
        // }
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
          payload: data.powerRankingData || null
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
        // dispatch({
        //   type: 'LEADERBOARD_RECIEVED',
        //   payload: data.leaderboardData || null
        //   });
        history.push('/home')
      } catch (err) {
        console.error
      }
    }
  },
}
