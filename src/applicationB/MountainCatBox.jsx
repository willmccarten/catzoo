import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../applicationA/biome.css';
import snowLeopard from '../assets/catpics/Snow Leopard/SnowLeopard1.png';
import bobcat from '../assets/catpics/Bobcat/Bobcat2.png';
import andeanMountain from '../assets/andeanMountain.jpg';
import HeaderWithMap from '../HeaderWithMap';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const MountainCatBox = () => {
    const navigate = useNavigate();
    
    const setToScottishFold = () => {
        navigate('/city-cats/scottish-fold');
    }
    
    return (
        <>
            <div className='biome_cats_splash'>
                <Stack direction="column">
                    <Stack direction="row">
                    <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={snowLeopard} onClick={setToScottishFold} alt="Snow Leopard" />
                            </div>
                            <h3>Snow Leopard</h3>
                        </div>

                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={bobcat} alt="Bobcat" />
                            </div>
                            <h3>Bobcat</h3>
                        </div>

                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={andeanMountain} alt="Andean Mountain Cat" />
                            </div>
                            <h3 mb={5}>Andean Mountain Cat</h3>
                        </div>
                    </Stack>

                    
                </Stack>
            </div>
        </>
    );
}

export default MountainCatBox;