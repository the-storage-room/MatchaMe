import axios from 'axios';
import s3service from './s3service';

const { BUCKET } = process.env;

module.exports = {
  addPhoto: async (input, cb) => {
    const filename = generateNewFileName(input.files.file.name)
    const info = `https://s3-us-west-1.amazonaws.com/${process.env.BUCKET}/${filename}`;
    try {
      await s3service.addPhoto(BUCKET, input.files.file, filename, (data) => {
        cb(data);
      })
      await axios.post(`${S3_SERVER_URL}/api/addPhoto`, info);
    } catch (err) {
      console.error(err)
    }
  },
  deletePhoto: (input, callback) => {
    s3service.deletePhoto(BUCKET, input.files.file.name, (data) => {
      console.log('deleted')
    })
  },
}

const generateNewFileName = (filename) => {
  let currentDate = Date.now().toString();
  return filename + currentDate
}