import express from 'express';

import {
  fetchAllPhotosController,
  fetchPrimaryPhotoController,
  addPhotoController,
  deletePhotoController,
  updatePrimaryPhotoController
} from './photoControllers';

const router = express.Router();

router.route('/fetchAllPhotos/:userId').get(fetchAllPhotosController);

router.route('/fetchPrimaryPhoto/:userId').get(fetchPrimaryPhotoController);

router.route('/addPhoto').post(addPhotoController);

router.route('/deletePhoto/:userId/:photoId').delete(deletePhotoController);

router.route('/updatePrimaryPhoto/').put(updatePrimaryPhotoController);

export default router;
