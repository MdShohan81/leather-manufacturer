import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth'
import auth from '../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
  return (
    <div>
      <div className="navbar bg-slate-900">
      <div className="navbar-start">
     <div className="dropdown">
      <label tabindex="0" className="btn btn-danger lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
       <li>
       {
        user && <Link  to="/dashboard">Dashboard</Link>
      }
       </li>
     <li>
     {
        user ? 
          <>
          
          <Link to="/signout" onClick={handleSignOut}>Sign Out</Link>
          </>
        :
        <Link  to='/login'>Login</Link>
      }
     </li>
      </ul>
    </div>
    <Link to='/' className='text-decoration-none text-red-600 ms-4 text-bold text-2xl'>Leather</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-white p-0">
    <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
       <li>
       {
        user && <Link  to="/dashboard">Dashboard</Link>
      }
       </li>
     <li>
     {
        user ? 
          <>
          
          <Link to="/signout" onClick={handleSignOut}>Sign Out</Link>
          </>
        :
        <Link  to='/login'>Login</Link>
      }
     </li>
    </ul>
  </div>
  <div className="navbar-end lg:hidden">
  <label for="my-drawer-2" className="btn text-light drawer-button  lg:hidden xl:hidden">Dashboard</label>
  </div>
</div>
    </div>
  );
};

export default Header;