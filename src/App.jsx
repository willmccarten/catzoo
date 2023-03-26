//this will be the landing page
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import catlogo from './assets/catlogo.png';
//import Loader from './Loader';
import HomePage from './HomePage';
import HomeA from './applicationA/HomeA';
import HomeB from './applicationB/homeB';


//function to render the App A's home page
function setToA(){
  ReactDOM.render(
    <React.StrictMode>
      <HomeA />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

//function to render the App B's home page
function setToB(){
  ReactDOM.render(
    <React.StrictMode>
      <HomeB />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


function App() {
  return (
    <Router>
      <main style={{ flex: 1}}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/applicationA" element={<HomeA />} />
          <Route path="/applicationB" element={<HomeB />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
