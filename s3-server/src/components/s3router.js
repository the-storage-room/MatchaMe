import express from 'express';
import s3controller from './s3controller';

const router = express.Router();


router.post('/s3', s3controller.addPhoto); 
router.delete('/s3/:userId/:photoKey/:photoId', s3controller.deletePhoto); 

module.exports = router;