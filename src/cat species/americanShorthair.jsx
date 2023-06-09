import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
import HomeA from '../applicationA/HomeA.jsx';
import HouseBiome from '../applicationA/HouseBiome.jsx';
import './species.css';
import americanshorthair from '../assets/americanshorthair.jpg';
import Header from '../HeaderWithMap';
import BackButton from './BackButton';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



const americanShorthair = () => {
    return (
        <>
        <Header/>
       
        <div className='species_splash'>
            
            <div className='species_cats_splash'>
                
                <div className='cat_pic'>
                    <img src={americanshorthair} alt="American Shorthair"/>
                </div>

                <div classname='cat_info'>
                    <h1>American Shorthair</h1>
                    <h4>Origin: United States</h4>
                    <h4>Weight: 7-15 lbs</h4>
                    <h4>Height: 9-11 inches</h4>
                    <h4>Life Span: 15-20 years</h4>
                    <h4>Temperament: Friendly, Intelligent, Playful, Affectionate</h4>
                    <h4>Coat: Short, Soft, and Silky</h4>
                    <h4>Colors: White, Black, Blue, Cream, Chocolate, Lilac, Red, and Tortoiseshell</h4>
                    <h4>Pattern: Solid, Tabby, and Tortoiseshell</h4>
                    
                </div>
                
            </div>
        </div>
        </> 
    );
}

export default americanShorthair;