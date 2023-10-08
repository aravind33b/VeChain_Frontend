import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/HomePage';
import LandingPage from './components/LandingPage';
import MintNFT from './components/MintNFT';

const App = ()=>{
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/upload" element={<LandingPage />}/>
                <Route path="/mint-nft" element={<MintNFT />} />
            </Routes>
    </Router>
    )
    
}

export default App;