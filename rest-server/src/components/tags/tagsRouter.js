import express from 'express';

import {
  fetchAllTagsController,
  fetchUserAndTheirPreferenceTagsController,
  deleteUserAndPreferenceTagsController,
  postUserAndPreferenceTagsController
} from '../tags/tagsController';

const router = express.Router();

router.route('/fetchAllTags')
  .get(fetchAllTagsController)

router.route('/fetchUserAndTheirPreferenceTags/:userId')
  .get(fetchUserAndTheirPreferenceTagsController)

router.route('/UserAndPreferenceTags/:userId/:tagId')
  .delete(deleteUserAndPreferenceTagsController)
  .post(postUserAndPreferenceTagsController)

export default router;