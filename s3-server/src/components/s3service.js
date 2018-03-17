import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

exports.deletePhoto = (bucketName, keyName, cb ) => {
  const params = { Bucket: bucketName, Key: keyName };
  s3.deleteObjects(params, (err, data) => {
    if (err) {
      console.log(`error deleting key: ${keyName} in bucket: ${bucketName}`, err );
    }
    cb(data);
  });
}

exports.addPhoto = (user, file, cb) => {
  s3.upload({
    Bucket: user,
    Key: file.name,
    Body: file.data,
    ACL: 'public-read'
  }, (data) => {
    console.log('Successfully uploaded photo.');
    cb(data)
  });
}