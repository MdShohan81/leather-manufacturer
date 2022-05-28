import React from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useProduct from '../../hooks/useProduct';

const ManageProduct = () => {
    const [products, setProducts] = useProduct();
    const handleDelete = id => {
        const proceed = window.confirm('are you sure');
        if(proceed){
            const url =`https://arcane-wave-71042.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
                toast('Delete Successfully')
            })
        }
    }
    return (
        <div className="container">
        <div className="row">  
            <h3 className='text-center my-5'>Our Product</h3>  
            <div className="col-md-12 col-12 product-container">
        {
            products.map(product => <div className='card' key={product._id}>
            <img src={product.picture} className='img-fluid' alt="img" />
            <div className='card-body'>
                <p>ItemName: <b>{product.name}</b></p>
                <p>Price: <b>{product.description}</b></p>
                <p>quantity: <b>{product.price}</b></p>
                <div className='d-flex justify-content-between '>
                <p>Price: <b>{product.availableQty}</b></p>
                <p>quantity: <b>{product.minQty}</b></p>
                </div>
                <Button onClick={() => handleDelete(product._id)} variant="danger">Delete</Button>
            </div>
            </div>)

        }
        
            </div>
            
        </div>
    </div>
    );
};

export default ManageProduct;