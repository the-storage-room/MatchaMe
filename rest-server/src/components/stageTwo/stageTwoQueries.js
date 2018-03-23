import db from '../../config/database/index';

import {
  fetchStageTwoHelper,
  acceptStageTwoHelper,
  rejectStageTwoHelper,
  ghostStageTwoHelper,
  addStageTwoHelper
} from './stageTwoSQLHelpers';
import { FORMERR } from 'dns';

export const addStageTwoQuery = async body => {
  try {
    const queryString = addStageTwoHelper(body);
    const { rows } = await db.query(queryString);
    console.log('Success with addStageTwo');
    return rows;
  } catch (err) {
    console.log('Error with addStageTwo');
  }
};

export const fetchStageTwoQuery = async body => {
  try {
    const { rows } = await db.query(fetchStageTwoHelper(body));
    return rows;
  } catch (err) {
    console.log('Error with fetchStageTwoQuery', err);
  }
};

export const acceptStageTwoQuery = async body => {
  try {
    let rows;
    const check = await db.query(fetchStageTwoHelper(body));
    const queryStrings = acceptStageTwoHelper(body);
    if (!!check.rows[0].firstdecision) {
      rows = await db.query(queryStrings[0]);
    } else {
      console.log('hello from the insday');
      rows = await db.query(queryStrings[1]);
    }
    console.log('Successful with acceptStageTwoQuery');
    return rows.rows;
  } catch (err) {
    console.log('Error with acceptStageTwoQuery', err);
  }
};

export const rejectStageTwoQuery = async body => {
  try {
    const queryString = rejectStageTwoHelper(body);
    const { rows } = await db.query(queryString);
    console.log('Successful with rejectStageTwoQuery');
    return rows;
  } catch (err) {
    console.log('Error with rejectStageTwoQuery', err);
  }
};

export const ghostStageTwoQuery = async body => {
  try {
  } catch (err) {}
};
