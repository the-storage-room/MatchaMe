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
    const queryString = fetchPrimaryPhotoHelper();
    const data = await db.query(queryString);
    console.log('Success on fetchPrimaryPhotoQuery')
    return data;
  } catch (err) {
    console.log('Error on fetchPrimaryPhotoQuery', err)
  }
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
