import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
import HomeA from './homeA.jsx';
import ScottishFold from '../cat species/scottishFold.jsx';
import './biome.css';
import bengal from '../assets/bengal.jpg';
import scottishfold from '../assets/scottishfold.png';
import americanshorthair from '../assets/americanshorthair.jpg';

//function to render the home page
function setToHome(){
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

//function to render the Scottish Fold page
function setToScottishFold(){
    ReactDOM.render(
        <React.StrictMode>
            <ScottishFold />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

//function to render the App A's home page
function setToA(){
    ReactDOM.render(
        <React.StrictMode>
            <HomeA />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

const houseBiome = () => {
    return (
                
        <div className='biome_splash'>

            <div className="header">
                <button onClick={setToHome}>Home</button>
                <button onClick={setToA}>Map</button>
            </div>

            <h1>Welcome to the City!</h1>
            <h2>Explore the cats it has to offer!</h2>

            <div className='biome_cats_splash'>
                
                <div className='cat_species'>
                    <div className='cat_pic_container'>
                        <img src={scottishfold} onClick={setToScottishFold} alt="Scottish Fold" />
                    </div>
                    <h3>Scottish Fold</h3>
                </div>

                <div className='cat_species'>
                    <div className='cat_pic_container'>
                        <img src={bengal} alt="Scottish Fold" />
                    </div>
                    <h3>Bengal Cat</h3>
                </div>

                <div className='cat_species'>
                    <div className='cat_pic_container'>
                        <img src={americanshorthair} alt="American Shorthair" />
                    </div>
                    <h3>Shorthair</h3>
                </div>
            </div>
        </div>
    );
}

export default houseBiome;