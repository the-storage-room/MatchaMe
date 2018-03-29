import fetchAllUsersQuery from '../helpers/allUsers/';

const matchMakeMe = async () => {
  try {
    const allUsers = await fetchAllUsersQuery();
    console.log(allUsers);
  } catch (error) {
    console.log('Error with matchMakeMe Function :', error);
  }
};

matchMakeMe();
