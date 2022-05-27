import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './ProductDetail.module.css'
import { toast } from 'react-toastify';

const ProductDetail = () => {
    const {productId} = useParams();
    const [ product, setProduct ] = useState({});
    const [ user ] = useAuthState(auth)
    

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);

    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = () => {
        if(product.availableQty <= quantity) return;
        const qty = quantity + 1;
        setQuantity(qty);
    }
    const decreaseQuantity = () => {
        if(product.minQty >= quantity) return;
        const qty = quantity - 1;
        setQuantity(qty);
    }

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            name: user.displayName,
            email: user.email,
            productId: productId,
            quantity: event.target.quantity.value,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        fetch('http://localhost:5000/order',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast('your order placed successfully');
            event.target.reset();
            
        })
        
      
    }
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6 col-12">
                    <img src={product.picture} alt="img" className='details-img rounded'/>
                </div>
                <div className="col-md-6 card info-container">
                    <h3>{product.name}</h3>
                    <h4>$ {product.price}</h4>
                    <div className='ms-4'>
                     <span className='fs-5 text-danger'>Description: </span>   
                        <p>{product.description}</p>
                    </div>
                    
                   <form onSubmit={handlePlaceOrder}>
                   <div className='ps-3 input-group qty'>
                        <span onClick={decreaseQuantity} className='input-group-text btn btn-danger'>-</span>
                        <input  value={quantity} name='quantity' type="number" readOnly/>
                        <span onClick={increaseQuantity} className='input-group-text btn btn-danger'>+</span>
                    </div>
                    <div className='input-group my-3'>
                    <Form.Control className='text-start' value={user?.displayName} type="text" name='displayName' disabled />
                    </div>
                    <div className='input-group mb-2'>
                    <Form.Control className='text-start' value={user?.email} type="email" name='email' disabled/>
                    </div>
                    <div className='input-group mb-2'>
                    <Form.Control className='text-start' type="text" name='address' placeholder="Enter address"  required/>
                    </div>
                    <div className='input-group mb-2'>
                    <Form.Control className='text-start' name='phone' type="text" placeholder="Phone number" required/>
                    </div>
                    <div className='mt-2'>
                        <button className='btn' type='submit'><Button>Place order</Button> </button>
                    </div>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;