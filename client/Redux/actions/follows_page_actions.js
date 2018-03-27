import axios from 'axios';

const { REST_SERVER_URL } = process.env;

export default {
  starFollow(matchId, index) {
    return async (dispatch, getState) => {
      const { id } = getState().accountData;
      const { follows } = getState();
      const newFollows = JSON.parse(JSON.stringify(follows))
      const { starred, allOthers } = newFollows;
      allOthers[index].starred = 1;
      const movingMatch = allOthers.splice(index, 1)
      starred.push(movingMatch[0])
      starred.sort((a, b) => a.id - b.id)
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
      const { follows }  = getState();
      const newFollows = JSON.parse(JSON.stringify(follows))
      const { starred, allOthers } = newFollows;
      starred[index].starred = 0;
      const movingMatch = starred.splice(index, 1)
      allOthers.push(movingMatch[0])
      allOthers.sort((a, b) => a.id - b.id)
      newFollows.starred = starred;
      newFollows.allOthers = allOthers;
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