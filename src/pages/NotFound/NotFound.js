import React from 'react';
import notfound from '../../assets/notfound.jpg'

const NotFound = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 cols-12">
                <img src={notfound} alt="img" className='img-fluid'/>
                </div>
            </div>
        </div>
    );
};

export default NotFound;