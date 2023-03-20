//this will just be to load in the routes
import './index.css';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';

//Swapped login load for the original login from App.js because they are the same thing
//import Login from './pages/login';

import HomeA from './pages/applicationA/homeA';
import HomeB from './pages/applicationB/homeB';







// add the firebase function into this folder i think
// need to change the login buttons to one google login button
function Loader() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' exact1 element={<Home />} />
                <Route path='/home' element={<Home/>} />
                <Route path='/homeA' element={<HomeA/>} />
                <Route path='/homeB' element={<HomeB/>} />
            </Routes>
        </Router>
    );
}

export default Loader;