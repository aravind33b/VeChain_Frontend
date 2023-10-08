import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import nike_logo from '../images/nike-logo.jpg';
import gucci from '../images/gucci.webp';
import under_armour from '../images/under_armour.svg'
import prada from '../images/prada.svg'

const brands = [
  { name: 'Nike', logo: nike_logo },
  { name: 'Under Armour', logo: under_armour },
  { name: 'Prada', logo: prada },
  { name: 'Gucci', logo: gucci },
  // Add more brands as needed
];

const materials = [
  { name: 'Polyester', price: 100 },
  { name: 'Synthetic', price: 200 },
  { name: 'Leather', price: 300 },
];

const Phygitalize = () => {
    const location = useLocation();
    const selectedImage = location.state?.selectedImage;
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  const handleMaterialSelect = (material) => {
    setSelectedMaterial(material);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
    <h1 className="text-2xl mb-4">Phygitalize</h1>

    {selectedImage && (
      <img 
        src={URL.createObjectURL(selectedImage)} 
        alt="Selected Preview"
        className="mb-4 rounded max-h-96"
      />
    )}

    <div className="mb-4 text-center">
      <h2 className="text-xl mb-2">Select a Brand</h2>
      <ul className="flex space-x-4 justify-center">
        {brands.map((brand) => (
          <li key={brand.name} onClick={() => handleBrandSelect(brand)} className="cursor-pointer">
            <img src={brand.logo} alt={brand.name} className="w-16 h-16" />
            <p>{brand.name}</p>
          </li>
        ))}
      </ul>
    </div>

    <div className="mb-4 text-center">
      <h2 className="text-xl mb-2">Select a Material</h2>
      <select onChange={(e) => handleMaterialSelect(materials[e.target.value])} className="p-2 border">
        <option value="" disabled selected>Select a material</option>
        {materials.map((material, index) => (
          <option key={material.name} value={index}>
            {material.name}
          </option>
        ))}
      </select>
    </div>

    {isModalOpen && (
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-8 rounded text-center w-96 h-auto md:w-1/2 lg:w-1/3">
      <h2 className="text-lg mb-2">Price Details</h2>
      <p>Brand: {selectedBrand?.name}</p>
      <p>Material: {selectedMaterial?.name}</p>
      <p>Price: ${selectedMaterial?.price}</p>
      <button onClick={closeModal} className="mt-4 p-2 bg-gray-500 text-white">Buy</button>
    </div>
  </div>
)}
  </div>
);
};

export default Phygitalize;
