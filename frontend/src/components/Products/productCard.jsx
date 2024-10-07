import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'; // Add cloud sun icon for outdoor
import { faPaw } from '@fortawesome/free-solid-svg-icons'; // Add paw icon for pet-friendly

const ProductCard = ({ plant }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex flex-col mb-10 ml-16"> {/* Removed items-center to prevent centering of content */}
      {/* Main product image with adjusted height */}
      <div className="h-72 w-60 overflow-hidden rounded-3xl relative" style={{ boxShadow: '0 10px 8px rgba(0, 0, 0, 0.2)' }}>
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover rounded-xl" // Maintains border radius
        />
        <div className="absolute top-3 right-2">
          {/* Styled button */}
         {/* Labels (Indoor, Outdoor, Pet-Friendly) */}
          <button
            className="px-3 py-1 border text-black-300 hover:bg-opacity-90 transition-all"
            style={{ borderRadius: '20px', background: 'rgba(255, 255, 255, 0.50)' }}  // Applied border-radius and background
          >
            {plant.indoor ? (
              <>
                <FontAwesomeIcon icon={faCloudSun} className="mr-2" /> {/* Indoor icon */}
                Indoor
              </>
            ) : plant.outdoor ? (
              <>
                <FontAwesomeIcon icon={faSun} className="mr-2" /> {/* Outdoor icon */}
                Outdoor
              </>
            ) : plant.petFriendly ? (
              <>
                <FontAwesomeIcon icon={faPaw} className="mr-2" /> {/* Pet-friendly icon */}
                PetFriendly
              </>
            ) : null}
          </button>
        </div>
      </div>

      {/* Details aligned to the left */}
      <div className="w-full mt-4 space-y-2 text-left"> {/* Applied text-left directly */}
        {/* Rating and Like Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="flex items-center text-yellow-500 mr-2">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="text-gray-500">{plant.rating}</span>
            <span>
              <p className="text-gray-500 pl-2">Reviews</p>
            </span>
          </div>
          {/* Like button */}
          <button
            onClick={handleLike}
            className={`text-xl focus:outline-none ${liked ? 'text-red-500' : 'text-gray-500'}`}
          >
            <FontAwesomeIcon icon={liked ? faHeart : faRegHeart} />
          </button>
        </div>

        {/* Plant Name */}
        <h2 className="text-xl font-semibold">{plant.name}</h2>

        {/* Price */}
        <p className="text-xl text-black-900 font-bold">${plant.price}</p>

      {/* Shop Now button */}
        <button
          className="text-white px-4 py-2 w-full mt-4 hover:bg-green-600 transition-colors"
          style={{ borderRadius: '30px', backgroundColor: '#7AA262' }}  // Updated background color
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
