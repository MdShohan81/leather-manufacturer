import React from 'react';

const ReviewCard = ({review}) => {
    const { picture, name, ratings, description} = review;
    return (
        <div>
            <div class="card w-80 lg:w-96 bg-base-100 shadow-md">
            <div class="avatar mx-auto p-2">
                <div class="w-16 rounded">
                    <img src={picture} alt="review-img" />
                </div>
            </div> 
            <div class="card-body items-center text-center">
                <h2 class="card-title text-yellow-400">Ratings: {ratings}</h2>
                <h2 class="card-title">Name: {name}</h2>
                <p>{description}</p>
            </div>
            </div>
        </div>
    );
};

export default ReviewCard;