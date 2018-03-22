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
  const { url, userId } = req.body;
  try {
    console.log(url, userId)
  } catch (err) {

  }
};

export const deletePhotoController = async (req, res) => {
  try {
  } catch (err) {
  }
};

export const updatePrimaryPhotoController = async (req, res) => {
  try {

  } catch (err) {

  }
};
