import s3model from './s3model';

module.exports = {
  addPhoto: (req, res) => {
    s3model.addPhoto(req, () => {
      res.send('Photo Added');
    });
  },
  deletePhoto: (req, res) => {
    s3model.deletePhoto(req, (err) => {
      if (err) {
        throw err;
      }
      res.send('Deleted Photo');
    });
  },
};