import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MintNFT = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedImage = location.state?.selectedImage;

  const handleHome = () => {
    navigate('/');
  }

  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <h1 className="text-3xl font-serif font-bold text-center mb-6">NFT Sucessfully Minted!</h1>

      {selectedImage && (
        <>
          <img 
            src={URL.createObjectURL(selectedImage)} 
            alt="Selected Preview"
            className="mb-4 rounded max-h-96"
          />
          <div className="bg-white p-8 shadow-md rounded-md max-w-md mb-4">
            <h2 className="text-2xl font-bold mb-4">Owner Details</h2>
            <p>Name: John Doe</p>
            <p>Email: john@example.com</p>
          </div>
          <button 
            className="bg-green-500 flex text-white px-4 py-2 rounded">
            Phygitalize
          </button>
          <button
          onClick={handleHome}
          className="bg-gray-500 text-black px-4 py-2 rounded"
        >
          Close
          </button>
        </>
      )}
    </div>
  );
};

export default MintNFT;