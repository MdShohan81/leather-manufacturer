import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
    return (
    <div>
       <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
        <Outlet></Outlet>
    <label for="my-drawer-2" className="btn btn-primary drawer-button  lg:hidden xl:hidden 2xl:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-slate-800 text-white">
      
      <li><Link className='text-decoration-none' to='/dashboard'>My Order</Link></li>
      <li><Link className='text-decoration-none' to='/dashboard/review'>My Review</Link></li>
    </ul>
  
  </div>
</div>
    </div>
    );
};

export default Dashboard;