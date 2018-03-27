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
      console.log(matches)
      const newMatches = JSON.parse(JSON.stringify(matches));
      console.log(newMatches)
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
    return async (dispatch, getState) => {
      const { id } = getState().accountData
      const { comments } = getState()
      const newComments = JSON.parse(JSON.stringify(comments))
      const type = 0;
      const commentObj = { comment, type }
      newComments.push(commentObj)
      try {
      await axios
        .post(`${REST_SERVER_URL}/api/comments/addComment/${id}/${matchId}`, commentObj)
        dispatch({
          type: 'MATCHMAKER_COMMENT_ADDED',
          payload: newComments
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
      const { comments } = getState();
      const newComments = JSON.parse(JSON.stringify(comments))
      newComments[index].vote += vote;
      await axios
        .put(`${REST_SERVER_URL}/api/comments/voteOnComment/${commentId}/${vote}`)
        dispatch({
          type: 'MATCHMAKER_COMMENT_VOTED',
          payload: newComments
          });
      } catch (err) {
        console.error
      }
    }
  },
}