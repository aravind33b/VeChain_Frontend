import React from 'react';
import '@material-tailwind/react';

const ImageUpload = ({ imageFile }) => {
const imageUrl = imageFile ? URL.createObjectURL(imageFile) : null;

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {imageUrl && (
        <img
        src={imageUrl}
        alt="Preview"
        className="w-64 h-64 object-cover rounded"
        />
      )}
    </div>
  );
};

export default ImageUpload;
