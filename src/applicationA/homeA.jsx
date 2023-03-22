import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
import HouseBiome from './houseBiome.jsx';


//function to render the home page
function setToHome(){
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
}

//function to render the city biome page
function setToCity(){
    ReactDOM.render(
      <React.StrictMode>
        <HouseBiome />
      </React.StrictMode>,
      document.getElementById('root')
    );
}


function homeA() {
    return (
        <div className="App">
            
            <header className="App-header">
                <div>
                        <button onClick={setToHome}>Home</button>
                </div>

                <h2>
                    Welcome to Cat Zoo Application A!
                </h2>

                <h4>Click a biome to explore the cats that live there!</h4>
                
                <div className='map_splash'>
                    <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/57267519/original/c29150cf2ec22629122e72ed8a02087a996ea2e3/draw-your-fantasy-map.png" alt="map" />
                    <img src="https://i.pinimg.com/originals/6a/53/94/6a5394b1e9ae8952026ceb38dc9d87f5.png" alt="mountain" />
                </div>

                <div>
                    <button onClick={setToCity}>House/City</button>
                    <button onClick={setToHome}>Savanna</button>
                    <button onClick={setToHome}>Jungle</button>
                    <button onClick={setToHome}>Mountain</button>
                    <button onClick={setToHome}>Misc</button>
                </div>

            </header>
        </div>
    );
}

export default homeA;