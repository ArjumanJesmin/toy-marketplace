/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import CategoryTab from './CategoryTab';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner/>
            <Gallery/>
            <CategoryTab/>
        </div>
    );
};

export default Home;