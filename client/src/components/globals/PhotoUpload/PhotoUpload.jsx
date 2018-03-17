import React, { Component } from 'react';
import axios from 'axios';

import style from './PhotoUpload.css';

const S3_SERVER_URL = process.env.S3_SERVER_URL;

class PhotoUpload extends Component {
  constructor() {
    super();
    this.state = {
        file: null,
    };
  }

  handleUploadChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  handleSubmit() {
    const formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('displayname', 'JackTest');

    axios.post(`${S3_SERVER_URL}/api/s3`, formData)
      .then(() => {console.log('success')})
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <form>
          <label>
          Upload:
            <input
              type="file"
              onChange={this.handleUploadChange}
              className={style.form}
            />
          </label>
        </form>
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    )
  }
}

export default PhotoUpload;
