import { useState } from "react";

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div className="mt-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`cursor-pointer text-2xl ${hoveredRating >= star || rating >= star ? "text-yellow-500" : "text-gray-400"}`}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      <button
        className="mt-2 px-4 py-1 bg-blue-500 text-white rounded"
        disabled={rating === 0}
        onClick={() => {
          onRatingSubmit(productId, rating);
          setRating(0);
        }}
      >
        Submit Rating
      </button>
    </div>
  );
}

export default RatingWidget;