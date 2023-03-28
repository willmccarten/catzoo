import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
import HomeA from '../applicationA/HomeA.jsx';
import HouseBiome from '../applicationA/HouseBiome.jsx';
import './species.css';

import scottishfold from '../assets/scottishfold.png';
import Cheetah from '../assets/catpics/Cheetah/Cheetah2.png';

import Header from '../HeaderWithMap';
import BackButton from './BackButton';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



const cheetah = () => {
    return (
        <>
        <Header/>
        <div className='species_splash'>
            
            <div className='species_cats_splash'>
                
                <div className='cat_pic'>
                    <img src={Cheetah} alt="Cheetah"/>
                </div>

                <div classname='cat_info'>
                    <h1>Cheetah</h1>
                    <h4>Origin: Africa</h4>
                    <h4>Weight: 50-120 lbs</h4>
                    <h4>Height: 2-3 feet</h4>
                    <h4>Life Span: 10-14 years</h4>
                    <h4>Temperament: Friendly, Intelligent, Playful, Affectionate</h4>
                    <h4>Coat: Short, Soft, and Silky</h4>
                    <h4>Color: Gold with black spots</h4>
                    <h4>Pattern: Spotted</h4>
                

                </div>
                
            </div>
        </div>
        </> 
    );
}

export default cheetah;