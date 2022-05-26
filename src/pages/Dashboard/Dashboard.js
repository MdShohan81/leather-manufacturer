import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user);

    return (
    <div>
       <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
        <Outlet></Outlet>
    <label for="my-drawer-2" className="drawer-button  lg:hidden xl:hidden 2xl:hidden"></label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-slate-800 text-white">
    <li><Link className='text-decoration-none' to='/dashboard'>My Profile</Link></li>
    {!admin 
    && 
    <>
    <li><Link className='text-decoration-none' to='/dashboard/review'>Add Review</Link></li>
    <li><Link className='text-decoration-none' to='/dashboard/order'>My Order</Link></li>
       </>}
      {admin && <>
        <li><Link className='text-decoration-none' to='/dashboard/user'>Make Admin</Link></li>
        <li><Link className='text-decoration-none' to='/dashboard/manageorder'>Manage Order</Link></li>
        <li><Link className='text-decoration-none' to='/dashboard/addproduct'>Add Product</Link></li>
        <li><Link className='text-decoration-none' to='/dashboard/manageproduct'>Mange Product</Link></li>
      </>}
    </ul>
  
  </div>
</div>
    </div>
    );
};

export default Dashboard;