import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import './Order.css';
import { toast } from 'react-toastify';

const Order = ({_id}) => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    


    useEffect(() => {
        if(user){
            fetch(`https://arcane-wave-71042.herokuapp.com/order?email=${user.email}`,{
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/');
            }
            return res.json()
        })
        .then(data => setOrders(data));
        }
    }, [user])



   
    const handleDelete = id => {
        const proceed = window.confirm('are u sure do u want to delete');
        if(proceed){
            const url = `https://arcane-wave-71042.herokuapp.com/order/${id}`
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data){
                    console.log(data);
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
                toast.success('order cancel successfull');

                }
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
        <th>email</th>
        <th>Cancel</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
     {
         orders.map((order, index) => <tr key={order.id}>
            <th>{index + 1}</th>
            <td>{order.name}</td>
            <td>{order.quantity}</td>
            <td>{order.email}</td>
            <td><button onClick={() => handleDelete(order._id)}><Button>Cancel</Button></button></td>
            <td>
                {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><Button>pay</Button></Link>}
                {(order.price && order.paid) && <span className='text-green-500'>paid</span>}
            </td>
          </tr>)
     }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Order;