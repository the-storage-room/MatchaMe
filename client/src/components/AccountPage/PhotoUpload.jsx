import React, { Component } from 'react';
import axios from 'axios';

import TargetPhoto from './TargetPhoto.jsx';
import PhotoItem from './PhotoItem.jsx'
import style from './AccountPage.css'

const S3_SERVER_URL = process.env.S3_SERVER_URL;

class PhotoUpload extends Component {
  constructor() {
    super();
    this.state = {
        file: null,
        userId: 102032134123523,
        userPhotos: [
          'https://s3-us-west-1.amazonaws.com/ajjjthesis/azrael.jpg1521649554118',
          'https://s3-us-west-1.amazonaws.com/ajjjthesis/2017fordfusion-factsheet.jpg1521649496626',
          'https://s3-us-west-1.amazonaws.com/ajjjthesis/6s2w1zHIv_k.jpg1521615210130',
          'https://s3-us-west-1.amazonaws.com/ajjjthesis/Bentley+Bentayga++.jpg1521649326452',
          'https://s3-us-west-1.amazonaws.com/ajjjthesis/09172015_3578.jpg1521614906951'
        ],
        username: 'jacten',
        targetPhoto: 0,
    };
  }

  handleUploadChange = (e) => {
    this.setState({ file: e.target.files[0] });
  }

  handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('userId', this.state.userId);
    formData.append('username', this.state.username);
    try {
      const data = await axios.post(`${S3_SERVER_URL}/api/s3`, formData)
      console.log(data.data)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <div className = {style.photoPage}>
        <div className={style.basicMargin}>
          <form>
            <label>
            Upload:
              <input
                type="file"
                onChange={this.handleUploadChange}
              />
            </label>
          </form>
          <button onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
        <div className={style.basicMargin}>
          <TargetPhoto photo={this.state.userPhotos[this.state.targetPhoto]}/>
        </div>
        <div className={style.smallImageHolder}>
          {
            this.state.userPhotos
              .map(photo => 
                <PhotoItem
                key={photo}
                photo={photo}
                />
              )
          }
        </div>
      </div>
    )
  }
}

export default PhotoUpload;
