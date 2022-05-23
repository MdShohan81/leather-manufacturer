import React, { useRef } from 'react';
import './Register.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../../Loading/Loading';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    // get navigate
    const navigate = useNavigate();
    //react firebase hooks create new user
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const loginRegister = event =>{
        navigate('login');
    }

    let errorMessages;
    if(error){
        errorMessages = <div>
                            <p className='text-danger'>{'Please put right way'}</p>
                        </div>
    }
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        navigate('/')
    }
    //get user sign value and submit
    const registerHandleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword( email, password);
        event.target.reset();
        toast('send verify email')

    }
    return (
        <div className="register-container">
        <div className="row card pb-4 shadow-lg mt-3">
        <h2 className='text-center my-3  title'>Please Register </h2>
            <div>
                <Form onSubmit={registerHandleSubmit}>
                    {errorMessages}
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control className='text-start' ref={nameRef} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='text-start' ref={emailRef}  type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='text-start' ref={passwordRef}  type="password" placeholder="Password" />
                </Form.Group>
                <button className='btn btn-outline-danger px-4' type='submit'>
                    Register
                </button>
                </Form>
                <p className='mt-3'>Already have account <Link className='text-primary text-decoration-none' onClick={loginRegister}  to='/login'>Login here</Link></p>
                <ToastContainer></ToastContainer>
            </div>
            <Social></Social>
        </div>
        
    </div>
    );
};

export default Register;