import express from 'express';

import {
  fetchAllTagsController,
  fetchUserAndTheirPreferenceTagsController
} from '../tags/tagsController';

const router = express.Router();

router.route('/fetchAllTags')
  .get(fetchAllTagsController)

router.route('/fetchUserAndTheirPreferenceTags/:userId')
  .get(fetchUserAndTheirPreferenceTagsController)

// router.route('/updateAndDeleteTags/:userId')
//   .put(updateAndDeleteTagsController)
//   .delete(updateAndDeleteTagsController)

// router.route('/updateAndDeletePreferenceTags/:userId')
//   .put(updateAndDeletePreferenceTagsController)
//   .delete(updateAndDeletePreferenceTagsController)

export default router;