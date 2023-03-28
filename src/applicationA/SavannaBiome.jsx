import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
import HomeA from './HomeA.jsx';
import { useNavigate } from 'react-router-dom';
import ScottishFold from '../cat species/scottishFold.jsx';
import './biome.css';

import americanshorthair from '../assets/americanshorthair.jpg';
import lion from '../assets/catpics/Lion/Lion3.png';
import cheetah from '../assets/catpics/Cheetah/Cheetah2.png';
import serval from '../assets/serval.png';


import HeaderWithMap from '../HeaderWithMap';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



const SavannaBiome = () => {
    const navigate = useNavigate();

    const setToLion = () => {
        navigate('/savanna-cats/lion');
    }

    const setToCheetah = () => {
        navigate('/savanna-cats/cheetah');
    }
    
        //function to render the home page
    const handleHomeClick = () => {
        navigate('/');
    };
    
    return (
        <>
        <HeaderWithMap/>
        <div className='biome_splash' style={{height: 'calc(88vh + 4px)'}}>
            <h1>Welcome to the Savanna!</h1>
            <h2>Explore the cats it has to offer!</h2>

            <div className='biome_cats_splash'>
                <Stack direction="column">
                    <Stack direction="row">
                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={lion} onClick={setToLion} alt="Lion" />
                            </div>
                            <h3>Lion</h3>
                        </div>

                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={cheetah} onClick={setToCheetah} alt="Cheetah" />
                            </div>
                            <h3 mb={5}>Cheetah</h3>
                        </div>
                    
                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={serval} alt="Serval" />
                            </div>
                            <h3 mb={5}>Serval</h3>
                        </div>
                    </Stack>
                </Stack>
            </div>
        </div>
        </>
    );
}

export default SavannaBiome;
