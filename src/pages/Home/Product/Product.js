import React from 'react';
import { Card } from 'react-bootstrap';
import Button from '../../../components/Button/Button';


const Product = ({ product }) => {
  const {name,description,picture,price,minQty,availableQty} = product;

    return (
        <div>
            <div className='card'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>${price}</Card.Text>
                    <div className='d-flex justify-content-between '>
                    <Card.Text>minQty: {minQty}</Card.Text>
                    <Card.Text>availableQty: {availableQty}</Card.Text>
                    </div>
                    <Button>Order</Button>
                </Card.Body>
            </div>
        </div>
    );
};

export default Product;