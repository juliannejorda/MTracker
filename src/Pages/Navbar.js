import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import { withRouter, Link } from "react-router-dom";
// import from "react-rout"

const Navigation = (props) => {
  console.log(props);
  return (
    <Navbar sticky="top" bg="primary" variant="dark">
      <Navbar.Brand href="#/">MTracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#/">Home</Nav.Link>
          <Nav.Link href="#/Info">Info</Nav.Link>
          <Nav.Link href="#/ReadingList">Reading List</Nav.Link>
          {/* <Link to="/">Home</Link> */}
          {/* <Nav.Link href="/Info">Info</Nav.Link>
          <Nav.Link href="/ReadingList">Reading List</Nav.Link> */}
        </Nav>
        {/* <Button variant="primary">Primary</Button>{" "} */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navigation);
