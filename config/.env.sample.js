const envBuild = {
  'client': [
    'NODE_ENV=DEVELOPMENT',
    'DEBUG=TRUE',
    'PORT=1337',
    'ENVPREFIX=REACT_APP_',
    'REST_SERVER_URL=http://localhost:5000',
    'SOCKET_SERVER_URL=http://localhost:4155',
    'MATCHMAKER_SERVICE_URL=http://localhost:1147',
    'S3_SERVER_URL=http://localhost:8080'
  ],
  'rest-server': [
    'DEBUG=TRUE',
    'NODE_ENV=test',
    'PORT=5000',
    'LOCAL_USER=root',
    'LOCAL_HOST=localhost',
    'LOCAL_DATABASE=MatchMe',
    'LOCAL_PASSWORD=""',
    'LOCAL_PORT=5432',
    'AWS_USER=',
    'AWS_HOST=',
    'AWS_DATABASE=',
    'AWS_PASSWORD=',
    'AWS_PORT=',
    'SALT_ROUNDS=10',
    'TOKEN_SECRET=theStorageRoom'
  ],
  'socket-server': [
    'NODE_ENV=DEVELOPMENT',
    'DEBUG=TRUE',
    'HOST=http://localhost',
    'PORT=4155',
    'REST_SERVER_URL=http://localhost:5000',
    'TOKEN_SECRET=theStorageRoom'
  ],
  'matchmaker-service': [
    'NODE_ENV=DEVELOPMENT',
    'DEBUG=TRUE',
    'HOST=http://localhost',
    'PORT=1147',
    'REST_SERVER_URL=http://localhost:5000',
    'SOCKET_SERVER_URL=http://localhost:4155'
  ],
  's3-server': [
    'NODE_ENV=DEVELOPMENT',
    'DEBUG=TRUE',
    'HOST=http://localhost',
    'PORT=8080',
    'REST_SERVER_URL=http://localhost:5000',
    'AWS_ACCESS_KEY_ID=',
    'AWS_SECRET_ACCESS_KEY=',
    'AWS_REGION="us-west-1"',
    'BUCKET='
  ]
};

module.exports = envBuild;