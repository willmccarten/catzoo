import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
import HomeA from '../applicationA/HomeA.jsx';
import HouseBiome from '../applicationA/HouseBiome.jsx';
import './species.css';
import scottishfold from '../assets/scottishfold.png';
import Header from '../HeaderWithMap';
import BackButton from './BackButton';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

//function to render the home page
function setToHome(){
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

//function to render the App A's home page
function setToA(){
    ReactDOM.render(
        <React.StrictMode>
            <HomeA />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

//function to render the Biome page
function setToBiome(){
    ReactDOM.render(
        <React.StrictMode>
            <HouseBiome />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

const scottishFold = () => {
    return (
        <>
        <Header/>
       
        <div className='species_splash'>
            <Box  justifyContent="center" display='flex' mb={'10px'}>
                <BackButton/>
            </Box>
            <div className='species_cats_splash'>
                
                <div className='cat_pic'>
                    <img src={scottishfold} alt="Scottish Fold" />
                </div>

                <div classname='cat_info'>
                    <h1>Scottish Fold</h1>
                    <h4>Origin: Scotland</h4>
                    <h4>Weight: 7-12 lbs</h4>
                    <h4>Height: 8-10 inches</h4>
                    <h4>Life Span: 12-15 years</h4>
                    <h4>Temperament: Friendly, Intelligent, Playful, Affectionate</h4>
                    <h4>Coat: Short, Soft, and Silky</h4>
                    <h4>Colors: White, Black, Blue, Cream, Chocolate, Lilac, Red, and Tortoiseshell</h4>
                    <h4>Pattern: Solid, Tabby, and Tortoiseshell</h4>
                    <h4>Other: The Scottish Fold is a breed of domestic cat with a natural dominant-gene mutation that affects cartilage throughout the body, causing the ears to "fold" or "pinch" over. The mutation is inherited as an autosomal dominant trait, which means that a cat only needs to inherit one copy of the folded-gene from either parent to have folded ears. The folded ears are not the only physical trait of the breed, however. The breed also has a short, compact body, large eyes, and a round head. The breed is also known for its affectionate and docile temperament.</h4>
                </div>
                
            </div>
        </div>
        </> 
    );
}

export default scottishFold;