import {
  fetchStarredMatchesQuery,
  fetchUnstarredMatchesQuery,
  starSingleMatchQuery,
  unstarSingleMatchQuery
} from './followQueries';

export const fetchStarredMatchesController = async (req, res) => {
  try {
    console.log('hi')
  } catch (err) {
    error('Error on fetching starred matches', err)
  }
};

export const fetchUnstarredMatchesController = async (req, res) => {
  try {

  } catch (err) {
    error('Error on fetching unstarred matches', err)
  }
};

export const starSingleMatchController = async (req, res) => {
  try {

  } catch (err) {
    error('Error on fetching starred single matches', err)
  }
};

export const unstarSingleMatchController = async (req, res) => {
  try {

  } catch (err) {
    error('Error on fetching unstarred single matches')
  }
};