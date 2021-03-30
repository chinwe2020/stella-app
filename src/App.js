import React from "react";
import "./App.css";
import Form from "./components/form.js";
import Navbar from "./components/navbar.js";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Iframe from "react-iframe";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar className="header" />
        <Container>
          <Jumbotron>
            <p className="header">STELLA!</p>
            <br />
            <Iframe src="http://server1.sky-map.org/skywindow?object=M100&zoom=8&img_source=SDSS" />
            <br />
            <p>
              This application locates the nearest astrological conSTELLAtions
              to you based on your location.
            </p>
            <p className="disclaimer">
              -- Images provided by the sky-map.org API. --
            </p>
            <div>
              <Link to="/getmycoordinates">
                <Button variant="primary" size="lg">
                  <a id="coordinates" href="/getmycoordinates">
                    Get my Coordinates
                  </a>
                </Button>
              </Link>
            </div>
          </Jumbotron>
        </Container>
        <Container>
          <Form />
        </Container>
        <div className="footer">
          {" "}
          Created by: Chinwe' Watkins @ Choices Web Development 2021{" "}
        </div>
      </div>
    );
  }
}

export default App;
