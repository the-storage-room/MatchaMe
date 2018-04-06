import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../globals/Button/index.jsx';
import actions from '../../../Redux/actions/account_page_actions';
import style from './AccountPage.css';

const { S3_SERVER_URL } = process.env;

class PhotoUpload extends Component {
  constructor() {
    super();
    this.state = {
        file: null,
        currentFunc: null,
        filename: "Choose a file",
        hoverTarget: null,
    };
  }

  handleMouseHover = (img) => {
    this.setState({
      hoverTarget: img
    })
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
    this.setState({filename: "Choose a file"});
  }

  handleDeletePhoto = () => {
    const index = this.state.hoverTarget;
    const { url, id } = this.props.userPhotos[index];
    const key = url.slice(46);
    this.props.deletePhoto(key, id, index)
  }

  handleSetPrimaryPhoto = () => {
    const index = this.state.hoverTarget;
    const { id } = this.props.userPhotos[index];
    this.props.updatePrimaryPhoto(id, index)
  }

  componentDidMount = () => {
    this.props.userPhotos.length === 4 && this.props.updateSignupStatus();
    this.props.renderButton(this.props.userPhotos.length === 4)
    
  }

  componentDidUpdate = () => {
    this.props.userPhotos.length === 4 && this.props.updateSignupStatus();
    this.props.renderButton(this.props.userPhotos.length === 4)
  }

  formPreventDefault = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className = {style.photoPage}>
          <div className={style.tagHead}>
            Upload Your Photos!
          </div>
          <div className={style.formHolder}>
            {
              this.props.userPhotos.length < 4 &&
            <form 
              onSubmit={this.formPreventDefault}
              className={style.form}
              >
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
              onClick={() => this.handleSubmit()} 
              text={"Submit"}
              className={"photo"}
              />
            }
            </form>
            }
          </div>
          <div className={style.photoholder}>
            <div 
              className={style.primaryphoto}
              >
              {
                this.props.userPhotos[0] &&
              <img 
                onMouseEnter={() => this.handleMouseHover(0)}
                width="150"
                height="150"
                className={style.smallimg}
                src={this.props.userPhotos[0].url}
                />
              }
            </div>
            <div className={style.smallphoto}>
            {
              this.props.userPhotos[1] &&
            <img 
              onMouseEnter={() => this.handleMouseHover(1)}
              width="150"
              height="150"
              className={style.smallimg}
              src={this.props.userPhotos[1].url}
              />
            }
            {
              (
                this.state.hoverTarget === 1 && 
                this.props.userPhotos[1]
              ) &&
              <div>
              <Button
                text="Delete"
                onClick={this.handleDeletePhoto}
                className="delete"
                />
              <Button
                text="Set as Avatar"
                onClick={this.handleSetPrimaryPhoto}
                className="primaryTrue"
                />
              </div>
            }
            </div>
            <div className={style.smallphoto}>
            {
              this.props.userPhotos[2] &&
            <img 
              onMouseEnter={() => this.handleMouseHover(2)}
              width="150"
              height="150"
              className={style.smallimg}
              src={this.props.userPhotos[2].url}
              />
            }
            {
              (
                this.state.hoverTarget === 2 && 
                this.props.userPhotos[2]
              ) &&
              <div>
              <Button
                text="Delete"
                onClick={this.handleDeletePhoto}
                className="delete"
                />
              <Button
                text="Set as Avatar"
                onClick={this.handleSetPrimaryPhoto}
                className="primaryTrue"
                />
              </div>
            }
            </div>
            <div className={style.smallphoto}>
            {
              this.props.userPhotos[3] &&
            <img 
              onMouseEnter={() => this.handleMouseHover(3)}
              width="150"
              height="150"
              className={style.smallimg}
              src={this.props.userPhotos[3].url}
              />
            }
            {
              (
                this.state.hoverTarget === 3 && 
                this.props.userPhotos[3]
              ) &&
              <div>
              <Button
                text="Delete"
                onClick={this.handleDeletePhoto}
                className="delete"
                />
              <Button
                text="Set as Avatar"
                onClick={this.handleSetPrimaryPhoto}
                className="primaryTrue"
                />
              </div>
            }
            </div>
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
    updateSignupStatus: actions.updateSignupStatus,
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
