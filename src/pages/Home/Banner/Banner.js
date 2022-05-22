import React from 'react';
import Button from '../../../components/Button/Button';

import './Banner.css'

const Banner = () => {
    return (
        <div className='bg-img'>
            <div className='img-overlay'>
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 ">
                        <h1 className='text-white'>Looking for a US 
                            <span className='d-block'>
                            Leather Manufacturer?
                            </span>
                        </h1>
                        <h4 className=' text-white'>
                            From startups to global brands, we supply
                            <span className='d-block'>
                                the world’s best leather goods.
                            </span>
                        </h4>
                        <div className='banner-btn'>
                            <span className='me-5'><Button>In Details</Button></span>
                            <Button >Contact Us</Button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;