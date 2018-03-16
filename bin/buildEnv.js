const fs = require('fs');

const envVariables = require('../config/.env.sample.js');

const makeEnvFiles = () => {
  for (let key in envVariables) {
    fs.writeFileSync(`./${key}/.env`, '');
    appendEnvFiles(key)
  }
}

const appendEnvFiles = (k) => {
  envVariables[k].forEach((variable) => {
    fs.appendFileSync(`./${k}/.env`, variable + '\n')
  })
}

makeEnvFiles();