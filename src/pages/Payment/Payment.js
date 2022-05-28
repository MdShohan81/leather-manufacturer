import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L44bGHzlsWBlQ6dfljjkSkW5IJwAWEANiQ2SoVnGHCoz8ApG3StS83Z3PvURu7VkbRpb8QgdFnYHB2dlPpp2OYu00lux6vvjm');

const Payment = () => {
    const {id} = useParams();
    const url = `https://arcane-wave-71042.herokuapp.com/order/${id}`;

    const {data:  placement, isLoading} =  useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card mx-auto mt-4 w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Name: <span className='text-red-500'>{placement.name}</span> </h2>
                    <h2 class="card-title">total quantity: <span className='text-red-500'>{placement.quantity}</span> </h2>
                    <p>Please Pay bill: <span className='text-red-500'>${placement.price}</span></p>
                    
                </div>
            </div>
            <div class="card mx-auto mt-4 w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                <Elements stripe={stripePromise}>
                <CheckoutForm  placement={placement}/>
                </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;