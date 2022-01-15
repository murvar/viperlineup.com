import React from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom";

export default function HamburgerMenu() {
    
    return (
        <div className='LeftTitle'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Ascent"><input className="imagebutton" type="image" name="Ascent" src="maps/ascent.webp"/></Nav.Link>
                        <Nav.Link href="/Bind"><input className="imagebutton" type="image" name="Bind" src="maps/bind.webp"/></Nav.Link>
                        <Nav.Link href="/Breeze"><input className="imagebutton" type="image" name="Breeze" src="maps/breeze.webp"/></Nav.Link>
                        <Nav.Link href="/Fracture"><input className="imagebutton" type="image" name="Fracture" src="maps/fracture.webp"/></Nav.Link>
                        <Nav.Link href="/Icebox"><input className="imagebutton" type="image" name="Icebox" src="maps/icebox.webp"/></Nav.Link>
                        <Nav.Link href="/Split"><input className="imagebutton" type="image" name="Split" src="maps/split.webp"/></Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}