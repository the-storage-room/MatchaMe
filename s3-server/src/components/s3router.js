import express from 'express';

const router = express.Router();

import s3controller from './s3controller';

router.post('/photo', s3controller.addPhoto); 
router.delete('/photo', s3controller.deletePhoto); 

module.exports = router;