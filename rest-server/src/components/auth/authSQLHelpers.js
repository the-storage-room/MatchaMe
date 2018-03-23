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
      signupComplete 
    )
    VALUES (
      $1,
      $2,
      $3,
      '0'
    )
    RETURNING id, email, username, signupComplete
  `;
};
