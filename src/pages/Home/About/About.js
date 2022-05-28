import React from 'react';
import about from '../../../assets/about.png'
const About = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-5'>About<span className='title-color'>Us</span></h1>
            <div className="row">
                <div className="col-md-6">
                    <img src={about} alt="" />
                </div>
                <div className="col-md-6">
                    <h3 className='sm:text-center my-4'>How we do it</h3>
                    <p className=' text-xl'>Textile engages and catalyzes the textile industry across the supply chain through partnerships and collaborations, building knowledge and capacity to inform and educate. We further leverage our influence to create action, change and collective impact.</p>
                    <p className='text-xl'>Textile inspires and equips people to accelerate sustainable practices in the textile value chain. We focus on minimizing the harmful impacts of the global textile industry and maximizing its positive effects.</p>
                </div>
            </div>
        </div>
    );
};

export default About;