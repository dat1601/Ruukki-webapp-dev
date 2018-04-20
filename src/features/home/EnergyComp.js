import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class EnergyComp extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-energy-comp">
        <div className="main-content">
          <div className="heading-container">
            <div className="row w-row">
              <div className="column w-col w-col-9">
                <img src="images/energyLoop.png" width={49} className="image-2" />
                <h3 className="title teal">Energy Loop</h3>
              </div>
              <div className="w-col w-col-3">
                <div className="ruukkilogo">
                  <img
                    src="images/ruukkiLogo.png"
                    width={140}
                    srcSet="images/ruukkiLogo-p-500.png 500w, images/ruukkiLogo.png 550w"
                    sizes="(max-width: 479px) 67vw, 140px"
                    className="image-3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="loop-container">
            <div className="loopwrapper">
              <img
                src="images/energy.png"
                width={786}
                height={1000}
                srcSet="images/energy-p-500.png 500w, images/energy.png 1113w"
                sizes="(max-width: 991px) 100vw, 78vw"
                className="image-4"
              />
              <div className="place-holder state pump3">
                <div className="text-block-2">On</div>
              </div>
              <div className="place-holder state">
                <div className="text-block-2">Off</div>
              </div>
              <div className="place-holder state pump2">
                <div className="text-block-2">On</div>
              </div>
              <div className="place-holder state pump1">
                <div className="text-block-2">Off</div>
              </div>
              <div className="place-holder solar-panel" onClick={this.props.actions.openSolar}>
                <div className="text-block-2">?</div>
              </div>
              <div className="place-holder solar-panel heat-wells" onClick={this.props.actions.openWells}>
                <div className="text-block-2">?</div>
              </div>
              <div className="place-holder solar-panel piles" onClick={this.props.actions.openPiles}>
                <div className="text-block-2">?</div>
              </div>
            </div>
          </div>
          <div className={this.props.home.toggleBG ? 'hide' : 'show'}>
            <div className="info-cards-background">
              <div className="cardwrapper">
                <div className={this.props.home.togglePiles ? 'hide' : 'show'}>
                  <div className="energypiles">
                    <div className="info-card">
                      <div className="card-header">
                        <img src="images/energyPiles.jpg" />
                      </div>
                      <div className="card-body">
                        <h3 className="card-body-header">RUUKKI ENERGY PILES</h3>
                        <div className="card-body-content">
                          <h4 className="card-body-keywords">renewable energy use, seasonal energy storage</h4>
                          <p>
                            Steel piles enable utilization of demanding soil conditions for renewable energy collection.
                            Ground energy is utilized for heating through heat pumps in winter and as free cooling
                            during summer. In total 64 energy piles with length of 11m were installed in HAMK OLK
                            building together with two traditional heat wells of 200m.<br />
                            <br />www.ruukki.com/hamk-ruukki#The foundation and roof work together
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={this.props.home.toggleWells ? 'hide' : 'show'}>
                  <div className="heatwells">
                    <div className="info-card">
                      <div className="card-header">
                        <img src="images/energyPiles.jpg" width={300} />
                      </div>
                      <div className="card-body">
                        <h3 className="card-body-header">RUUKKI ENERGY PILES</h3>
                        <div className="card-body-content">
                          <h4 className="card-body-keywords">renewable energy use, seasonal energy storage</h4>
                          <p>
                            Steel piles enable utilization of demanding soil conditions for renewable energy collection.
                            Ground energy is utilized for heating through heat pumps in winter and as free cooling
                            during summer. In total 64 energy piles with length of 11m were installed in HAMK OLK
                            building together with two traditional heat wells of 200m.<br />
                            <br />www.ruukki.com/hamk-ruukki#The foundation and roof work together
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={this.props.home.toggleSolar ? 'hide' : 'show'}>
                  <div className="solarpanel">
                    <div className="info-card">
                      <div className="card-header">
                        <img src="images/solarCollector.jpg" width={221} className="image-7" />
                      </div>
                      <div className="card-body">
                        <h3 className="card-body-header">RUUKKI® SOLAR PV PANEL</h3>
                        <div className="card-body-content">
                          <h4 className="card-body-keywords">
                            High performance Building Integrated PV-solution for building facades
                          </h4>
                          <p>
                            Full system with PV-panel modules, structural componensts and all electrical equipments
                            Totally 61 m2 will are used in S-W facade, yearly electricity production 6900 kWh, which
                            reduces primary energy use from 85 kWh/m2 to 77 kWh/m2.<br />
                            <br />www.ruukki.com/hamk-ruukki#A facade that generates electricity
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-close-button-wrapper">
                <div className="button-holder">
                  <div className="close-button" onClick={this.props.actions.closeCard}>
                    <img src="images/Orion_close.png" width={59} className="image-8" />
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

export default connect(mapStateToProps, mapDispatchToProps)(EnergyComp);
