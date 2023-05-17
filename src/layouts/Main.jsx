/* eslint-disable no-unused-vars */
import React from 'react';
import Home from '../Pages/Home/Home';
import NavigationBar from '../Shared/NavigationBar';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <NavigationBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;