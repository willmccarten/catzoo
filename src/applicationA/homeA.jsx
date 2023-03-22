import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';


//function to render the home page
function setToHome(){
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
}



const homeA = () => {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Welcome to Cat Zoo Application A!
                </p>

                <div>
                    <button onClick={setToHome}>Home</button>
                
                </div>

                <a className="App-link" href="https://github.com/willmccarten/catzoo" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
            
            </header>
        </div>
    );
}

export default homeA;