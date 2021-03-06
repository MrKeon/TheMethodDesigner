import './Header.css';
import brandLogo from '../img/LOGO.svg';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
function Header() {
  const [show, setShow] = useState(false);
  const showDropdown = () =>{
      setShow(!show);
  }
  const hideDropdown = () => {
      setShow(false);
  }

  return (
    <div className="Header">
      <NavLink exact to="/"><img src={brandLogo} className="brandLogo" /></NavLink>
      <Navbar expand="md" className="navbar-dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={window.location.pathname}>
              <Nav.Item>
                <NavLink exact activeClassName="selected" to='/'><Nav.Link href="/">Home</Nav.Link></NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink exact activeClassName="selected" to="/about"><Nav.Link href="/about">About</Nav.Link></NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink exact activeClassName="selected" to="/portfolio"><Nav.Link href="/portfolio">Portfolio</Nav.Link></NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavDropdown title="Portfolio" id="basic-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                  <NavLink exact activeClassName="selected" to="/portfolio/simply-sweet-stems"><NavDropdown.Item  href="/portfolio/simply-sweet-stems">Simply Sweet Stems</NavDropdown.Item></NavLink>
                  <NavLink exact activeClassName="selected" to="/portfolio/doordash"><NavDropdown.Item  href="/portfolio/doordash">Doordash</NavDropdown.Item></NavLink>
                  <NavLink exact activeClassName="selected" to="/portfolio/designbasics"><NavDropdown.Item  href="/portfolio/designbasics">Design Basics</NavDropdown.Item></NavLink>
                  <NavLink exact activeClassName="selected" to="/portfolio/pellegrino"><NavDropdown.Item  href="/portfolio/pellegrino">Pellegrino</NavDropdown.Item></NavLink>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item>
                <NavLink exact activeClassName="selected" to="/gallery"><Nav.Link href="/gallery">Gallery</Nav.Link></NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink exact activeClassName="selected" to="/contact"><Nav.Link href="/contact">Contact</Nav.Link></NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
