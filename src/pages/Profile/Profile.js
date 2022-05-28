import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);
    const [profiles, setProfiles] = useState([]);
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        fetch('https://arcane-wave-71042.herokuapp.com/profile')
        .then(res => res.json())
        .then(data => setProfiles(data))
    }, []);

    const onSubmit = data => {
        console.log(data);
        const url = `https://arcane-wave-71042.herokuapp.com/profile`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast.success('Profile information added Successfully');
            
        })
    };
    return (
        <>
            <div className='card container  my-5'>
                <h1 className='text-2xl text-base-500'>Profile Name: <span className='text-red-400'>{user.displayName}</span> </h1>
                <h1 className='text-2xl text-base-500'>Profile Email: <span className='text-red-400'>{user.email}</span></h1>
                <div>
                    {
                        profiles.map(profile => <div key={profile._id}>
                            <h1 className='text-2xl text-base-500'>Education: <span className='text-red-400'>{profile.education}</span> </h1>
                            <h1 className='text-2xl text-base-500'>Location: <span className='text-red-400'>{profile.location}</span> </h1>
                            <h1 className='text-2xl text-base-500'>Phone: <span className='text-red-400'>{profile.education}</span> </h1>
                        </div>)
                    }
                </div>
            </div>
            <div className='card w-50 mx-auto'>
            <h1 className='text-center my-3'>Add Information</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-3 border p-2' placeholder='Education' {...register("education")} required/>
            <input className='mb-3 border p-2' placeholder='Location' {...register("location")} required/>
            <input className='mb-3 border p-2' placeholder='Phone' type="number" {...register("phone")} required/>
            <div className='d-flex'>
            <input className='btn btn-danger py-3 w-50 me-2' type="submit" value='Add Info' />
            <input className='btn btn-danger py-3 w-50 ' type="submit" value='Update Info' />
            </div>
            </form>
            </div>
        </>
    );
};

export default Profile;