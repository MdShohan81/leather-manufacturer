import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);


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
        
      </tr>
    </thead>
    <tbody>
     {
         orders.map((order, index) => <tr key={order.id}>
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

export default ManageOrder;