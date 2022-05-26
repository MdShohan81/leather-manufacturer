import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/' className='d-flex align-center justify-center'> <img src={logo} alt="img" className='text-white' style={{width: "60px", height: "50px"}}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
    </Nav>
    <Nav>
      {
        user && <Nav.Link as={Link}  to="/dashboard">Dashboard</Nav.Link>
      }
      {
        user ? 
          <>
          
          <Nav.Link as={Link}  to="/signout" onClick={handleSignOut}>Sign Out</Nav.Link>
          </>
        :
        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
      }
        
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;