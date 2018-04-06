import db from '../../config/database/';

import {
  fetchAllUsersHelper,
  fetchUserAndTheirPreferenceTagsHelper
} from './fetchAllUsersSQLHelper';

//fetches all users
export const fetchAllUsersQuery = async () => {
  try {
    const { rows } = await db.query(fetchAllUsersHelper());
    for (let user of rows) {
      user.tags = (await fetchUserAndTheirPreferenceTagsQuery(user.id, 0)).map(
        tag => tag.id
      );
      user.tagPreferences = (await fetchUserAndTheirPreferenceTagsQuery(
        user.id,
        1
      )).map(tag => tag.id);
    }
    return rows;
  } catch (err) {
    console.error('Error with fetchAllUsersQuery :', err);
  }
};

export const fetchUserAndTheirPreferenceTagsQuery = async (userId, type) => {
  try {
    const queryString = fetchUserAndTheirPreferenceTagsHelper();
    const { rows } = await db.query(queryString, [userId, type]);
    return rows;
  } catch (err) {
    console.error('Error on fetchUserAndTheirPreferenceTagsQuery', err);
  }
};
