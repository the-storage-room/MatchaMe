export const fetchMultipleUsersHelper = () => {
  return `
    SELECT id, firstname, lastname, age, location, bio, gender
    FROM USERS
    WHERE users.averageattractiveness > $1
    AND users.averageattractiveness < $2
    AND signupcomplete=true
    AND id NOT in
    (SELECT ratee FROM raterratee
      WHERE rater=$3)
    AND NOT id=$3
    ORDER BY RANDOM()
    LIMIT 10
  `;
};

export const fetchUsersTagsForRatingHelper = () => {
  return `
    SELECT tag, type, users.id
    FROM TAGS
    INNER JOIN USERS_TAGS on TAGS.id=USERS_TAGS.tagid
    INNER JOIN USERS on USERS_TAGS.userid=USERS.id
    WHERE users.averageattractiveness > $1
    AND users.averageattractiveness < $2
  `;
};

export const fetchUsersPhotosHelper = () => {
  return `
    SELECT url, users.id 
    FROM PHOTO
    INNER JOIN USERS on USERS.id=PHOTO.userid
    WHERE users.averageattractiveness > $1
    AND users.averageattractiveness < $2
  `;
};

export const fetchSingleUserAttractivenessHelper = () => {
  return `
    SELECT averageattractiveness
    FROM users
    WHERE id=$1
  `;
};

export const updateTotalAttractivenessHelper = () => {
  return `
    UPDATE users
    SET totalattractiveness=(totalattractiveness+$1)
    WHERE id=$2 
    RETURNING totalattractiveness, totalNumOfRatings
  `;
};

export const updateAverageAttractivenessHelper = ({
  ratee,
  newAverageAttractiveness,
  newTotalNumOfRatings
}) => {
  return `
    UPDATE users
    SET averageattractiveness=${newAverageAttractiveness},
    totalNumOfRatings=${newTotalNumOfRatings}
    WHERE id=${ratee}
  `;
};

export const updateRaterRateeRelationshipHelper = ({ rater, ratee }) => {
  return `
    INSERT INTO raterratee
    (rater, ratee)
    VALUES (${rater}, ${ratee})
  `;
};
