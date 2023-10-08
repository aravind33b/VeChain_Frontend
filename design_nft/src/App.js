import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WalletProvider } from './components/WalletContext';
import Homepage from './components/HomePage';
import LandingPage from './components/LandingPage';
import MintNFT from './components/MintNFT';
import Phygitalize from './components/Phygitalize';

const App = ()=>{
    return(
        <WalletProvider>
            <Router>
                <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/upload" element={<LandingPage />} />
                <Route path="/mint-nft" element={<MintNFT />} />
                <Route path="/phygitalize" element={<Phygitalize />} />
                </Routes>
            </Router>
        </WalletProvider>
    )
    
}

export default App;