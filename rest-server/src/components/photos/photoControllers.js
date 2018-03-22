import {
  fetchAllPhotosQuery,
  fetchPrimaryPhotoQuery,
  addPhotoQuery,
  deletePhotoQuery,
  updatePrimaryPhotoQuery
} from './photoQueries';

export const fetchAllPhotosController = async (req, res) => {
  try {
  } catch (err) {

  }
};

export const fetchPrimaryPhotoController = async (req, res) => {
  try {

  } catch (err) {

  }
};

export const addPhotoController = async (req, res) => {
  try {

  } catch (err) {

  }
};

export const deletePhotoController = async (req, res) => {
  try {
    const { userId } = req.params
    const { photoId } = req.params
    const data = await deletePhotoQuery(userId, photoId);
    console.log('Success on deletePhotoController')
    return res.status(200).send();
  } catch (err) {
    console.log('Error on deletePhotoController', err)
  }
};

export const updatePrimaryPhotoController = async (req, res) => {
  try {


  } catch (err) {

  }
};
