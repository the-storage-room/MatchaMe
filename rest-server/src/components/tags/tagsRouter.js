import express from 'express';

import {
  fetchAllTagsController,
  fetchUserAndTheirPreferenceTagsController,
  putUserAndPreferenceTagsController
} from '../tags/tagsController';

const router = express.Router();

router.route('/fetchAllTags')
  .get(fetchAllTagsController)

//gets all user tags and user's preference tags
router.route('/fetchUserAndTheirPreferenceTags/:userId')
  .get(fetchUserAndTheirPreferenceTagsController)

//for when the user wants to change their own tags or their preference tags
router.route('/userAndPreferenceTags/:type/:userId/')
  .put(putUserAndPreferenceTagsController)

export default router;