import db from '../../config/database/index';

import { fetchSingleUsersQuery } from '../users/userQueries';

import {
  fetchStarredMatchesQuery,
  fetchUnstarredMatchesQuery
} from '../outcomes/outcomesQueries';

import { fetchStageTwoQuery } from '../stageTwo/stageTwoQueries';

import { fetchUserTagsAndPreferencesHelper } from '../users/userSQLHelper';

export const fetchInitializeController = async (req, res) => {
  try {
    const data = {};
    const {
      id,
      username,
      email,
      lastname,
      firstname,
      age,
      location,
      gender,
      preference,
      bio,
      powerranking,
      signupcomplete,
      photos
    } = await fetchSingleUsersQuery(req.params);

    data.accountData = { id, username, email, firstname, lastname };
    data.bioData = { age, location, gender, preference, bio };
    data.tagData = {
      user: (await db.query(fetchUserTagsAndPreferencesHelper()[0], [
        req.params.userId
      ])).rows.map(tag => tag.tag),
      pref: (await db.query(fetchUserTagsAndPreferencesHelper()[1], [
        req.params.userId
      ])).rows.map(tag => tag.tag)
    };
    data.photoData = { photos };
    data.powerRankingData = { totalPoints: powerranking };
    data.signupStatusData = signupcomplete;
    data.outcomesData = {
      starred: await fetchStarredMatchesQuery(req.params),
      allOthers: await fetchUnstarredMatchesQuery(req.params)
    };
    data.currentMatchData = await fetchStageTwoQuery(req.params);
    console.log('Success with fetchInitializeController: ');
    res.send(data);
  } catch (err) {
    console.log('Error with fetchInitializeController: ', err);
  }
};
