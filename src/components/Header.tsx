import './Header.css';
import brandLogo from '../img/LOGO.svg';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';

function Header() {
  return (
    <div className="Header">
      <img src={brandLogo} className="brandLogo" />
      <Navbar expand="md" className="navbar-dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={window.location.pathname}>
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                  <NavDropdown.Item  href="/portfolio/simply-sweet-stems">Simply Sweet Stems</NavDropdown.Item>
                  <NavDropdown.Item  href="/portfolio/pellegrino">Pellegrino</NavDropdown.Item>
                  <NavDropdown.Item  href="/portfolio/doordash">Doordash</NavDropdown.Item>
                  <NavDropdown.Item  href="/portfolio/designbasics">Design Basics</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
