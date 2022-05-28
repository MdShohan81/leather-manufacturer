import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import UserRow from './UserRow';

const User = () => {
    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('https://arcane-wave-71042.herokuapp.com/user',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=> res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>All user {users.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th>sl</th>
        <th>Email</th>
        <th>Make Admin</th>
      </tr>
    </thead>
    <tbody>
      
     {
         users.map((user, index) => <UserRow
         key={user._id}
         user={user}
         index={index}
         refetch={refetch}
         ></UserRow>)
     }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default User;