import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Overview from './Overview';
import BuildingComp from './BuildingComp';
import EnergyComp from './EnergyComp';
import TourComp from './TourComp';
import CompareComp from './CompareComp';
import MainNav from '../common/MainNav';
import ThreeContainer from '../common/ThreeContainer';

import { Route, NavLink, HashRouter, Switch, BrowserRouter, withRouter } from 'react-router-dom';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    setInterval(this.props.actions.getTemp, 3000);
    console.log(this.props.home.temp);
  }

  render() {
    return (
      <HashRouter>
        <div className="home-default-page">
          <div>
            <div className="content">
              <Switch>
                <Route path="/building" component={BuildingComp} />
                <Route path="/loop" component={EnergyComp} />
                <Route path="/tour" component={TourComp} />
                <Route path="/compare" component={CompareComp} />
                <Route path="/" component={Overview} />
              </Switch>
            </div>
            <MainNav />
            <ThreeContainer />
          </div>
        </div>
      </HashRouter>
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

DefaultPage = connect(mapStateToProps, mapDispatchToProps)(DefaultPage);

export default withRouter(DefaultPage);
