import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import { Row, Col, Container } from 'react-bootstrap';

export default function LeftSide() {
    
    return (
        <div className='LeftTitle'>
            <Link to="/Ascent"><input className="imagebutton" type="image" name="Ascent" src="maps/ascent.png"/></Link>
            <Link to="/Bind"><input className="imagebutton" type="image" name="Bind" src="maps/bind.png" /></Link>
            <Link to="/Breeze"><input className="imagebutton" type="image" name="Breeze" src="maps/breeze.png" /></Link>
            <Link to="/Fracture"><input className="imagebutton" type="image" name="Fracture" src="maps/fracture.png" /></Link>
            <Link to="/Haven"><input className="imagebutton" type="image" name="Haven" src="maps/haven.png" /></Link>
            <Link to="/Icebox"><input className="imagebutton" type="image" name="Icebox" src="maps/icebox.png" /></Link>
            <Link to="/Split"><input className="imagebutton" type="image" name="Split" src="maps/split.png" /></Link>
        </div>
    )
}
