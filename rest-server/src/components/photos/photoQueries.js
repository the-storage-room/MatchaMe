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
    const queryString = fetchAllPhotosHelper();
    const { rows } = await db.query(queryString, [userId]);
    console.log('Success on fetchAllPhotosQuery')
    return rows;
  } catch (err) {
    console.log('Error on fetchAllPhotosQuery', err);
  }
};

export const fetchPrimaryPhotoQuery = async userId => {
  try {
    const queryString = fetchPrimaryPhotoHelper();
    const { rows } = await db.query(queryString, [userId]);
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
  try {
    const { userId } = body;
    const { photoId } = body;
    console.log(body);
    const queryString = updatePrimaryPhotoHelper(body);
    console.log('this is first query', queryString[0]);
    const temp = await db.query(queryString[0], [userId]);
    console.log('this is second query', queryString[1]);
    const { rows } = await db.query(queryString[1], [userId, photoId]);
    console.log(rows);
    return rows[0];
  } catch (err) {
    console.log('Error with updatePrimaryPhotoQuery:', err);
  }
};
