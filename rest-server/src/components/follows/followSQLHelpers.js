export const fetchStarredMatchesHelper = () => {
  return `
    SELECT *
    FROM follow
    WHERE star = TRUE
  `;
};

export const fetchUnstarredMatchesHelper = () => {
  return `
    SELECT *
    FROM follow
    WHERE star = FALSE
  `;
};

export const starSingleMatchHelper = () => {
  return `

  `;
};

export const unstarSingleMatchHelper = () => {
  return `
  
  `;
};

// FETCH STARRED MATCHES HELPER