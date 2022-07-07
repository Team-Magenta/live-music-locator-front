import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <Navbar className="footer" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand>Team Magenta</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;