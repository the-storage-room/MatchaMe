import {
  fetchAllPhotosQuery,
  fetchPrimaryPhotoQuery,
  addPhotoQuery,
  deletePhotoQuery,
  updatePrimaryPhotoQuery
} from './photoQueries';

export const fetchAllPhotosController = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await fetchAllPhotosQuery(userId);
    console.log('Successfully used fetchAllPhotosController');
    res.status(200).send(data);
  } catch (err) {
    console.log('Error with fetchAllPhotosController');
  }
};

export const fetchPrimaryPhotoController = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await fetchPrimaryPhotoQuery(userId);
    console.log('Successfully used fetchPrimaryPhotoController');
    res.status(200).send(data);
  } catch (err) {
    console.log('Error with fetchPrimaryPhotoController');
  }
};

export const addPhotoController = async (req, res) => {
  const { url, userId } = req.body;
  try {
    console.log(url, userId);
  } catch (err) {}
};

export const deletePhotoController = async (req, res) => {
  try {
  } catch (err) {}
};

export const updatePrimaryPhotoController = async (req, res) => {
  try {
    const data = await updatePrimaryPhotoQuery(req.params);
    res.status(200).send(data);
  } catch (err) {
    console.log('Error on updatePrimaryPhotoController', err);
  }
};
