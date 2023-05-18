/* eslint-disable no-unused-vars */
import React from 'react';
import error from '../../assets/error.jpg'
import { Image } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className='text-center pt-5'>
            <Image className='rounded'  src={error} fluid />
        </div>
    );
};

export default NotFound;