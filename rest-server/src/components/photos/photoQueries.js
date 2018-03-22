import db from '../../config/database/index';

import {
  fetchAllPhotosHelper,
  fetchPrimaryPhotoHelper,
  addPhotoHelper,
  deletePhotoHelper,
  updatePrimaryPhotoHelper
} from './photoSQLHelpers';

export const fetchAllPhotosQuery = async userId => {
  try {
    const queryString = fetchAllPhotosHelper(userId);
    const { rows } = await db.query(queryString);
    return rows;
  } catch (err) {}
};

export const fetchPrimaryPhotoQuery = async body => {
  try {
  } catch (err) {}
};

export const addPhotoQuery = async body => {
  try {
  } catch (err) {}
};

export const deletePhotoQuery = async body => {
  try {
  } catch (err) {}
};

export const updatePrimaryPhotoQuery = async body => {
  try {
  } catch (err) {}
};
