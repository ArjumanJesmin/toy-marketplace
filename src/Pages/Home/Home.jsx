/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import CategoryTab from './CategoryTab';
import useTitle from '../../hooks/useTitle';
import Services from './Services/Services';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner/>
            <Gallery/>
            <CategoryTab/>
            <Services/>
        </div>
    );
};

export default Home;