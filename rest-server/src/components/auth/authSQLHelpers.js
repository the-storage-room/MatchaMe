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
      email 
    )
    VALUES (
      '${username}',
      '${password}',
      '${email}'
    )
    RETURNING id, email, username
  `;
};

export const logoutHelper = () => {
  return `
    SELECT 
  `;
};