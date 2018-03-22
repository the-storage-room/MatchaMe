import axios from 'axios';

export default {
  initialize(user) {
    return async (dispatch) => {
      try {
        await axios.put(`/api/${user}/${commentID}/comments`)          
        dispatch({
            type: page,
          });
      }
      catch {
        console.error
      }
    }
  },
}