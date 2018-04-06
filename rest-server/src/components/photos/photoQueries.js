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
    let { rows } = await db.query(queryString, [userId]);
    rows.length === 0 ? rows = [{ url: 'https://i.imgur.com/p4wvSiO.jpg' }] : null
    return rows;
  } catch (err) {
    console.log('Error on fetchAllPhotosQuery', err);
  }
};

export const fetchPrimaryPhotoQuery = async userId => {
  try {
    const queryString = fetchPrimaryPhotoHelper();
    let { rows } = await db.query(queryString, [userId]);
    rows.length === 0 ? rows = [{ url: 'https://i.imgur.com/p4wvSiO.jpg' }] : null
    return rows[0];
  } catch (err) {
    console.log('Error with fetchPrimaryPhotoQuery', err);
  }
};

export const addPhotoQuery = async ({ body }) => {
  try {
    const { url, id } = body;
    const queryString = addPhotoHelper()
    const data = await db.query(queryString, [url, id]);
    return data
  } catch (err) {
    console.error
  }
};

export const deletePhotoQuery = async (req) => {
  try {
    const queryString = deletePhotoHelper(req.params);
    const { rows } = await db.query(queryString, [req.params.photoId])
    return rows
  } catch (err) {
    console.error
  }
};

export const updatePrimaryPhotoQuery = async ({ userId, photoId }) => {
  try {
    const queryString = updatePrimaryPhotoHelper();
    const temp = await db.query(queryString[0], [userId]);
    const { rows } = await db.query(queryString[1], [userId, photoId]);
    return rows[0];
  } catch (err) {
    console.log('Error with updatePrimaryPhotoQuery:', err);
  }
};
