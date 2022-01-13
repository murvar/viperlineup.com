import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Main from './Main';
import Home from './Home';
import Privacy from './Privacy';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzeUMqW8_bUHFFbMwaJ4sLT2eF9jX11C8",
    authDomain: "viperlineups-2ba36.firebaseapp.com",
    projectId: "viperlineups-2ba36",
    storageBucket: "viperlineups-2ba36.appspot.com",
    messagingSenderId: "209284842966",
    appId: "1:209284842966:web:0544d6b8001d2560845077",
    measurementId: "G-H1RFS9GKJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
                <Route path="/privacypolicy" element={<Privacy />} />
                <Route path="*" element={<Navigate replace to="/" />} />

            </Routes>
        </Router>
        </div>
    );
};

