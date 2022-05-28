import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Summary from '../Summary/Summary';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Review></Review>
            <About></About>
            <Summary></Summary>
        </div>
    );
};

export default Home;