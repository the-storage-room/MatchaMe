export const loginHelper = ({ username }) => {
  return `
    SELECT id, username, email, password
    FROM users
    WHERE username='${username}'
  `;
};

export const signupHelper = ({ username, password, email }) => {
  return `
    INSERT INTO users (
      username, 
      password, 
      email,
      signupComplete 
    )
    VALUES (
      '${username}',
      '${password}',
      '${email}',
      '0'
    )
    RETURNING id, email, username, signupComplete
  `;
};
