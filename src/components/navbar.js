import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../components/navbar.css"

function navBar() {
  return (
    <div>
      <Navbar className='top' bg="dark" variant="dark">
        <Navbar className='stella'>
          <img
            alt=""
            src="https://www.vhv.rs/dpng/d/613-6133755_falling-star-clip-art-cartoon-clipart-shooting-star.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />STELLA!
        </Navbar>
        <Navbar.Brand className='home' href="/">
        <div>Home</div>  
        </Navbar.Brand>
        <Navbar.Brand className='coordlink' href="/getmycoordinates">
        <div>Get My Coordinates</div>  
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default navBar;
