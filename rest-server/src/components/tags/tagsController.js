import {
  fetchAllTagsQuery,
  fetchUserAndTheirPreferenceTagsQuery
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