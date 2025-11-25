import React, { useState } from 'react';
import axios from 'axios';

function ReviewForm({ userId, hotelId }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/reviews', {
      user_id: userId,
      hotel_id: hotelId,
      rating,
      comment
    })
    .then(res => alert('Review submitted!'))
    .catch(err => console.error('Review error:', err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Rating:
        <input type="number" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)} />
      </label>
      <label>Comment:
        <textarea value={comment} onChange={e => setComment(e.target.value)} />
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
