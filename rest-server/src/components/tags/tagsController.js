import {
  fetchAllTagsQuery,
  fetchUserAndTheirPreferenceTagsQuery,
  putUserAndPreferencesTagsQuery
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

export const putUserAndPreferenceTagsController = async (req, res) => {
  try {
    const { type, userId } = req.params;
    const { tags } = req.body;
    await putUserAndPreferencesTagsQuery(userId, tags, type);
    console.log('Success on putUserAndPreferenceTagsController')
    res.status(200).send('Successful deletion')
  } catch (err) {
    console.log('Error on putUserAndPreferenceTagsController', err)
  }
}