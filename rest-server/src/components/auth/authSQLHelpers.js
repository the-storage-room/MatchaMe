export const loginHelper = (body) => {
  return `
    SELECT id, username, email
    FROM users
    WHERE username='${body.username}'
  `;
};

export const signupHelper = (body) => {
  return `
    INSERT INTO users (
      username, 
      password, 
      email, 
      lastname, 
      firstname, 
      age,
      location, 
      gender,
      preference,
      bio,
      powerranking
    )
    VALUES (
      '${body.username}',
      '${body.password}',
      '${body.email}',
      '${body.lastname}',
      '${body.firstname}',
       ${body.age},
       ${body.location},
      '${body.gender}',
      '${body.preference}',
      '${body.bio}',
       ${body.powerranking}
    )
    RETURNING id, email, username
  `;
};

export const logoutHelper = () => {
  return `
    SELECT 
  `;
};