import s3service from './s3service';

const BUCKET = process.env.BUCKET;

module.exports = {
  addPhoto: (input, callback) => {
    s3service.addPhoto(BUCKET, input.files.file,(data) => {
    // `https://${BUCKET}.s3.amazonaws.com/${input.files.file.name}`,
    })
  },

  deletePhoto: (input, callback) => {
    s3service.deletePhoto(BUCKET, input.files.file.name,(data) => {
      console.log('deleted')
    })
  },
}