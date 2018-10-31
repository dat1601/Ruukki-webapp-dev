import React, { Component, PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import buildingIcon from '../../images/buildingIcon.png';
import ruukkiLogo from '../../images/ruukkiLogo.png';

export class BuildingComp extends PureComponent {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-building-comp">
        <div className="main-content">
          <div className="heading-container">
            <div className="row w-row">
              <div className="column w-col w-col-9">
                <img src={buildingIcon} width={49} className="image-2" />
                <h3 className="title lavender">Building</h3>
              </div>
              <div className="w-col w-col-3">
                <div className="ruukkilogo">
                  <img src={ruukkiLogo} width={140} sizes="140px" className="image-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="building-wrapper">
            <div className="row-3 w-row">
              <div className="column-3 w-col w-col-8">
                <div className="first-line">
                  <div className="temp" onClick={this.props.actions.openSolar}>
                    <h5 className="heading-4 building-temp">Temperature</h5>
                    <h4 className="heading-5 buildingtemp">
                      {Math.round(this.props.home.temp.value) + this.props.home.temp.unit}
                    </h4>
                  </div>
                  <div className="temp">
                    <h5 className="heading-4 building-temp">Wind</h5>
                    <h4 className="heading-5 buildingtemp">2</h4>
                  </div>
                  <div className="temp">
                    <h5 className="heading-4 building-temp">Humidity</h5>
                    <h4 className="heading-5 buildingtemp">2</h4>
                  </div>
                </div>
              </div>
              <div className="column-5 w-col w-col-4">
                <div className="saving-values">
                  <div className="saving-heading">
                    <h4 className="heading">Building COP</h4>
                  </div>
                  <div className="saving-iframe">
                    <div className="html-embed-5 w-embed w-iframe">
                      <iframe
                        src="https://iot.research.hamk.fi/visu/d-solo/A4IIW3jzk/heating-production?orgId=4&panelId=14&from=now/w&to=now&var-calcPeriod=1h"
                        width="100%"
                        height="100%"
                        frameBorder={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="saving-values">
                  <div className="saving-heading">
                    <h4 className="heading">Total heating power</h4>
                  </div>
                  <div className="saving-iframe">
                    <div className="html-embed-5 w-embed w-iframe">
                      <iframe
                        src="https://iot.research.hamk.fi/visu/d-solo/A4IIW3jzk/heating-production?orgId=4&panelId=16&from=now/w&to=now&var-calcPeriod=1h"
                        width="100%"
                        height="100%"
                        frameBorder={0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BuildingComp));
