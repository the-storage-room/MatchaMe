import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

exports.deletePhoto = (bucketName, keyName, cb ) => {
  s3.deleteObjects({
      Bucket: bucketName, 
      Key: keyName 
    }, (err, data) => {
      if (err) {
        console.error(`error deleting key: ${keyName} in bucket: ${bucketName}`, err );
      }
    cb(data);
  });
}

exports.addPhoto = (user, file, cb) => {
  s3.upload({
    Bucket: user,
    Key: file.name,
    Body: file.data,
    ACL: 'public-read',
    ContentType: 'image/png'
  }, (data) => {
    console.log('Successfully uploaded photo.');
    cb(data)
  });
}