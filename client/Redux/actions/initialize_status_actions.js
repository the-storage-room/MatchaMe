import axios from 'axios';

const { REST_SERVER_URL } = process.env;

export default {
  updateInitializeState() {
    return async (dispatch, getState) => {
      let { initializeState } = getState();
      console.log('initialize state from actions', initializeState)
      try {
        console.log('hello ')
        dispatch({
          type: 'INITIALIZE_STATUS_TRUE',
        })
      } catch (err) {
        console.log('error on update initialize state action', err)
      }
    }
  }
}