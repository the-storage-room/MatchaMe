import s3service from './s3service';

const BUCKET = process.env.BUCKET;

module.exports = {
  addPhoto: (input, callback) => {
    s3service.addPhoto(BUCKET, input.files.file,(data) => {
    // `https://s3-us-west-1.amazonaws.com/${BUCKET}/${input.files.file.name}`,
    })
  },
  deletePhoto: (input, callback) => {
    s3service.deletePhoto(BUCKET, input.files.file.name,(data) => {
      console.log('deleted')
    })
  },
}