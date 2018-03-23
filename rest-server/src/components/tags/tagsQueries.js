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

export const deleteUserAndPreferencesTagsQuery = async (userId, tagId, type) => {
  try {
    let rows;
    if (type === 'user') {
      const queryString = deleteUserTagsHelper();
      rows = await db.query(queryString[0], [userId, tagId, type]);
    } else if (type==='preference') {
      const queryString = deleteUserTagsHelper();
      rows = await db.query(queryString[1], [userId, tagId, type]);
    }
    console.log('Success on deleteUserTags');
    return rows;
  } catch (err) {
    console.log('Error on deleteUserTagsQuery', err)
  }
}