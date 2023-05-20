/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [someData, setSomeData] = useState([])
    const url = `http://localhost:5000/someToys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [url])
    return (
        <div>
            <h2>My Toys Pages</h2>
        </div>
    );
};

export default MyToys;