import db from '../../config/database/';

import { filterUsersHelper } from './filteUsersSQLHelper';

export const filterUsersQuery = async userObj => {
  try {
    const { averageattractiveness, preference, gender, id } = userObj;
    let max = averageattractiveness + 3;
    let min = averageattractiveness - 3;
    let preferredGenderString = '';
    let preferenceString = '';

    gender === 1
      ? (preferenceString =
          'preference=1 OR preference=4 OR preference=5 OR preference=7')
      : gender === 2
        ? (preferenceString =
            'preference=2 OR preference=4 OR preference=5 OR preference=7')
        : (preferenceString =
            'preference=3 OR preference=5 OR preference=6 OR preference=7');

    preference === 1
      ? (preferredGenderString = 'gender=1')
      : preference === 2
        ? (preferredGenderString = 'gender=2')
        : preference === 3
          ? (preferredGenderString = 'gender=3')
          : preference === 4
            ? (preferredGenderString = 'gender=1 OR gender=2')
            : preference === 5
              ? (preferredGenderString = 'gender=1 OR gender=3')
              : preference === 6
                ? (preferredGenderString = 'gender=2 OR gender=7')
                : 'gender=gender';

    const queryString = filterUsersHelper(
      max,
      min,
      preferredGenderString,
      preferenceString,
      id
    );
    console.log(queryString);
    const { rows } = await db.query(queryString);
    console.log(rows);
  } catch (error) {
    console.log('Error with filterUsersQuery: ', error);
  }
};

const testObj = {
  id: 4,
  gender: 1,
  preference: 2,
  averageattractiveness: 5
};

filterUsersQuery(testObj);
