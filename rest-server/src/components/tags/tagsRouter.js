import express from 'express';

import {
  fetchAllTagsController,
  // UserAndPreferencseTagsController
} from '../tags/tagsController';

const router = express.Router();

router.route('/fetchAllTags')
  .get(fetchAllTagsController)

// router.route('/fetchAllUserAndPreferencseTags/:userId')
//   .get(fetchAllUserAndPreferencesTagsController)

// router.route('/updateAndDeleteTags/:userId')
//   .put(updateAndDeleteTagsController)
//   .delete(updateAndDeleteTagsController)

// router.route('/updateAndDeletePreferenceTags/:userId')
//   .put(updateAndDeletePreferenceTagsController)
//   .delete(updateAndDeletePreferenceTagsController)

export default router;