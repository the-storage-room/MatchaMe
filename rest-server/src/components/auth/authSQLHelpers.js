export const loginHelper = () => {
  return `

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
    
  `;
};

export const logoutHelper = () => {
  return `
    SELECT 
  `;
};