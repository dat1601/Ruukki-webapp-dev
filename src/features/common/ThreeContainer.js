import React, { Component } from 'react';
import threeEntryPoint from '../three-js/threeEntryPoint';

export default class ThreeContainer extends Component {
  static propTypes = {

  };

  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }

  render() {
    return (
      <div className="common-three-container _3d-container">
        <div className="header-header" ref={element => this.threeRootElement = element} />
      </div>
    );
  }
}
