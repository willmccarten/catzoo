import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
import {BsFillHouseFill} from 'react-icons/bs';
import './homeB.css'

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
            <header id="App-header">
                <a href="homeB.css" class="logo"><BsFillHouseFill/></a>
                <ul>
                    <li><a href="App.jsx">Home</a></li>
                    
                </ul>
                <div class="toggle" onclick="toggle()"></div>
            </header>
    );
}

export default homeB;