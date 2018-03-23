import React, { Component } from 'react';
import axios from 'axios';

import TargetPhoto from './TargetPhoto.jsx';
import PhotoItem from './PhotoItem.jsx';
import Button from '../globals/Button/index.jsx';
import style from './AccountPage.css';

const { S3_SERVER_URL } = process.env;

class PhotoUpload extends Component {
  constructor() {
    super();
    this.state = {
        file: null,
        userId: 1,
        userPhotos: [
          {url: 'https://s3-us-west-1.amazonaws.com/ajjjthesis/azrael.jpg1521649554118', id: 12315527224, primary: 0},
          {url: 'https://s3-us-west-1.amazonaws.com/ajjjthesis/2017fordfusion-factsheet.jpg1521649496626', id: 123124, primary: 0},
          {url: 'https://s3-us-west-1.amazonaws.com/ajjjthesis/Bentley+Bentayga++.jpg1521649326452', id: 12334234124, primary: 1},
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
    formData.append('id', this.state.userId);
    formData.append('username', this.state.username);
    try {
      const data = await axios.post(`${S3_SERVER_URL}/api/s3`, formData)
      console.log(data.data)
    } catch (err) {
      console.error(err)
    }
  }

  handleLittlePhotoClick = (photo) => {
    this.setState({
      targetPhoto: photo
    })
  }

  handleDeletePhoto = () => {
    const { userId } = this.state;
    const { url, id } = this.state.targetPhoto
    const key = url.slice(46)
    axios
      .delete(`${S3_SERVER_URL}/api/s3/${userId}/${key}/${id}`)
  }

  handleSetPrimaryPhoto = () => {
    
  }

  componentDidMount = () => {
    this.state.userPhotos
      .forEach((photoObj) => {
        if (photoObj.primary === 1) {
          this.setState({
            targetPhoto: photoObj
          })
        }
      })
  }

  componentDidUpdate = () => {
    this.props.renderButton(this.state.userPhotos.length)
  }

  render() {
    return (
      <div>
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
            <TargetPhoto photo={this.state.targetPhoto}/>
          </div>
          <div className={style.smallImageHolder}>
            {
              this.state.userPhotos
                .map(photo => 
                  <PhotoItem
                  key={photo.id}
                  photo={photo}
                  onClick={() => this.handleLittlePhotoClick(photo)}
                  />
                )
            }
          </div>
        </div>
        <div>
          <div>
          <Button
            text="Delete Photo"
            onClick={this.handleDeletePhoto}
            className="delete"
            />
          </div>
          <div>
          <Button
            text="Set as Primary Photo"
            onClick={this.handleSetPrimaryPhoto}
            className="primaryTrue"
            />
          </div>
          <div>
            {
              this.state.targetPhoto.primary ?
              <img
                className={style.star}
                src="http://moziru.com/images/star-clipart-clear-background-5.png" />
              : null
            }
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoUpload;
