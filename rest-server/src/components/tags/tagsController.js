import {
  fetchAllTagsQuery,
  UserAndPreferencseTagsQuery
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

export const UserAndPreferencseTagsController = async (req, res) => {
  try {

  } catch (err) {

  }
}