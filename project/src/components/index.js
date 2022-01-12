import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Main from './Main';
import Home from './Home';

export default function Webpages(){

    //let navigate = useNavigate();

    return(
        <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Ascent" element={<Main map="ascent"/>} />
                <Route path="/Bind" element={<Main map="bind"/>} />
                <Route path="/Breeze" element={<Main map="breeze"/>} />
                <Route path="/Fracture" element={<Main map="fracture"/>} />
                <Route path="/Icebox" element={<Main map="icebox"/>} />
                <Route path="/Haven" element={<Main map="haven"/>} />
                <Route path="/Split" element={<Main map="split"/>} />
                <Route path="*" element={<Navigate replace to="/" />} />

            </Routes>
        </Router>
        </div>
    );
};

