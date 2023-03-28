import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import App from '../App.jsx';
import HouseBiome from './HouseBiome.jsx';
import './homeA.css'
import Header from '../Header';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Dropdown from '../Dropdown';
import Button from '@mui/material/Button';

import map from '../assets/map.png';

import forest from '../assets/forest.png';
import mountain from '../assets/mountain.png';
import savanna from '../assets/savanna.png';
import city from '../assets/city.png';
import jungle from '../assets/jungle.png';

/*
            <div className='map_splash'>
                <div className='map'>
                    <img src={map} alt="map" />
                </div>
            </div>


            <Container align="center" mt={50}>
            <Stack direction="row" spacing={4} justifyContent="center">
                <Button variant="contained" onClick={handleHouseClick}>House/City</Button>
                <Button variant="contained" onClick={handleSavClick}>Savanna</Button>
                <Button variant="contained" onClick={handleJungleClick}>Jungle</Button>
                <Button variant="contained" onClick={handleMountainClick}>Mountain</Button>
                <Button variant="contained" onClick={handleMiscClick}>Forest</Button>
            </Stack>
            </Container>
*/

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
    const handleHouseClick = () => {
        navigate('/city-cats');
    };
    const handleSavClick = () => {
        navigate('/savanna-cats');
    };
    const handleJungleClick = () => {
        navigate('/jungle-cats');
    };
    const handleMountainClick = () => {
        navigate('/mountain-cats');
    };
    const handleMiscClick = () => {
        navigate('/misc-cats');
    };
  
    return (
        <>
        <Header/>
        <Box sx={{ bgcolor: '#fbf4e2', pt: 1, pb: 6,}} minHeight='calc(69vh)' mt={0}>
            <h2 align='center'>
                Welcome to CatZoo Application A!
            </h2>

            <h4 align='center'>Click a biome to explore the cats that live there!</h4>
            
            <div class="container">
                <div class="Mountain">
                    <img src={mountain} onClick={handleMountainClick} alt="Mountain" />
                </div>
                <div class="City">
                    <img src={city} onClick={handleHouseClick} alt="City" />
                </div>
                <div class="Savanna">
                    <img src={savanna} onClick={handleSavClick} alt="Savanna" />
                </div>
                <div class="Forest">
                    <img src={forest} onClick={handleMiscClick} alt="Forest" />
                </div>
                <div class="Jungle">
                    <img src={jungle} onClick={handleJungleClick} alt="Jungle" />
                </div>
            </div>

            
        </Box>
        </>
    );
}

export default HomeA;
