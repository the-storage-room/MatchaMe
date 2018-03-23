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
  try {
    const data = await addPhotoQuery(req);
  } catch (err) {
    console.error
  }
};

export const deletePhotoController = async (req, res) => {
  try {
    const data = await deletePhotoQuery(req);
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
