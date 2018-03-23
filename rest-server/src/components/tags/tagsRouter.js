import express from 'express';

import {
  fetchAllTagsController,
  fetchUserAndTheirPreferenceTagsController,
  deleteUserAndPreferenceTagsController
} from '../tags/tagsController';

const router = express.Router();

router.route('/fetchAllTags')
  .get(fetchAllTagsController)

router.route('/fetchUserAndTheirPreferenceTags/:userId')
  .get(fetchUserAndTheirPreferenceTagsController)

router.route('/deleteUserAndPreferenceTags/:userId/:tagId')
  .delete(deleteUserAndPreferenceTagsController)

// router.route('/updateAndDeleteTags/:userId')
//   .put(updateAndDeleteTagsController)
//   .delete(updateAndDeleteTagsController)

// router.route('/updateAndDeletePreferenceTags/:userId')
//   .put(updateAndDeletePreferenceTagsController)
//   .delete(updateAndDeletePreferenceTagsController)

export default router;