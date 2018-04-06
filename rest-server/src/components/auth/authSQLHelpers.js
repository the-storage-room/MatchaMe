export const loginHelper = () => {
  return `
    SELECT id, username, email, password
    FROM users
    WHERE username=$1
  `;
};

export const signupHelper = () => {
  return `
    INSERT INTO users (
      username, 
      password, 
      email,
      firstname,
      lastname,
      signupComplete
    )
    VALUES (
      $1,
      $2,
      $3,
      $4,
      $5,
      '0'
    )
    RETURNING id, email, username, signupComplete
  `;
};
