import React, { Component } from 'react';
import dTour from '../../images/3dTour.png';
import ruukkiLogo from '../../images/ruukkiLogo.png';

export default class TourComp extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="home-tour-comp">
        <div className="heading-container">
          <div className="row _3dtour-heading w-row">
            <div className="column w-col w-col-9">
              <img src={dTour} width={49} className="image-2" />
              <h3 className="title red">3D tour</h3>
            </div>
            <div className="w-col w-col-3">
              <div className="ruukkilogo">
                <img src={ruukkiLogo} width={140} sizes="140px" className="image-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
