import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../applicationA/biome.css';
import jaguar from '../assets/catpics/Jaguar/Jaguar3.png';
import ocelot from '../assets/catpics/Ocelot/Ocelot3.png';
import jungleCat from '../assets/Jungle-cat.jpg'
import HeaderWithMap from '../HeaderWithMap';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const JungleCatBox = () => {
    const navigate = useNavigate();

    const setToJaguar = () => {
        navigate('/jungle-cats/jaguar');
    }

    const setToOcelot = () => {
        navigate('/jungle-cats/ocelot');
    }
    
    return (
        <>
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
        </>
    );
}

export default JungleCatBox;