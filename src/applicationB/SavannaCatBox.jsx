import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../applicationA/biome.css';
import lion from '../assets/catpics/Lion/Lion3.png';
import cheetah from '../assets/catpics/Cheetah/Cheetah2.png';
import serval from '../assets/serval.png';
import HeaderWithMap from '../HeaderWithMap';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const SavannaCatBox = () => {
    const navigate = useNavigate();

    const setToLion = () => {
        navigate('/savanna-cats/lion');
    }

    const setToCheetah = () => {
        navigate('/savanna-cats/cheetah');
    }
    
    return (
        <>
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
                            <h3>Cheetah</h3>
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
        </>
    );
}

export default SavannaCatBox;