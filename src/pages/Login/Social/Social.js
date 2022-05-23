import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let errorMessages;
    if(error){
        errorMessages = <div>
            <p className='text-danger'>{'something gone wrong'}</p>
        </div>
    }
    if(user){
        navigate(from, { replace: true });
    }
    if(loading){
        return <Loading></Loading>;
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="d-flex align-items-center mx-auto w-75 col-md-12 col-12">
                <div style={{height: '1px'}} className='bg-danger w-50'></div>
                    <p className='mt-2 px-2'>or</p>
                    <div style={{height: '1px'}} className='bg-danger w-50'></div>
                </div>
                {errorMessages}
                <div className="col-md-12 col-12 text-center mx-auto">
                    <button onClick={() => signInWithGoogle()} className='btn btn-danger text-light py-2 fs-5 w-75'>LogIn With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Social;