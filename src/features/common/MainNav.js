import React, { Component } from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Route, NavLink, HashRouter, BrowserRouter, withRouter } from 'react-router-dom';

// import WebflowJS from '../../js/webflow';

export class MainNav extends Component {
  static propTypes = {
    common: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    return (
      <div className="common-main-nav">
        <div>
          <Draggable handle=".drag" {...dragHandlers}>
            <div className="desktop-nav w-hidden-medium w-hidden-small w-hidden-tiny w-container">
              <div className="nav-link-wrapper">
                <div className="menu-item-wrapper">
                  <NavLink exact to="/building" ariaCurrent="page" activeClassName="active">
                    <div className="menu-item">
                      <div className="menu-img lavender">
                        <img src="images/buildingIcon.png" width={49} className="image" />
                      </div>
                      <div className="text-block">building</div>
                    </div>
                  </NavLink>

                  <NavLink exact to="/loop" ariaCurrent="page" activeClassName="active">
                    <div className="menu-item">
                      <div className="menu-img teal">
                        <img src="images/energyLoop.png" width={52} className="image" />
                      </div>
                      <div className="text-block">Energy LOOP</div>
                    </div>
                  </NavLink>

                  <NavLink exact to="/" ariaCurrent="page" activeClassName="active">
                    <div className="menu-item">
                      <div className="menu-img yellow">
                        <img src="images/overview.png" width={48} className="image" />
                      </div>
                      <div className="text-block">Overview</div>
                    </div>
                  </NavLink>

                  <NavLink exact to="/tour" ariaCurrent="page" activeClassName="active">
                    <div className="menu-item">
                      <div className="menu-img red">
                        <img src="images/3dTour.png" width={51} className="image" />
                      </div>
                      <div className="text-block">3d tour</div>
                    </div>
                  </NavLink>

                  <NavLink exact to="/compare" ariaCurrent="page" activeClassName="active">
                    <div className="menu-item">
                      <div className="menu-img magenta">
                        <img src="images/compare.png" width={49} className="image" />
                      </div>
                      <div className="text-block">compare</div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="drag">
                <div className="text-block-4">
                  .<br />.<br />.
                </div>
                <div className="drag-line" />
              </div>
            </div>
          </Draggable>

          <div className="down">
            <div className="nav-container w-hidden-main w-container">
              <div data-w-id="0845fd3e-21ab-8cd6-c9f2-e08c01a2aa46" className="nav-link-wrapper">
                
                <div className="menu-item-wrapper">
                  <NavLink exact to="/building" ariaCurrent="page" activeClassName="active">
                    <div className="menu-item">
                      <div className="menu-img lavender">
                        <img src="images/buildingIcon.png" width={49} className="image" />
                      </div>
                      <div className="text-block">building</div>
                    </div>
                  </NavLink>

                  <NavLink exact to="/loop" ariaCurrent="page" activeClassName="active">
                    <div className="menu-item">
                      <div className="menu-img teal">
                        <img src="images/energyLoop.png" width={52} className="image" />
                      </div>
                      <div className="text-block">Energy LOOP</div>
                    </div>
                  </NavLink>

                  <NavLink exact to="/" ariaCurrent="page" activeClassName="active">
                    <div className="menu-item">
                      <div className="menu-img yellow">
                        <img src="images/overview.png" width={48} className="image" />
                      </div>
                      <div className="text-block">Overview</div>
                    </div>
                  </NavLink>

                  <NavLink exact to="/tour" ariaCurrent="page" activeClassName="active">
                    <div className="menu-item">
                      <div className="menu-img red">
                        <img src="images/3dTour.png" width={51} className="image" />
                      </div>
                      <div className="text-block">3d tour</div>
                    </div>
                  </NavLink>

                  <NavLink exact to="/compare" ariaCurrent="page" activeClassName="active">
                    <div className="menu-item">
                      <div className="menu-img magenta">
                        <img src="images/compare.png" width={49} className="image" />
                      </div>
                      <div className="text-block">compare</div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="drag">
                <div className="text-block-4">
                  .<br />.<br />.
                </div>
                <div className="drag-line" />
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
    common: state.common,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNav));
