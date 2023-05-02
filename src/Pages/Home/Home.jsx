import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Catagory from './Catagory';
import Chef from './Chef';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Catagory></Catagory>
            <Chef></Chef>
            <Services></Services>
        </>
    );
};

export default Home;