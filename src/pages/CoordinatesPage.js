import React, { Component } from "react";
import Navbar from ".././components/navbar.js";
import LatLng from "../components/latlng";


class Coordinates extends Component {
  render() {
    return (
      <div className="coords">
        <Navbar className="header" />
        <LatLng />
        <div className="footer">
          Created by: Chinwe' Watkins @ Choices Web Development 2021{" "}
        </div>
      </div>
    );
  }
}

export default Coordinates;
