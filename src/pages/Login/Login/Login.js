import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';
import './Login.css'

const Login = () => {
    return (
        <div className="login-container">
            <div className="row card pb-4 shadow-lg mt-3">
            <h1 className='text-center my-3 title'>Please Login</h1>
                <div>
                    <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  type="email" className='text-start' placeholder="Enter email" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  type="password" className='text-start' placeholder="Password" />
                    </Form.Group>
                    <button className='btn btn-outline-danger px-4'>
                        Log In
                    </button>
                    </Form>
                    <p className='mt-3'>New to Carspot? <Link className='text-primary text-decoration-none'    to='/register'>Register here</Link></p>
                    <p>Forget Password? <Button  className='text-danger pe-auto text-decoration-none' variant='Link' >Forget Password</Button></p>
                    
                </div>
                <Social></Social>
            </div>
            
        </div>
    );
};

export default Login;