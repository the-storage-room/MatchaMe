import {
  fetchStageTwoQuery,
  acceptStageTwoQuery,
  rejectOrEndStageTwoQuery
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
    res.status(200).send(data);
  } catch (err) {
    console.log('Error with acceptStageTwoController', err);
  }
};

export const rejectOrEndStageTwoController = async (req, res) => {
  try {
    const data = await rejectOrEndStageTwoQuery(req.params);
    res.status(200).send(data);
  } catch (err) {
    console.log('Error with rejectStageTwoController', err);
  }
};
