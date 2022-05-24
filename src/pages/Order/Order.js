import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Button from '../../components/Button/Button';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    
    useEffect( () => {
        const getOrders = async() => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            const {data} = await axios.get(url);
            setOrders(data);
        }
        getOrders();

    }, [user])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 col-12 card">
                    <div className="d-flex justify-content-between">
                        <h1>Order: {orders.length}</h1>
                        <button className='btn'> <Button>Cancel</Button> </button>
                        <button className='btn'> <Button>make Payment</Button> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;