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


const homeB = () => {
    return (
        <div className="App">
            <header className="App-header">

                <p>
                    Welcome to Cat Zoo Application B!
                </p>

                <div>
                    <button onClick={setToHome}>Home</button>
                
                </div>

            
            
            </header>
        </div>
    );
}

export default homeB;