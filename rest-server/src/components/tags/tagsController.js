import {
  fetchAllTagsQuery,
  fetchUserAndTheirPreferenceTagsQuery,
  putUserAndPreferencesTagsQuery
} from './tagsQueries';

export const fetchAllTagsController = async (req, res) => {
  try {
    const data = await fetchAllTagsQuery();
    console.log('Successful fetchAllTagsController');
    res.status(200).send(data);
  } catch (err) {
    console.log('Error on fetchAllTagsController', err);
  }
};

export const fetchUserAndTheirPreferenceTagsController = async (req, res) => {
  try {
    const { userId, type } = req.params;
    const data = await fetchUserAndTheirPreferenceTagsQuery(userId, type);
    console.log('Success on fetchUserAndTheirPreferenceTagsController');
    res.status(200).send(data);
  } catch (err) {
    console.log('Error on fetchUserAndTheirPreferenceTags', err);
  }
};

export const putUserAndPreferenceTagsController = async (req, res) => {
  try {
    const { type, userId } = req.params;
    const binaryType = type === 'user' ? 0 : 1;
    await putUserAndPreferencesTagsQuery(userId, req.body, binaryType);
    console.log('Success on putUserAndPreferenceTagsController');
    res.status(200).send('Successful deletion');
  } catch (err) {
    console.log('Error on putUserAndPreferenceTagsController', err);
  }
};
