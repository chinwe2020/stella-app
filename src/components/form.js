import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./form.css";

function form() {
  return (
    <div className="Form">
      <Form>
        <h2>Enter your coordinates below:</h2>
        <Form.Group as={Row} controlId="formHorizontalLong">
          <Form.Label column sm={2}>
            Longitude:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="long" />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row} controlId="formHorizontalLat">
          <Form.Label column sm={2}>
            Latitude:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="lat" />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row} controlId="formHorizontalRA">
          <Form.Label column sm={2}>
            Right Ascension:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="ra" />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row} controlId="formHorizontalDEC">
          <Form.Label column sm={2}>
            Declination:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="dec" />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default form;
