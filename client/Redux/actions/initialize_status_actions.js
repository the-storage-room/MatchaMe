import axios from 'axios';

const { REST_SERVER_URL } = process.env;

export default {
  updateInitializeState() {
    return async (dispatch, getState) => {
      let { initializeState } = getState();
      console.log('initial state from action', intialState)
      try {
        dispatch({
          type: 'USER_SIGNUP_STATUS_RECEIVED';
          payload: true,
        })
      } catch (err) {
        console.log('error on update initialize state action', err)
      }
    }
  }
}