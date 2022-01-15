import React from 'react';
import {Link} from "react-router-dom";

export default function LeftSide() {
    
    return (
        <div className='LeftTitle'>
            <Link to="/Ascent"><input className="imagebutton" type="image" name="Ascent" src="maps/ascent.webp"/></Link>
            <Link to="/Bind"><input className="imagebutton" type="image" name="Bind" src="maps/bind.webp" /></Link>
            <Link to="/Breeze"><input className="imagebutton" type="image" name="Breeze" src="maps/breeze.webp" /></Link>
            <Link to="/Fracture"><input className="imagebutton" type="image" name="Fracture" src="maps/fracture.webp" /></Link>
            <Link to="/Haven"><input className="imagebutton" type="image" name="Haven" src="maps/haven.webp" /></Link>
            <Link to="/Icebox"><input className="imagebutton" type="image" name="Icebox" src="maps/icebox.webp" /></Link>
            <Link to="/Split"><input className="imagebutton" type="image" name="Split" src="maps/split.webp" /></Link>
        </div>
    )
}
