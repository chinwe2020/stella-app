import React from "react";
import "./App.css";
import Form from "./components/form.js";
import Navbar from "./components/navbar.js";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Iframe from "react-iframe";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Jumbotron>
          <p className="header">STELLA!</p>
          <br />
          <Iframe src="http://server1.sky-map.org/skywindow?object=M100&zoom=8&img_source=SDSS" />
          <br />
          <p>
            This application locates the nearest astrological conSTELLAtions to
            you based on your location.
          </p>
          <p className="disclaimer">
            -- Images provided by the sky-map.org API. --
          </p>
        </Jumbotron>
      </Container>
      <Container>
        <Form />
      </Container>
    </div>
  );
}

export default App;
