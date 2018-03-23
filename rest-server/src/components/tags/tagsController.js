import {
  fetchAllTagsQuery,
  fetchUserAndTheirPreferenceTagsQuery,
  deleteUserAndPreferencesTagsQuery
} from './tagsQueries';

export const fetchAllTagsController = async (req, res) => {
  try {
    const data = await fetchAllTagsQuery();
    console.log('Successful fetchAllTagsController')
    res.status(200).send(data);
  } catch (err) {
    console.log('Error on fetchAllTagsController', err)
  }
}

export const fetchUserAndTheirPreferenceTagsController = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await fetchUserAndTheirPreferenceTagsQuery(userId);
    console.log('Success on fetchUserAndTheirPreferenceTagsController')
    res.status(200).send(data);
  } catch (err) {
    console.log('Error on fetchUserAndTheirPreferenceTags', err)
  }
}

export const deleteUserAndPreferenceTagsController = async (req, res) => {
  try {
    const { userId, tagId } = req.params;
    const { type } = req.body;
    const data = await deleteUserAndPreferencesTagsQuery(userId, tagId, type);
    console.log('Success on deleteUserAndPreferenceTagsController')
    res.status(200).send(data.rows)
  } catch (err) {
    console.log('Error on deleteUserAndPreferenceTagsController', err)
  }
}