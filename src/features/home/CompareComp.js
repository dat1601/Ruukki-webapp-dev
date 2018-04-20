import React, { Component } from 'react';

export default class CompareComp extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="home-compare-comp">
        <div className="main-content">
          <div className="heading-container">
            <div className="row w-row">
              <div className="column w-col w-col-9">
                <img src="images/compare.png" width={49} className="image-2" />
                <h3 className="title magenta">compare</h3>
              </div>
              <div className="w-col w-col-3">
                <div className="ruukkilogo">
                  <img
                    src="images/ruukkiLogo.png"
                    width={140}
                    srcSet="images/ruukkiLogo-p-500.png 500w, images/ruukkiLogo.png 550w"
                    sizes="140px"
                    className="image-3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="loopwrapper compare">
            <div className="solar-iframe w-embed w-iframe">
              <iframe
                src="https://iot.research.hamk.fi/visu/d-solo/000000023/solar-production-olk?refresh=5s&orgId=4&panelId=1&from=now/w&to=now&var-calcPeriod=1h"
                width="100%"
                height="100%"
                frameBorder={0}
              />
            </div>
            <div className="solar-iframe w-embed w-iframe">
              <iframe
                src="https://iot.research.hamk.fi/visu/d-solo/000000023/solar-production-olk?refresh=5s&orgId=4&panelId=6&from=now/w&to=now&var-calcPeriod=1h"
                width="100%"
                height="100%"
                frameBorder={0}
                padding={0}
                margin={0}
                box-sizing="border-box"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
