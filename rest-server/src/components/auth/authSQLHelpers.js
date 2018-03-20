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
      email 
    )
    VALUES (
      '${body.username}',
      '${body.password}',
      '${body.email}'
    )
    RETURNING id, email, username
  `;
};

export const logoutHelper = () => {
  return `
    SELECT 
  `;
};