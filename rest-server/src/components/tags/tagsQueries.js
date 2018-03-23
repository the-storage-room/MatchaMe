import db from '../../config/database/index'

import {
  fetchAllTagsHelper,
  fetchUserAndTheirPreferenceTagsHelper
} from './tagsSQLHelper';

export const fetchAllTagsQuery = async () => {
  try {
    const queryString = fetchAllTagsHelper();
    const { rows } = await db.query(queryString);
    console.log('Success on fetchAllTagsQuery')
    return rows;
  } catch (err) {
    console.log('Error on fetchAllTagsQuery', err)
  }
}

export const fetchUserAndTheirPreferenceTagsQuery = async userId => {
  try {
    const queryString = fetchUserAndTheirPreferenceTagsHelper();
    const { rows } = await db.query(queryString, [userId])
    console.log('Success on fetchUserAndTheirPreferenceTagsQuery')
    return rows;
  } catch (err) {
    console.log('Error on fetchUserAndTheirPreferenceTagsQuery', err)
  }
}