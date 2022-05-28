import React from 'react';
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className='container-fluid portfolio-container pt-8 bg-slate-800'>
            <div className="row">
                <h1 className='text-white text-center'>My Portfolio</h1>
                <div className="col-12 col-md-6">
                <div className=' py-14 px-8'>
                    <p className='text-white'>Name: <span className='text-red-500 text-xl'>MD: SHOHAN</span></p>
                    <p className='text-white'>Email: <span className='text-red-500 text-xl'>mdshohan6563@gmail.com</span></p>
                    <p className='text-white'>Location: <span className='text-red-500 text-xl'>Dhaka Mohammadpur</span></p>
                    <p className='text-white'>Education: <span className='text-red-500 text-xl'>Mohammadpur Central university</span></p>
                </div>
                </div>
                <div className="col-12 col-md-6">
                <div className=' py-14 px-8 text-white'>
                    <h4>Web Design: <span className='text-red-500 text-xl'><progress class="progress progress-success w-80" value="70" max="100"></progress></span></h4>
                    <h4>React Js: <span className='text-red-500 text-xl'><progress class="progress progress-success w-80" value="80" max="100"></progress></span></h4>
                    <h4>MongoDB: <span className='text-red-500 text-xl'><progress class="progress progress-success w-80" value="80" max="100"></progress></span></h4>
                    <h4>CSS: <span className='text-red-500 text-xl'><progress class="progress progress-success w-80" value="95" max="100"></progress></span></h4>
                    <h4>Bootstrap 5: <span className='text-red-500 text-xl'><progress class="progress progress-success w-80" value="95" max="100"></progress></span></h4>
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;