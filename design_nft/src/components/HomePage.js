import React from 'react';
import '@material-tailwind/react';
import designNFT from '../images/DesignNFT.png';
import { Link } from 'react-router-dom';

const Homepage = () =>{
    return(
        <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
            <img 
                src={designNFT} 
                alt="Designing a T-shirt" 
                className="rounded-lg shadow mt-4"
            />
            <nav className="absolute top-0 left-0 right-0 bg-gray-200 bg-opacity-75 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold text-gray-800">Doodle</a>
                    <div className="flex space-x-4">
                    <Link to="/upload" className="text-gray-800 hover:text-blue-500">Design</Link>
                        <Link to="/mint-nft" className="text-gray-800 hover:text-blue-500">Mint</Link>
                    </div>
                    <button className="text-gray-500 border border-gray-500 px-4 py-2 rounded">
                        Connect Wallet
                    </button>
                </div>
            </nav>
        </div>
    
    )
    
}

export default Homepage;