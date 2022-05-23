import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 text-center">
                    <Spinner animation="border" variant="primary"/>
                </div>
            </div>
        </div>
    );
};

export default Loading;