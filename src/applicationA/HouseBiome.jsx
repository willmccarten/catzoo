import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
import HomeA from './HomeA.jsx';
import { useNavigate } from 'react-router-dom';
import './biome.css';

import bengal from '../assets/bengal.jpg';
import scottishfold from '../assets/scottishfold.png';
import americanshorthair from '../assets/americanshorthair.jpg';

import HeaderWithMap from '../HeaderWithMap';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const HouseBiome = () => {
    const navigate = useNavigate();

    const setToScottishFold = () => {
        navigate('/city-cats/scottish-fold');
    }

    const setToAmericanShorthair = () => {
        navigate('/city-cats/american-shorthair');
    }

    const setToBengal = () => {
        navigate('/city-cats/bengal');
    }
    
        //function to render the home page
    const handleHomeClick = () => {
        navigate('/');
    };
    
    return (
        <>
        <HeaderWithMap/>
        <div className='biome_splash' style={{height: 'calc(88vh + 4px)'}}>
            <h1>Welcome to the City!</h1>
            <h2>Explore the cats it has to offer!</h2>

            <div className='biome_cats_splash'>
                <Stack direction="column">
                    <Stack direction="row">
                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={scottishfold} onClick={setToScottishFold} alt="Scottish Fold" />
                            </div>
                            <h3>Scottish Fold</h3>
                        </div>

                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={bengal} onClick={setToBengal} alt="Bengal" />
                            </div>
                            <h3>Bengal Cat</h3>
                        </div>

                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={americanshorthair} onClick={setToAmericanShorthair} alt="American Shorthair" />
                            </div>
                            <h3 mb={5}>American Shorthair</h3>
                        </div>
                    </Stack>
                </Stack>
            </div>
        </div>
        </>
    );
}

export default HouseBiome;
