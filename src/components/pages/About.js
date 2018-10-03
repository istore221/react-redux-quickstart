import React, { Component } from "react";

export default class About extends Component {



  test(){
    return (
      <span>some val</span>
    )
  }

  render() {
    return (
      <div>
        <h1>{ (true) ? (

          <h3>true html</h3>

        ) : (
            <h3>false html</h3>
        )}</h1>

        {this.test()}
      </div>
    );
  }

}
