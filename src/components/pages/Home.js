import React, { Component } from "react";
import { Link } from 'react-router-dom';
export default class Home extends Component {


  render() {
    return (
      <div>
        <h1>Home Page <Link to="/about">About</Link>  </h1>
      </div>
    );
  }

}
