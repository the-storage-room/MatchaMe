import db from '../../config/database/index'

import {
  fetchAllTagsHelper,
  UserAndPreferencseTagsHelper
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

export const UserAndPreferencseTagsQuery = async () => {
  try {

  } catch (err) {

  }
}