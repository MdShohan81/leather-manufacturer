import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';


const Product = ({ product }) => {
  const {_id,name,description,picture,price,minQty,availableQty} = product;

  const navigate = useNavigate();

  const navigateToProductDetail = id => {
      navigate(`/product/${id}`)
  }

    return (
        <div>
            <div className='card'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>${price}</Card.Text>
                    <div className='d-flex justify-content-between '>
                    <Card.Text>availableQty: {availableQty}</Card.Text>
                    <Card.Text>minQty: {minQty}</Card.Text>
                    </div>
                    <button  onClick={() => navigateToProductDetail(_id)}><Button>Order Now</Button></button>
                </Card.Body>
            </div>
        </div>
    );
};

export default Product;