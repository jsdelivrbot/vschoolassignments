function NavbarContainer () {
      return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="http://google.com" target="_blank">All About Ligers</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">History</NavItem>
            <NavItem eventKey={2} href="#">Dangers</NavItem>
            <NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Stripes</MenuItem>
              <MenuItem eventKey={3.2}>Coloring</MenuItem>
              <MenuItem eventKey={3.3}>Rosettes</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Liger Attacks</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Zoos</NavItem>
            <NavItem eventKey={2} href="http://www.google.com" target="_blank">Get Directions</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavbarContainer;
