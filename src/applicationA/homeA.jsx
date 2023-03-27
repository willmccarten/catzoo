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
                Welcome to Cat Zoo Application A!
            </h2>

            <h4 align='center'>Click a biome to explore the cats that live there!</h4>
            <div className='map_splash'>
                <div className='map'>
                    <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/57267519/original/c29150cf2ec22629122e72ed8a02087a996ea2e3/draw-your-fantasy-map.png" classname="map" alt="map" />
                </div>
                <div className='mountains'>
                    <img src="https://i.pinimg.com/originals/6a/53/94/6a5394b1e9ae8952026ceb38dc9d87f5.png" classname="mountains" alt="mountain" mb={1}/>
                </div>
            </div>
            <Container align="center" mt={50}>
            <Stack direction="column" spacing={4} justifyContent="center">
                <Button variant="contained" onClick={handleHouseClick}>House/City</Button>
                <Button variant="contained" onClick={handleSavClick}>Savanna</Button>
                <Button variant="contained" onClick={handleJungleClick}>Jungle</Button>
                <Button variant="contained" onClick={handleMountainClick}>Mountain</Button>
                <Button variant="contained" onClick={handleMiscClick}>Misc</Button>
            </Stack>
            </Container>
        </Box>
        </>
    );
}

export default HomeA;