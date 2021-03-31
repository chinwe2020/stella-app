import React, { Component } from "react";
import Navbar from ".././components/navbar.js";
import "../pages/Coordinates.css";
import MapContainer from "../components/MapContainer.js";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Coordinates extends Component {
  render() {
    return (
      <div className="coords">
        <Navbar className="header" />
        <div className="header-2">Get My Coordinates</div>
        <Container>
          
            <h1 id='type'>Type Address Here:</h1>
          
        </Container>
        <div className="map">
          <MapContainer />
        </div>
        <Button variant="light" size="lg">
        <Link to="/">Back to Home</Link>
    </Button>
        <div className="footer">
          Created by: Chinwe' Watkins @ Choices Web Development 2021{" "}
        </div>
      </div>
    );
  }
}

export default Coordinates;
