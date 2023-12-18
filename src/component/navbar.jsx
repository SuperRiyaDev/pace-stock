import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './navbar.css'

function NavBar() {
  const [navbarClass, setNavbarClass] = useState('unscrolled');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newNavbarClass = scrollY > 100 ? 'scrolled' : 'unscrolled';
      setNavbarClass(newNavbarClass);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Navbar expand="lg" className={`px-3 fixed-top ${navbarClass}`}>
      <Container>
        <Navbar.Brand href="#home">{`<SupriyaDev/>`}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
