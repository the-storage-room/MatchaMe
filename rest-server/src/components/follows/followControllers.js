import {
  fetchStarredMatchesQuery,
  fetchUnstarredMatchesQuery,
  starSingleMatchQuery,
  unstarSingleMatchQuery
} from './followQueries';

export const fetchStarredMatchesController = async (req, res) => {
  try {
    const data = await fetchStarredMatchesQuery();
    console.log('Success on fetchStarredMatchesController')
    return res.status(200).send(data)
  } catch (err) {
    console.log('Error on fetchStarredMatchesController', err)
  }
};

export const fetchUnstarredMatchesController = async (req, res) => {
  try {
    const data = await fetchUnstarredMatchesQuery();
    console.log('Success on fetchUnstarredMatchesController', data)
    return res.status(200).send(data)
  } catch (err) {
    console.log('Error on fetchUnstarredMatchesController', err)
  }
};

export const starSingleMatchController = async (req, res) => {
  try {
    const data = await fetchUnstarredMatchesQuery(req.body);
    console.log('Success on starSingleMatchController', data);
    return res.status(200).send(data);
  } catch (err) {
    console.log('Error on starsingleMatchController', err)
  }
};

export const unstarSingleMatchController = async (req, res) => {
  try {
    const data = await unstarSingleMatchQuery(req.body);
    console.log('Success on unstarSingleMatchController', data);
    return res.status(200).send(data);
  } catch (err) {
    console.log('Error on unstarSingleMatchController', err)
  }
};