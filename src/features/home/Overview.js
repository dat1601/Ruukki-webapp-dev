import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { withRouter } from 'react-router-dom';
import overview from '../../images/overview.png';
import ruukkiLogo from '../../images/ruukkiLogo.png';

export class Overview extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-overview">
        <div className="main-content">
          <div className="heading-container">
            <div className="row w-row">
              <div className="column w-col w-col-9">
                <img src={overview} width={49} className="image-2" />
                <h3 className="title">Overview</h3>
              </div>
              <div className="w-col w-col-3">
                <div className="ruukkilogo">
                  <img src={ruukkiLogo} width={140} sizes="(max-width: 479px) 67vw, 140px" className="image-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="overviewwrapper">
            <div className="row-2 w-row">
              <div className="column-2 w-col w-col-8 w-col-stack">
                <div className="saving-values">
                  <div className="saving-heading" />
                  <div className="saving-iframe">
                    <div className="html-embed-5 w-embed w-iframe">
                      <iframe
                        src="https://iot.research.hamk.fi/visu/d-solo/A4IIW3jzk/heating-production?orgId=4&panelId=11&from=now/w&to=now&var-calcPeriod=1h"
                        width="100%"
                        height="100%"
                        overflow="hidden"
                        frameBorder={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="saving-values">
                  <div className="saving-heading" />
                  <div className="saving-iframe">
                    <div className="html-embed-4 w-embed w-iframe">
                      <iframe
                        src="https://iot.research.hamk.fi/visu/d-solo/000000023/solar-production-olk?refresh=5s&orgId=4&panelId=8&from=now/y&to=now&var-calcPeriod=1h"
                        width="100%"
                        height="100%"
                        overflow="hidden"
                        frameBorder={0}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-4 w-col w-col-4 w-col-stack">
                <div className="live-values">
                  <div className="saving-heading" />
                  <div className="saving-iframe">
                    <div className="html-embed-5 life-time w-embed w-iframe">
                      <iframe
                        src="https://iot.research.hamk.fi/visu/d-solo/000000023/solar-production-olk?refresh=5s&orgId=4&panelId=4&from=now/w&to=now&var-calcPeriod=1h"
                        width="100%"
                        height="100%"
                        overflow="hidden"
                        frameBorder={0}
                      />
                    </div>
                  </div>
                  <div className="saving-heading" />
                  <div className="saving-iframe" />
                  <div className="saving-heading">
                    <div className="html-embed-5 life-time w-embed w-iframe">
                      <iframe
                        src="https://iot.research.hamk.fi/visu/d-solo/000000023/solar-production-olk?refresh=5s&orgId=4&panelId=9&from=now/w&to=now&var-calcPeriod=1h"
                        width="100%"
                        height="100%"
                        overflow="hidden"
                        frameBorder={0}
                      />
                    </div>
                  </div>
                  <div className="saving-iframe">
                    <div className="html-embed-5 solar-production w-embed w-iframe">
                      <iframe
                        src="https://iot.research.hamk.fi/visu/d-solo/000000023/solar-production-olk?refresh=5s&orgId=4&panelId=2&from=now/w&to=now&var-calcPeriod=1h"
                        width="100%"
                        height="100%"
                        overflow="hidden"
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Overview));
