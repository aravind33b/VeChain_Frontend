import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import { useNavigate } from 'react-router-dom';
import '@material-tailwind/react';

const LandingPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate(); 

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
  };

  const handleMintNFT = () => {
    navigate('/mint-nft', { state: { selectedImage } });  
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
        <h1 className="text-4xl font-serif font-bold mb-6 text-black-800">Design it Yourself</h1>
      <div className="p-8 bg-gray-300 shadow-lg rounded-lg max-w-md">
        <input 
          type="file"
          onChange={handleImageSelect}
          className="mb-4 text-black py-2 px-4 rounded-full cursor-pointer bg-gray-400"
          accept="image/*"
        />
        {selectedImage && (
          <>
            <ImageUpload imageFile={selectedImage} />
            <div className="flex justify-between mt-4">
            <button 
              onClick={handleImageRemove}
              className="mt-4 bg-gray-400 text-black py-2 px-4 rounded-full"
            >
              Remove Image
            </button>
            <button 
                onClick={handleMintNFT}
                className="bg-gray-400 text-black py-2 px-4 rounded-full"
              >
                Mint NFT
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
