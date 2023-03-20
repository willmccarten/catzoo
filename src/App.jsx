//this will be the landing page
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import catlogo from './assets/catlogo.png';
import Loader from './Loader';

//function to render the router page
function setToLoader(){
  ReactDOM.render(
    <React.StrictMode>
      <Loader />
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
          <button onClick={setToLoader}>Enter</button>
          
        </div>

        <a className="App-link" href="https://github.com/willmccarten/catzoo" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        
      </header>
    </div>
  );
}

export default App;
