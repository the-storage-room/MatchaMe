import axios from 'axios';

const { REST_SERVER_URL } = process.env;

export default {
  initialize() {
    return async (dispatch, getState) => {
      const { id } = await getState().accountData
      const { data } = await axios
        .get(`${REST_SERVER_URL}/api/initialize/${id}`)
      const {
        userData,
        tagData,
        userLeaderboardRanking,
        outcomesData,
        currentMatchData,
        ratingsData,
        matchesData,
        leaderboardData,
        } = data.initializeObject
      const {
        username,
        email,
        lastname,
        firstname,
        age,
        location,
        gender,
        preference,
        bio,
        powerranking,
        signupcomplete,
        photos,
      } = userData
      const accountData = {
        id: id,
        username: username,
        email: email,
        firstname: firstname,
        lastname: lastname
      }
      const bioData = {
        age: age,
        location: location,
        gender: gender,
        preference: preference,
        bio: bio,
      }
      const powerRankingData = {
        totalPoints: powerranking,
        userRanking: userLeaderboardRanking,
      }
      try {
        dispatch({
          type: 'USER_ACCOUNT_DATA_RECIEVED',
          payload: accountData
          });
        dispatch({
          type: 'USER_BIO_DATA_RECIEVED',
          payload: bioData
          });
        dispatch({
          type: 'USER_TAGS_RECIEVED',
          payload: tagData
          });
        dispatch({
          type: 'USER_PHOTOS_RECIEVED',
          payload: photos
          });
        dispatch({
          type: 'USER_POWERRANKING_RECIEVED',
          payload: powerRankingData
          });
        dispatch({
          type: 'USER_SIGNUP_STATUS_RECIEVED',
          payload: signupcomplete
          });
        dispatch({
          type: 'USER_FOLLOWS_RECIEVED',
          payload: outcomesData
          });
        dispatch({
          type: 'USER_CURRENT_MATCH_RECIEVED',
          payload: currentMatchData
          });
        dispatch({
          type: 'RATINGS_DATA_RECIEVED',
          payload: ratingsData
          });
        dispatch({
          type: 'MATCHES_DATA_RECIEVED',
          payload: matchesData
          });
        dispatch({
          type: 'LEADERBOARD_RECIEVED',
          payload: leaderboardData
          });
      } catch (err) {
        console.error
      }
    }
  },
}
