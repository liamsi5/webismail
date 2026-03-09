import React, { Component } from "react";
import dataEngineeringImg from "../../assests/images/undraw_data-at-work.svg";

export default class DataEngineeringImg extends Component {
  render() {
    return (
      <img
        src={dataEngineeringImg}
        alt="Data Engineering"
        style={{ width: "100%", maxWidth: "500px" }}
      />
    );
  }
}
