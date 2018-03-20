import React, { Component } from 'react';

import Input from './../globals/Input/index.jsx'

class BioInfo extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <div>
          age: <Input placeholder="How old you is?"/>
        </div>
        <div>
          location: <Input placeholder="ZIP Code goes here"/>
        </div>
        <div>
          gender: <Input />
        </div>
        <div>
          gender preferences: <Input />
        </div>
        <div>
          bio: <Input placeholder="Talk about yourself"/>
        </div>
      </div>
    )
  }
}

export default BioInfo;