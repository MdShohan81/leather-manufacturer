import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import './Order.css';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    
    useEffect( () => {
        const getOrders = async() => {
            const url = `http://localhost:5000/order?email=${user.email}`;
            try{
                const {data} = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setOrders(data);
            }catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut();
                    navigate('/login');
                }
            }
            
            }
            getOrders();
            
    }, [user]);
    const handleDelete = id => {
        const proceed = window.confirm('are u sure do u want to delete');
        if(proceed){
            const url = `http://localhost:5000/order/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining)
            })
            
        }
    }
    return (
        <div>
            <h3>My Order: {orders.length}</h3>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>SL</th>
        <th>Name</th>
        <th>quantity</th>
        <th>emial</th>
      </tr>
    </thead>
    <tbody>
     {
         orders.map((order, index) => <tr>
            <th>{index + 1}</th>
            <td>{order.name}</td>
            <td>{order.quantity}</td>
            <td>{order.email}</td>
          </tr>)
     }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Order;