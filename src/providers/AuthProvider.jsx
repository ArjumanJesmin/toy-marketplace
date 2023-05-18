/* eslint-disable no-unused-vars */
import React from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
const AuthProvider = () => {
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;