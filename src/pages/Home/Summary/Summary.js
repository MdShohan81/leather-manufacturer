import React from 'react';

const Summary = () => {
    return (
        <div className='container my-5'>
          <div className='mx-auto w-50'>
         <h1 className='text-center my-5'>Business <span className='title-color'>Summary</span></h1>
         <div class="stats bg-slate-900 text-light stats-vertical lg:stats-horizontal shadow">
  <div class="stat">
  <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div class="stat-title">Total Revenue</div>
    <div class="stat-value">4.5M</div>
    <div class="stat-desc">April 1st - May 1st</div>
  </div>
  
  <div class="stat">
  <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div class="stat-title">New Client</div>
    <div class="stat-value">4,200</div>
    <div class="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div class="stat">
  <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div class="stat-title">Shipment</div>
    <div class="stat-value">400</div>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
        </div>
    );
};

export default Summary;