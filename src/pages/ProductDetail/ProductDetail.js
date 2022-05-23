import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
                    <h3>{product.name}</h3>
                    <h4>£{product.price}</h4>
                    <p className='ms-4'>{product.description}</p>
                    <div className='ms-4 input-group'>
                        <button onClick={decreaseQuantity} className='input-group-text btn btn-danger'>-</button>
                        <input  value={quantity} type="number" readOnly/>
                        <button onClick={increaseQuantity} className='input-group-text btn btn-danger'>+</button>
                    </div>{" "}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;