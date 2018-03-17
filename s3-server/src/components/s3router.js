import express from 'express';

const router = express.Router();

import s3controller from './s3controller';

router.post('/s3', s3controller.addPhoto); 
router.delete('/s3', s3controller.deletePhoto); 

module.exports = router;