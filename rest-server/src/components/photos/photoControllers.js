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
    res.status(200).send(data);
  } catch (err) {
    console.log('Error with fetchAllPhotosController');
  }
};

export const fetchPrimaryPhotoController = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await fetchPrimaryPhotoQuery(userId);
    res.status(200).send(data);
  } catch (err) {
    console.log('Error with fetchPrimaryPhotoController');
  }
};

export const addPhotoController = async (req, res) => {
  try {
    await addPhotoQuery(req);
    res.status(200).send('added photo');
  } catch (err) {
    console.error
  }
};

export const deletePhotoController = async (req, res) => {
  try {
    await deletePhotoQuery(req);
    res.status(200).send('deleted photo');
  } catch (err) {
    console.error
  }
};

export const updatePrimaryPhotoController = async (req, res) => {
  try {
    const data = await updatePrimaryPhotoQuery(req.params);
    res.status(200).send(data);
  } catch (err) {
    console.log('Error on updatePrimaryPhotoController', err);
  }
};
