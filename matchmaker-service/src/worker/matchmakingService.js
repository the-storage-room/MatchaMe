import { fetchAllUsersQuery } from '../helpers/allUsers/';

import { 
  filterUsersQuery,
  insertIntoMatchQuery 
} from '../helpers/filterUsers/';

import { retrieveScore } from '../helpers/tags/';

import { findCoordinatesAndCalculateDistance } from '../helpers/location/';

const matchMakeMe = async () => {
  try {
    const allUsers = await fetchAllUsersQuery();
    if (allUsers.length) {
      for (let user of allUsers) {
        let filteredList = await filterUsersQuery(user);
        filteredList = filteredList.filter(async possibleMatch => {
          const score = retrieveScore(
            user.tags,
            user.tagPreferences,
            possibleMatch.tags,
            possibleMatch.tagPreferences
          );
          const distanceApart = await findCoordinatesAndCalculateDistance(
            user.location,
            possibleMatch.location
          );
          if (score >= 36 && distanceApart <= 25) return possibleMatch;
        });
        console.log(`${user.id}: ${filteredList.length}`);
        for(let matched of filteredList) {
          insertIntoMatchQuery(user.id, matched.id)
        }
      }
    }
  } catch (error) {
    console.log('Error with matchMakeMe Function :', error);
  }
};

matchMakeMe();
