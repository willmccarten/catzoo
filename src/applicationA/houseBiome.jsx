import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
import HomeA from './homeA.jsx';

//function to render the home page
function setToHome(){
    ReactDOM.render(
        <React.StrictMode>
            <App />
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
                <h5>This div will contain the cat cards. Each card is in a div</h5>

                <div className='cat_species'>
                    <div className='cat_pic_container'>
                        <img src="https://www.pets4homes.co.uk/images/articles/2554/large/what-is-the-scottish-fold-cat-5c1b2e1a5b5a5.jpg" alt="Scottish Fold" />
                    </div>
                    <h3>Scottish Fold</h3>
                </div>

                <div className='cat_species'>
                    <div className='cat_pic_container'>
                        <img src="https://www.pets4homes.co.uk/images/articles/2554/large/what-is-the-scottish-fold-cat-5c1b2e1a5b5a5.jpg" alt="Scottish Fold" />
                    </div>
                    <h3>Scottish Fold 2</h3>
                </div>

                <div className='cat_species'>
                    <div className='cat_pic_container'>
                        <img src="https://www.pets4homes.co.uk/images/articles/2554/large/what-is-the-scottish-fold-cat-5c1b2e1a5b5a5.jpg" alt="Scottish Fold" />
                    </div>
                    <h3>Scottish Fold 3</h3>
                </div>
            </div>
        </div>
    );
}

export default houseBiome;