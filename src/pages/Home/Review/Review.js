import React, { useEffect, useState } from 'react';
import ReviewCard from '../../ReviewCard/ReviewCard';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://arcane-wave-71042.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5'>Our <span className='title-color'>Client Reviews</span></h1>
            <div className="review-container">
                {
                    reviews.map(review => <ReviewCard key={review._id}
                    review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;