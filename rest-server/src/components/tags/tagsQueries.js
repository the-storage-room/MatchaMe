import db from '../../config/database/index'

import {
  fetchAllTagsHelper,
  fetchUserAndTheirPreferenceTagsHelper,
  deleteUserTagsHelper,
  postUserAndPreferenceTagsHelper
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

export const putUserAndPreferencesTagsQuery = async (userId, tags, type) => {
  try {
    console.log(userId, tags, type)
    const deleteQueryString = deleteUserTagsHelper();
    await db.query(deleteQueryString, [userId, type]);
    console.log('Success on deleteUserTags');
    const postQueryString = postUserAndPreferenceTagsHelper();
    await tags
      .forEach((tag) => {
        db.query(postQueryString, [userId, tag, type]);
      })
  } catch (err) {
    console.log('Error on postUserAndPreferencesTagsQuery', err)
  }
}