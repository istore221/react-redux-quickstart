import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { APP_LOAD } from '../constants/common';
import { Route, Switch } from 'react-router-dom';
import { push } from 'react-router-redux';
import * as commonActions from '../actions/common';
import Home from './pages/Home';
import About from './pages/About';
import '../styles/style.scss';

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded
  }};

const mapDispatchToProps = dispatch => bindActionCreators(commonActions, dispatch);

class App extends Component {

  componentWillMount() {
     this.props.onload();
   }


  render() {
    return (

      <div className="b-wrapper">

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
          </Switch>

      </div>

    );
  }


}


export default connect(mapStateToProps, mapDispatchToProps)(App);
