/* eslint-disable no-unused-vars */
import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <h2>This is Blog Page</h2>
        </div>
    );
};

export default Blog;