import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
import HomeA from '../applicationA/HomeA.jsx';
import HouseBiome from '../applicationA/HouseBiome.jsx';
import './species.css';
import bengalPic from '../assets/bengal.jpg';
import Header from '../HeaderWithMap';
import BackButton from './BackButton';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



const bengal = () => {
    return (
        <>
        <Header/>
       
        <div className='species_splash'>
            
            <div className='species_cats_splash'>
                
                <div className='cat_pic'>
                    <img src={bengalPic} alt="Bengal"/>
                </div>

                <div classname='cat_info'>
                    <h1>Bengal</h1>
                    <h4>Origin: Asia</h4>
                    <h4>Weight: 8-15 lbs</h4>
                    <h4>Height: 10-16 inches</h4>
                    <h4>Life Span: 12-15 years</h4>
                    <h4>Temperament: Friendly, Intelligent, Playful, Affectionate</h4>
                    <h4>Coat: Short, Soft, and Silky</h4>
                    <h4>Colors: Brown, Black, and White</h4>
                    <h4>Pattern: Spotted, Marbled, and Rosetted</h4>
                    <h4>Other: Bengal cats are known for their high energy and intelligence. They are also known for their love of water. They are very playful and love to play fetch.  
                    </h4>
                    
                </div>
                
            </div>
        </div>
        </> 
    );
}

export default bengal;