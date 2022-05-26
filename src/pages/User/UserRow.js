import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, refetch}) => {
    const {email, role} = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then( data => {
            refetch();
            toast.success('make admin successful')
        })
    }
    return (
        <tr >
        <th>1</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-black py-2 px-4 border border-red-500 hover:border-transparent rounded">
  Make Admin
</button>}</td>
        <td><button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-black py-2 px-4 border border-red-500 hover:border-transparent rounded">
 Remove User
</button></td>
        
        </tr>
    );
};

export default UserRow;