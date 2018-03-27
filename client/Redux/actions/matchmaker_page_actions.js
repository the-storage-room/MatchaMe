import axios from 'axios';

const { REST_SERVER_URL } = process.env;

export default {
  fetchMoreMatchesToRate() {
    return async (dispatch, getState) => {
      const { id } = getState().accountData;
      const { matches } = getState();
      try {
        const data = await axios
          .get(`${REST_SERVER_URL}/api/matchmaking/fetchPendingMatchmaking/${id}`);
        const newMatches = data.data.concat(matches)
        dispatch({
          type: 'ADDITIONAL_MATCHES_TO_RATE_ADDED',
          payload: newMatches
          });
      } catch (err) {
        console.error
      }
    }
  },
  postMatchmakerDecision(voteObject) {
    return async (dispatch, getState) => {
      const { id } = getState().accountData;
      const { matches } = getState();
      const newMatches = JSON.parse(JSON.stringify(matches));
      newMatches.pop();
      voteObject.userId = id;
      try {
      await axios
        .put(`${REST_SERVER_URL}/api/matchmaking/updateMatchmaking`, voteObject)
        dispatch({
          type: 'MATCHMAKER_RATING_SUBMITTED',
          payload: newMatches
          });
      } catch (err) {
        console.error
      }
    }
  },
  addCommentOnMatch(matchId, comment) {
    console.log(comment)
    return async (dispatch, getState) => {
      const { id } = getState().accountData
      const { matches } = getState();
      const newMatches = JSON.parse(JSON.stringify(matches))
      const type = 0;
      const commentObj = { comment, type }
      try {
      await axios
        .post(`${REST_SERVER_URL}/api/comments/addComment/${id}/${matchId}`, commentObj)
      const { data } = await axios
        .get(`${REST_SERVER_URL}/api/comments/fetchComments/${matchId}`)
      newMatches[newMatches.length - 1].comments = data;
        dispatch({
          type: 'MATCHMAKER_COMMENT_ADDED',
          payload: newMatches
          });
      } catch (err) {
        console.error
      }
    }
  },
  fetchCommentsOnMatch(matchId) {
    return async (dispatch) => {
      try {
      const data = await axios
        .get(`${REST_SERVER_URL}/api/comments/fetchComments/${matchId}`)
        dispatch({
          type: 'MATCHMAKER_COMMENTS_RECIEVED',
          payload: data.data
          });
      } catch (err) {
        console.error
      }
    }
  },
  voteOnCommentOnMatch(commentId, vote, index) {
    return async (dispatch, getState) => {
      try {
      const { matches } = getState();
      const newMatches = JSON.parse(JSON.stringify(matches))
      newMatches[newMatches.length-1].comments[index].votes += vote;
      await axios
        .put(`${REST_SERVER_URL}/api/comments/voteOnComment/${commentId}/${vote}`)
        dispatch({
          type: 'MATCHMAKER_COMMENT_VOTED',
          payload: newMatches
          });
      } catch (err) {
        console.error
      }
    }
  },
}