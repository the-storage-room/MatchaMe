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
    console.log('Success on fetchAllPhotosQuery');
    return rows;
  } catch (err) {
    console.log('Error on fetchAllPhotosQuery', err);
  }
};

export const fetchPrimaryPhotoQuery = async userId => {
  try {
    const queryString = fetchPrimaryPhotoHelper(userId);
    const { rows } = await db.query(queryString);
    console.log('Successfully used fetchPrimaryPhotoQuery');
    return rows[0];
  } catch (err) {
    console.log('Error with fetchPrimaryPhotoQuery', err);
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
  const queryString = updatePrimaryPhotoHelper(body);
  const { rows } = await db.query(queryString);
  return rows[0];
  try {
  } catch (err) {}
};
