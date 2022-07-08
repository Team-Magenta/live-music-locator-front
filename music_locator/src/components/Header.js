import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand>Music Locator</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/MyEvents" className="nav-link">My Events</Link></NavItem>
        <NavItem><Link to="/OurTeam" className="nav-link">Our Team</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header;