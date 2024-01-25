// StarRating.jsx
import React from "react";
import Rating from "react-rating-stars-component";

const StarRating = () => {
  // Add your logic to handle the rating
  const handleRating = (rating) => {
    // Your logic to handle the rating, e.g., send it to the server
    console.log("Rated: ", rating);
  };

  return (
    <Rating
      count={5}
      onChange={handleRating}
      size={24}
      activeColor="#ffd700"
    />
  );
};

export default StarRating;
