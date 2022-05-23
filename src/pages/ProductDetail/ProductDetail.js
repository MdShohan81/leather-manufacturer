import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './ProductDetail.css'

const ProductDetail = () => {
    const {productId} = useParams();
    const [ product, setProduct ] = useState({});
    

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
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6 col-12">
                    <img src={product.picture} alt="img" className='details-img rounded'/>
                </div>
                <div className="col-md-6 card info-container">
                    <p className='ms-4 mt-5'>id: {product._id}</p>
                    <h3>{product.name}</h3>
                    <h4>$ {product.price}</h4>
                    <div className='ms-4'>
                     <span className='fs-5 text-danger'>Description: </span>   
                        <p>{product.description}</p>
                    </div>
                    <div className='ps-3 input-group'>
                        <button onClick={decreaseQuantity} className='input-group-text btn btn-danger'>-</button>
                        <input  value={quantity} type="number" readOnly/>
                        <button onClick={increaseQuantity} className='input-group-text btn btn-danger'>+</button>
                    </div>
                    <div className='mt-3'>
                        <button className='btn'><Button>Proceed CheckOut</Button> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;