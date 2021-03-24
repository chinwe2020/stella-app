import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

function navBar() {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://www.vhv.rs/dpng/d/613-6133755_falling-star-clip-art-cartoon-clipart-shooting-star.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          STELLA!
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default navBar;
