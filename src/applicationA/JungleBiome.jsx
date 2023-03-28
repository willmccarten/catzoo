import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
import HomeA from './HomeA.jsx';
import { useNavigate } from 'react-router-dom';
import ScottishFold from '../cat species/scottishFold.jsx';
import './biome.css';

import bengal from '../assets/bengal.jpg';
import scottishfold from '../assets/scottishfold.png';
import americanshorthair from '../assets/americanshorthair.jpg';

import jaguar from '../assets/catpics/Jaguar/Jaguar3.png';
import ocelot from '../assets/catpics/Ocelot/Ocelot3.png';
import jungleCat from '../assets/Jungle-cat.jpg'

import HeaderWithMap from '../HeaderWithMap';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const JungleBiome = () => {
    const navigate = useNavigate();

    const setToJaguar = () => {
        navigate('/jungle-cats/jaguar');
    }

    const setToOcelot = () => {
        navigate('/jungle-cats/ocelot');
    }

    
        //function to render the home page
    const handleHomeClick = () => {
        navigate('/');
    };
    
    return (
        <>
        <HeaderWithMap/>
        <div className='biome_splash' style={{height: 'calc(88vh + 4px)'}}>
            <h1>Welcome to the Jungle!</h1>
            <h2>Explore the cats it has to offer!</h2>

            <div className='biome_cats_splash'>
                <Stack direction="column">
                    <Stack direction="row">
                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={jaguar} onClick={setToJaguar} alt="Jaguar" />
                            </div>
                            <h3>Jaguar</h3>
                        </div>

                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={ocelot} onClick={setToOcelot} alt="Ocelot" />
                            </div>
                            <h3>Ocelot</h3>
                        </div>

                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={jungleCat} alt="Jungle Cat" />
                            </div>
                            <h3 mb={5}>Jungle Cat</h3>
                        </div>
                    </Stack>
                </Stack>
            </div>
        </div>
        </>
    );
}

export default JungleBiome;
