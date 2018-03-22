import axios from 'axios';
import s3service from './s3service';

const { BUCKET , REST_SERVER_URL} = process.env;

module.exports = {
  addPhoto: async (input, cb) => {
    const filename = generateNewFileName(input.body.username)
    const url = `https://s3-us-west-1.amazonaws.com/${process.env.BUCKET}/${filename}`;
    try {
      await s3service.addPhoto(BUCKET, input.files.file, filename, (data) => {
        cb(data);
      })
      await axios.post(`${REST_SERVER_URL}/api/photos/addPhoto`, {url: url, userId: input.body.userId});
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