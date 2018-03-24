import axios from 'axios';
import s3service from './s3service';

const { BUCKET , REST_SERVER_URL} = process.env;

module.exports = {
  addPhoto: async (input, cb) => {
    const filename = generateNewFileName(input.body.username)
    const url = `https://s3-us-west-1.amazonaws.com/${BUCKET}/${filename}`;
    try {
      await s3service
        .addPhoto(BUCKET, input.files.file, filename, (data) => {;
        })
      await axios
        .post(
          `${REST_SERVER_URL}/api/photos/addPhoto`,
          {url: url, id: input.body.id}
        );
        cb()
    } catch (err) {
      console.error(err)
    }
  },
  deletePhoto: async (req, cb) => {
    const { userId, photoKey, photoId } = req.params;
    try {
      const data = await s3service.deletePhoto(BUCKET, photoKey, (data) => {
      })
      await axios
        .delete(`${REST_SERVER_URL}/api/photos/deletePhoto/${userId}/${photoId}`)
        cb()
    } catch (err) {
      console.error
    }
  },
}

const generateNewFileName = (filename) => {
  let currentDate = Date.now().toString();
  return filename + currentDate
}