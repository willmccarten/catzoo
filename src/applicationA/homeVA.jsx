import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import App from '../App.jsx';
import HouseBiome from './houseBiome.jsx';
import './homeA.css'


//function to render the city biome page
function setToCity(){
    ReactDOM.render(
      <React.StrictMode>
        <HouseBiome />
      </React.StrictMode>,
      document.getElementById('root')
    );
}

const HomeA = () => {

    const navigate = useNavigate();

    //function to render the home page
    const handleHomeClick = () => {
        navigate('/');
    };
    return (
                  
        <div className="homeA_splash">
            <div>
                    <button onClick={handleHomeClick}>Home</button>
            </div>

            <h2>
                Welcome to Cat Zoo Application A!
            </h2>


            <h4>Click a biome to explore the cats that live there!</h4>
            
            <div className='map_splash'>
                <div className='map'>
                    <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/57267519/original/c29150cf2ec22629122e72ed8a02087a996ea2e3/draw-your-fantasy-map.png" classname="map" alt="map" />
                </div>
                <div className='mountains'>
                    <img src="https://i.pinimg.com/originals/6a/53/94/6a5394b1e9ae8952026ceb38dc9d87f5.png" classname="mountains" alt="mountain" />
                </div>
                
            </div>

            <div>
                <button onClick={setToCity}>House/City</button>
                <button onClick={handleHomeClick}>Savanna</button>
                <button onClick={handleHomeClick}>Jungle</button>
                <button onClick={handleHomeClick}>Mountain</button>
                <button onClick={handleHomeClick}>Misc</button>

            </div>

        </div>
        
    );
}

export default HomeA;