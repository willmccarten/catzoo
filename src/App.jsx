//this will be the landing page
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import catlogo from './assets/catlogo.png';
//import Loader from './Loader';
import HomeA from './applicationA/homeA';
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
    <div className="App">
      <header className="App-header">
        <img src={catlogo} className="App-logo" alt="logo" />

        <p>
          Welcome to Cat Zoo!
        </p>

        <div>
          <button onClick={setToA}>Application A</button>
          <button onClick={setToB}>Application B</button>
        </div>

        <a className="App-link" href="https://github.com/willmccarten/catzoo" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        
      </header>
    </div>
  );
}

export default App;
