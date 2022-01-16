import React from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom";
import '../customCSS/hamburger.css';

export default function HamburgerMenu() {
    
    return (
        <div className='LeftTitle'>
            <Navbar class="toggleBtn" collapseOnSelect expand="lg" bg="transparent" variant="dark" navbarScroll style={{ maxHeight: '100vh' }}>
                <Navbar.Toggle class="toggleBtn" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Maps" id="collapse-nav-dropdown" bg="dark">
                            <NavDropdown.Item href="/Ascent"><input className="imagebutton" type="image" name="Ascent" src="maps/ascent.webp"/></NavDropdown.Item>
                            <NavDropdown.Item href="/Bind"><input className="imagebutton" type="image" name="Bind" src="maps/bind.webp"/></NavDropdown.Item>
                            <NavDropdown.Item href="/Breeze"><input className="imagebutton" type="image" name="Breeze" src="maps/breeze.webp"/></NavDropdown.Item>
                            <NavDropdown.Item href="/Fracture"><input className="imagebutton" type="image" name="Fracture" src="maps/fracture.webp"/></NavDropdown.Item>
                            <NavDropdown.Item href="/Haven"><input className="imagebutton" type="image" name="Haven" src="maps/haven.webp"/></NavDropdown.Item>
                            <NavDropdown.Item href="/Icebox"><input className="imagebutton" type="image" name="Icebox" src="maps/icebox.webp"/></NavDropdown.Item>
                            <NavDropdown.Item href="/Split"><input className="imagebutton" type="image" name="Split" src="maps/split.webp"/></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/About">About us</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}