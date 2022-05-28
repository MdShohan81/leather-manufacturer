import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/review`;
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
            toast.success('Review added Successfully');
            
        })
    };
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center my-3'>Add Review</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            
            <input className='mb-3 border p-2' placeholder='Name' {...register("name")} />
            <input className='mb-3 border p-2' placeholder='Photo Url' type='url' {...register("picture")} />
            <input className='mb-3 border p-2' placeholder='Description' {...register("description")} />
            <input className='mb-3 border p-2' placeholder='Ratings' type="number" {...register("ratings")} />
            <input className='btn btn-danger py-3 w-50 mx-auto' type="submit" value='Add Review' />
            </form>
        </div>
    );
};

export default MyReview;