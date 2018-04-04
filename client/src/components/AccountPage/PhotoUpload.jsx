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
        currentFunc: null,
        filename: "Choose a file"
    };
  }

  handleUploadChange = (e) => {
    this.setState({ 
      file: e.target.files[0],
      filename: e.target.files[0].name
    });
  }

  handleSubmit = () => {
    const formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('id', this.props.userId);
    formData.append('username', this.props.username);
    this.props.uploadPhoto(formData);
    this.setState({
      currentFunc: 'add'
    })
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
    this.setState({
      currentFunc: 'delete'
    })
  }

  handleSetPrimaryPhoto = () => {
    const index = this.state.targetPhoto
    const { id } = this.props.userPhotos[index];
    this.props.updatePrimaryPhoto(id, index)
    this.setState({
      currentFunc: 'primary'
    })
  }

  componentDidMount = () => {
    this.props.renderButton(this.props.userPhotos.length)
  }

  componentDidUpdate = () => {
    this.props.renderButton(this.props.userPhotos.length)
  }

  componentWillReceiveProps = () => {
    console.log(this.props.userPhotos)
    if (
      this.state.currentFunc === 'primary' || 
      this.state.currentFunc === 'delete'
    ) {
      this.setState({
        targetPhoto: 0
      })
    } else if (
      this.state.currentFunc === 'add'
    ) {
      this.setState({
        targetPhoto: this.props.userPhotos.length - 1
      })
    }
  }

  render() {
    return (
      <div>
        <div className = {style.photoPage}>
          <div className={style.tagHead}>
            Upload Your Photos!
          </div>
          <div className={style.basicMargin}>
            <form className={style.form}>
                <input 
                  type="file" 
                  name="file" 
                  id="file" 
                  className={style.inputfile}
                  onChange={this.handleUploadChange}
                  />
              <label htmlFor="file">
                <img
                  className={style.icon}
                  height="20" width="20"
                  src={window.location.origin + '/images/upload.png'} 
                  />
                {" " + this.state.filename}
                </label>
            {
              this.state.filename !== "Choose a file" &&
            <Button 
              onClick={this.handleSubmit} 
              text={"Submit"}
              className={"photo"}
              />
            }
            </form>
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
    userId: state.accountData.id,
    username: state.accountData.username,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUpload);
