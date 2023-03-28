import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
import HomeA from '../applicationA/HomeA.jsx';
import HouseBiome from '../applicationA/HouseBiome.jsx';
import './species.css';
import scottishfold from '../assets/scottishfold.png';
import Lion from '../assets/catpics/Lion/Lion2.png';
import Header from '../HeaderWithMap';
import BackButton from './BackButton';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



const lion = () => {
    return (
        <>
        <Header/>
       
        <div className='species_splash'>
            
            <div className='species_cats_splash'>
                
                <div className='cat_pic'>
                    <img src={Lion} alt="Lion"/>
                </div>

                <div classname='cat_info'>
                    <h1>Lion</h1>
                    <h4>Origin: Africa</h4>
                    <h4>Weight: 150-400 lbs</h4>
                    <h4>Height: 3-5 feet</h4>
                    <h4>Life Span: 10-14 years</h4>
                    <h4>Temperament: Friendly, Intelligent, Playful, Affectionate</h4>
                    <h4>Coat: Short, Soft, and Silky</h4>
                    <h4>Color: Gold</h4>
                    

                </div>
                
            </div>
        </div>
        </> 
    );
}

export default lion;