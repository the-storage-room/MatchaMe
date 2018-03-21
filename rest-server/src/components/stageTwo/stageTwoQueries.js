import db from '../../config/database/index';

import {
  fetchStageTwoHelper,
  acceptStageTwoHelper,
  rejectStageTwoHelper,
  ghostStageTwoHelper,
  addStageTwoHelper
} from './stageTwoSQLHelpers';

export const addStageTwoQuery = async body => {
  try {
    const queryString = addStageTwoHelper(body);
    const { rows } = await db.query(queryString);
    console.log(rows);
  } catch (err) {
    console.log('Error with addStageTwo');
  }
};

export const fetchStageTwoQuery = async body => {
  try {
  } catch (err) {}
};

export const acceptStageTwoQuery = async body => {
  try {
  } catch (err) {}
};

export const rejectStageTwoQuery = async body => {
  try {
  } catch (err) {}
};

export const ghostStageTwoQuery = async body => {
  try {
  } catch (err) {}
};
