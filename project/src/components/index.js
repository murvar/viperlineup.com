import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from './Main';

export default function Webpages(){

    return(
        <div>
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/:map" element={<Main />} />
                {/*<Route path="*" element={<Home />} /> */}
            </Routes>
        </Router>
        </div>
    );
};

