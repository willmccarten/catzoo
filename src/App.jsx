//this will be the landing page
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import catlogo from './assets/catlogo.png';
//import Loader from './Loader';
import HomePage from './HomePage';
import HomeA from './applicationA/HomeA';
import HomeB from './applicationB/HomeB';
import CityBiome from './applicationA/HouseBiome';
import SavannaBiome from './applicationA/SavannaBiome';
import JungleBiome from './applicationA/JungleBiome';
import MountainBiome from './applicationA/MountainBiome';
import MiscBiome from './applicationA/MiscBiome';
import ScottishFold from './cat species/scottishFold';
import AmericanShorthair from './cat species/americanShorthair';
import Bengal from './cat species/bengal';
import Lion from './cat species/lion';
import Cheetah from './cat species/cheetah';


function App() {
  return (
    <Router>
      <main style={{ flex: 1}}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/applicationA" element={<HomeA />} />
          <Route path="/applicationB" element={<HomeB />} />
          <Route path="/city-cats" element={<CityBiome />} />
          <Route path="/savanna-cats" element={<SavannaBiome />} />
          <Route path="/jungle-cats" element={<JungleBiome />} />
          <Route path="/mountain-cats" element={<MountainBiome />} />
          <Route path="/misc-cats" element={<MiscBiome />} />
          <Route path="/city-cats/scottish-fold" element={<ScottishFold />}/>
          <Route path="/city-cats/bengal" element={<Bengal />} />
          <Route path="/city-cats/american-shorthair" element={<AmericanShorthair/>} />
          <Route path="/savanna-cats/lion" element={<Lion />} />
          <Route path="/savanna-cats/cheetah" element={<Cheetah />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
