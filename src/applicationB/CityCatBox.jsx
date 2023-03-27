import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../applicationA/biome.css';
import bengal from '../assets/bengal.jpg';
import scottishfold from '../assets/scottishfold.png';
import americanshorthair from '../assets/americanshorthair.jpg';
import HeaderWithMap from '../HeaderWithMap';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const CityCatBox = () => {
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
                                <img src={scottishfold} onClick={setToScottishFold} alt="Scottish Fold" />
                            </div>
                            <h3>Scottish Fold</h3>
                        </div>

                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={bengal} alt="Scottish Fold" />
                            </div>
                            <h3>Bengal Cat</h3>
                        </div>

                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={americanshorthair} alt="American Shorthair" />
                            </div>
                            <h3 mb={5}>American Shorthair</h3>
                        </div>
                    </Stack>

                    <Stack direction="row">
                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={scottishfold} onClick={setToScottishFold} alt="Scottish Fold" />
                            </div>
                            <h3>Scottish Fold</h3>
                        </div>

                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={bengal} alt="Scottish Fold" />
                            </div>
                            <h3>Bengal Cat</h3>
                        </div>

                        <div className='cat_species'>
                            <div className='cat_pic_container'>
                                <img src={americanshorthair} alt="American Shorthair" />
                            </div>
                            <h3 mb={5}>American Shorthair</h3>
                        </div>
                    </Stack>
                </Stack>
            </div>
        </>
    );
}

export default CityCatBox;