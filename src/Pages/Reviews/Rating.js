import React from 'react'
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';


const Rating = ({ setRating }) => {
    const [rating, setLocalRating] = useState(0);
  
    const handleRating = (value) => {
      setLocalRating(value);
      setRating(value);
    };
  
    return (
      <div>
        {[...Array(5)].map((_, index) => {
          const value = index + 1;
          return (
            <FaStar
              key={value}
              size={24}
              onClick={() => handleRating(value)}
              color={value <= rating ? '#ffc107' : '#e4e5e9'}
              style={{ cursor: 'pointer' }}
            />
          );
        })}
      </div>
    );
  };
  
  export default Rating;