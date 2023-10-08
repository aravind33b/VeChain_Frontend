import React, { useState, useContext } from 'react';
import Connex from '@vechain/connex';
import '@material-tailwind/react';
import { WalletContext } from './WalletContext';
import designNFT from '../images/DesignNFT.png';
import { Link } from 'react-router-dom';

const Homepage = () =>{
    const { setUserAddress, userAddress } = useContext(WalletContext);
    const [connected, setConnected] = useState(false);

    const connectWallet = async () => {

    const connex = new Connex({
        node: 'https://testnet.vecha.in/',
        network: 'test'
    });

    const wallet = await connex.vendor.sign('cert',
    {
        purpose: 'identification',
        payload: {
        type: 'text',
        content: 'Please sign this to log in',
        },
    },
    ).request();
    console.log(wallet);
    setUserAddress(wallet.annex.signer);
    setConnected(true);
    };
    console.log(connected);
    console.log(userAddress);

    const disconnectWallet = () => {
        setUserAddress('');
        setConnected(false);
    };
    
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
                    {/* <div className="flex space-x-4">
                    <Link to="/upload" className="text-gray-800 hover:text-blue-500">Design</Link>
                        <Link to="/mint-nft" className="text-gray-800 hover:text-blue-500">Mint</Link>
                    </div> */}
                    <div className="flex space-x-4">
                        {connected && (
                            <>
                                <Link to="/upload" className="text-gray-800 hover:text-blue-500">Design</Link>
                                <Link to="/mint-nft" className="text-gray-800 hover:text-blue-500">Mint</Link>
                            </>
                        )}
                    </div>
                    {connected ? (
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-800">{userAddress}</span>
                            <button
                                onClick={disconnectWallet}
                                className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={connectWallet}
                            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition duration-300"
                        >
                            Connect Wallet
                        </button>
                    )}
                </div>
            </nav>
        </div>
    
    )
    
}

export default Homepage;