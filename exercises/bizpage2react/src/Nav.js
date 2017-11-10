import React from "react";
import {Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
// function Nav (){
//   // return (
//   //   <h1>
//   //   <a>Home </a>
//   //   <a>About Us </a>
//   //   <a>Contact Us </a>
//   //   </h1>

    // const navbarInstance = (

function NavbarContainer () {
      return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="http://google.com" target="_blank">All About Taylor Andrews Barber Shop</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">History</NavItem>
            <NavItem eventKey={2} href="#">Location</NavItem>
            <NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Haircuts</MenuItem>
              <MenuItem eventKey={3.2}>Coloring</MenuItem>
              <MenuItem eventKey={3.3}>Waxing</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Beard Trimming</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Make Appointment</NavItem>
            <NavItem eventKey={2} href="http://www.google.com" target="_blank">Get Directions</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavbarContainer;
