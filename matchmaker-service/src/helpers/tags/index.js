import { tagsObj } from './tagsObj';

export const retrieveScore = (
  user1Tags,
  user1PreferenceTag,
  user2Tags,
  user2PreferenceTag
) => {
  let totalScore = 0;
  if (
    user1Tags.length === 3 &&
    user1PreferenceTag.length === 3 &&
    user2Tags.length === 3 &&
    user2PreferenceTag.length === 3
  ) {
    for (let pref of user1PreferenceTag) {
      for (let tag of user2Tags) {
        totalScore += tagsObj[pref][tag];
      }
    }
    for (let pref of user2PreferenceTag) {
      for (let tag of user1Tags) {
        totalScore += tagsObj[pref][tag];
      }
    }
  }
  return totalScore;
};

// console.log(retrieveScore([7, 16, 24], [3, 22, 30], [30, 20, 8], [6, 28, 5]));
