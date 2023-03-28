import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
import HomeA from './HomeA.jsx';
import { useNavigate } from 'react-router-dom';
import ScottishFold from '../cat species/scottishFold.jsx';
import './biome.css';

import cougar from '../assets/catpics/Cougar/Cougar3.png';
import tiger from '../assets/catpics/Tiger/Tiger3.png';
import norwegian from '../assets/norweiganForest.jpg'

import HeaderWithMap from '../HeaderWithMap';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const MiscBiome = () => {
    const navigate = useNavigate();

    const setToScottishFold = () => {
        navigate('/city-cats/scottish-fold');
    }
    
        //function to render the home page
    const handleHomeClick = () => {
        navigate('/');
    };
    
    return (
        <>
        <HeaderWithMap/>
        <div className='biome_splash' style={{height: 'calc(88vh + 4px)'}}>
            <h1>Welcome to the Forest!</h1>
            <h2>Explore the cats it has to offer!</h2>

            <div className='biome_cats_splash'>
                <Stack direction="column">
                    <Stack direction="row">
                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={cougar} onClick={setToScottishFold} alt="Florida Panther" />
                            </div>
                            <h3>Florida Panther</h3>
                        </div>

                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={tiger} alt="Tiger" />
                            </div>
                            <h3>Tiger</h3>
                        </div>

                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={norwegian} alt="Norwegian Forest Cat" />
                            </div>
                            <h3 mb={5}>Norwegian Forest Cat</h3>
                        </div>
                    </Stack>
                </Stack>
            </div>
        </div>
        </>
    );
}

export default MiscBiome;
