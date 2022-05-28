import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Tools.css';

const Tools = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://arcane-wave-71042.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div className='container my-5'>
            <h1 className='text-center my-5'>Our <span className='title-color'>product</span></h1>
            <div className='product-container'>
                {
                    products.map(product=> <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Tools;