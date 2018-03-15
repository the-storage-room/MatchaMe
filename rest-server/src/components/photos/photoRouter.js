import express from 'express';

import {
  fetchAllPhotosController,
  fetchPrimaryPhotoController,
  addPhotoController,
  deletePhotoController,
  updatePrimaryPhotoController
} from './photoControllers';

const router = express.Router();

router.route('/fetchAllPhotos')
  .get(fetchAllPhotosController);

router.route('/fetchPrimaryPhoto')
  .get(fetchPrimaryPhotoController);

router.route('/addPhoto')
  .post(addPhotoController);

router.route('/deletePhoto')
  .delete(deletePhotoController);

router.route('/updatePrimaryPhoto')
  .put(updatePrimaryPhotoController);

export default router;