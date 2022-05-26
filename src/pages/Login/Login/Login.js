import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import Social from '../Social/Social';
import axios from 'axios';
import './Login.css'
import useToken from '../../../hooks/useToken';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
      const token = useToken(user)

      const navigateRegister = event => {
        navigate('/register')
    }
    let errorMessages;
    if(error){
        errorMessages = <div>
                            <p className='text-danger'>{'Please put correct email/password'}</p>
                        </div>
    }
    if(loading || sending){
        return <Loading></Loading>
    }
    if (token){
        navigate(from, { replace: true });
    }

    const loginHandleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        
    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('sent email check your inbox')
        }else{
            toast('please put your email')
        }
    }


    return (
        <div className="login-container">
            <div className="row card pb-4 shadow-lg mt-3">
            <h1 className='text-center my-3 title'>Please Login</h1>
                <div>
                    <Form onSubmit={loginHandleSubmit}>
                    {errorMessages}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef}  type="email" className='text-start' placeholder="Enter email" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef}  type="password" className='text-start' placeholder="Password" />
                    </Form.Group>
                    <button className='btn btn-outline-danger px-4' type='submit'>
                        Log In
                    </button>
                    </Form>
                    <p className='mt-3'>New to Carspot? <Link className='text-primary text-decoration-none' onClick={navigateRegister}   to='/register'>Register here</Link></p>
                    <p>Forget Password? <Button  className='text-danger pe-auto text-decoration-none' variant='Link' onClick={ resetPassword }>Forget Password</Button></p>
                    
                </div>
                <Social></Social>
            </div>
            
        </div>
    );
};

export default Login;