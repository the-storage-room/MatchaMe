import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TargetPhoto from './TargetPhoto.jsx';
import PhotoItem from './PhotoItem.jsx';
import Button from '../globals/Button/index.jsx';
import actions from '../../../Redux/actions/account_page_actions';
import style from './AccountPage.css';

const { S3_SERVER_URL } = process.env;

class PhotoUpload extends Component {
  constructor() {
    super();
    this.state = {
        targetPhoto: 0,
        file: null,
    };
  }

  handleUploadChange = (e) => {
    this.setState({ file: e.target.files[0] });
  }

  handleSubmit = () => {
    const formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('id', this.props.userId);
    formData.append('username', this.props.username);
    this.props.uploadPhoto(formData);
  }

  handleLittlePhotoClick = (photo) => {
    this.setState({
      targetPhoto: photo
    })
  }

  handleDeletePhoto = () => {
    const index = this.state.targetPhoto
    const { url, id } = this.props.userPhotos[index];
    const key = url.slice(46);
    this.props.deletePhoto(key, id, index)
  }

  handleSetPrimaryPhoto = () => {
    const index = this.state.targetPhoto
    const { id } = this.props.userPhotos[index];
    this.props.updatePrimaryPhoto(id, index)
  }

  componentDidMount = () => {
  }

  componentDidUpdate = () => {
    this.props.renderButton(this.props.userPhotos.length)
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
            <TargetPhoto photo={this.props.userPhotos[this.state.targetPhoto]}/>
          </div>
          <div className={style.smallImageHolder}>
            {
              this.props.userPhotos
                .map((photo, index) => 
                  <PhotoItem
                  key={photo.id}
                  photo={photo}
                  index={index}
                  onClick={() => this.handleLittlePhotoClick(index)}
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
              this.state.targetPhoto === 0 ?
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    uploadPhoto: actions.uploadPhoto,
    deletePhoto: actions.deletePhoto,
    updatePrimaryPhoto: actions.updatePrimaryPhoto,
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    userPhotos: state.userPhotos,
    userId: 333 || state.accountData.id,
    username: 'jack' || state.accountData.username,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUpload);
