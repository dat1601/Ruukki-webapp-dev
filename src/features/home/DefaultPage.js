import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

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
      <div className="home-default-page">
        <div className="content">
          <Switch>{this.props.children}</Switch>
        </div>
        <div>
          <MainNav />
          <ThreeContainer />
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

DefaultPage = connect(mapStateToProps, mapDispatchToProps)(DefaultPage);

export default withRouter(DefaultPage);
