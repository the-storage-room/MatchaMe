import db from '../../config/database/index';

import {
  fetchSingleUsersQuery
} from '../users/userQueries';

import {
  fetchMultipleUsersQuery
} from '../ratings/ratingsQueries';

import {
  fetchStarredMatchesQuery,
  fetchUnstarredMatchesQuery
} from '../outcomes/outcomesQueries';

import { fetchStageTwoQuery } from '../stageTwo/stageTwoQueries';

import { fetchUserAndTheirPreferenceTagsQuery } from '../tags/tagsQueries';

import { fetchPendingMatchmakingQuery } from '../matchmaking/matchmakingQueries';

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
      user: (await fetchUserAndTheirPreferenceTagsQuery(
        req.params.userId,
        0
      )).map(tag => tag.tag),
      pref: (await fetchUserAndTheirPreferenceTagsQuery(
        req.params.userId,
        1
      )).map(tag => tag.tag)
    };

    data.photoData = { photos };

    data.powerRankingData = { totalPoints: powerranking };

    data.signupStatusData = signupcomplete;

    data.outcomesData = {
      starred: await fetchStarredMatchesQuery(req.params),
      allOthers: await fetchUnstarredMatchesQuery(req.params)
    };

    data.currentMatchData = await fetchStageTwoQuery(req.params);

    data.ratingData = await fetchMultipleUsersQuery(req.params.userId);

    data.matchData = await fetchPendingMatchmakingQuery(req.params);
    res.send(data);
  } catch (err) {
    console.log('Error with fetchInitializeController: ', err);
  }
};
