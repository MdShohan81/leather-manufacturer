import React from 'react';

const Summary = () => {
    return (
        <div className='container my-5'>
             <h1 className='text-center my-5'>Our <span className='title-color'>Business Summary</span></h1>
            <div className="w-50 mx-auto">
            <div class="stats shadow">
  
  <div class="stat">
    <div class="stat-figure text-danger">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div class="stat-title">People Likes</div>
    <div class="stat-value text-danger">20.6K</div>
    <div class="stat-desc">22% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div class="stat-title">Revenue </div>
    <div class="stat-value text-secondary">3.6M</div>
    <div class="stat-desc">39% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-danger">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div class="stat-value">86%</div>
    <div class="stat-title">Product shipment</div>
    <div class="stat-desc text-secondary">31 shipment remaining</div>
  </div>
  
</div>
            </div>
        </div>
    );
};

export default Summary;