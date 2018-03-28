import {
  fetchStageTwoQuery,
  acceptStageTwoQuery,
  rejectStageTwoQuery,
  endStageTwoQuery
} from './stageTwoQueries';

export const fetchStageTwoController = async (req, res) => {
  try {
    const data = await fetchStageTwoQuery(req.params);
    res.status(200).send(data);
  } catch (err) {
    console.log('Error with fetchStageTwoController', err);
  }
};

export const acceptStageTwoController = async (req, res) => {
  try {
    const data = await acceptStageTwoQuery(req.params);
    console.log('Success with acceptStageTwoController');
    res.status(200).send(data);
  } catch (err) {
    console.log('Error with acceptStageTwoController', err);
  }
};

export const rejectStageTwoController = async (req, res) => {
  try {
    const data = await rejectStageTwoQuery(req.params);
    console.log('Success with rejectStageTwoController');
    res.status(200).send(data);
  } catch (err) {
    console.log('Error with rejectStageTwoController', err);
  }
};

export const endStageTwoController = async (req, res) => {
  try {
    const data = await endStageTwoQuery(req.params);
    console.log('Success with rejectStageTwoController');
    res.status(200).send(data);
  } catch (err) {
    console.log('Error with endStageTwoController', err);
  }
};
