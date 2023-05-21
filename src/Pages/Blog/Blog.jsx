/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import useTitle from '../../hooks/useTitle';
import { Container, Row } from 'react-bootstrap';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Blog = () => {
     useEffect(()=>{
        AOS.init({duration:2000});
     },[]);
    useTitle('Blog')
    return (
        <Container>
            <Row>
                <div className='text-center bg-light border border-warning p-4 rounded shadow m-4' data-aos="fade-up">
                    <h4>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                    <br />
                    <p><strong>Access Token:</strong> An access token is a credential that is issued by an authentication server after a user successfully authenticates and authorizes an application. It represents the user is authorization to access specific resources or perform certain actions. Access tokens are typically short-lived and have an expiration time. They are used to authenticate requests to protected APIs or services by including them in the authorization header or as a parameter in API requests.</p>
                    <br />
                    <p><strong>Refresh Token:</strong>  A refresh token is also issued by the authentication server alongside the access token. It has a longer expiration time compared to the access token. The refresh token is used to obtain a new access token when the current one expires, without requiring the user to re-authenticate. Refresh tokens are securely stored on the client-side and sent to the authentication server to get a new access token when needed.</p>
                </div>

                <div className='text-center bg-light border border-primary p-4 rounded shadow m-4' data-aos="fade-up">
                    <h4>Compare SQL and NoSQL databases?</h4>
                    <br />
                    <div className='d-flex'>
                        <div className='border p-3'>
                            <h5 className='text-center text-primary'>SQL:</h5>
                            <hr />
                            <p>SQL databases are based on the relational model and use tables with predefined schemas, where data is organized into rows and columns. They enforce a rigid structure with relationships between tables through primary and foreign keys.</p>
                            <hr />
                            <p>SQL databases require a predefined schema, which specifies the structure and data types of the tables. Changes to the schema often require modifications to the existing data, and strict consistency is enforced.</p>
                        </div>

                        <div className='border p-3'>
                            <h5 className='text-center text-primary'>NoSQL:</h5>
                            <hr />
                            <p>NoSQL databases have a flexible data model that allows for storing unstructured, semi-structured, or structured data. They typically use document, key-value, columnar, or graph data models, which can adapt to evolving data requirements.</p>
                            <hr />
                            <p>NoSQL databases are schema-less or have flexible schemas. They allow for dynamic and ad-hoc changes to the data structure without affecting existing data, offering greater flexibility and agility..</p>
                        </div>
                    </div>
                </div>

                <div className='text-center bg-light border border-secondary p-4 rounded shadow m-4' data-aos="fade-up">
                    <h4> What is express js? What is Nest JS</h4>
                    <br />
                    <div className='d-flex'>
                        <div className='border p-3'>
                            <h5 className='text-center text-primary'>Express.js:</h5>
                            <hr />
                            <p>Express.js is a minimalist and flexible web application framework for Node.js. It provides a simple and unopinionated way to build web applications and APIs. It offers a set of basic functionalities for handling routing, middleware, and request/response handling.</p>
                            <hr />
                            <p>Express.js focuses on being lightweight, allowing developers to have fine-grained control over the application structure and middleware stack. It provides a straightforward and intuitive API for handling HTTP requests and responses.</p>
                        </div>

                        <div className='border p-3'>
                            <h5 className='text-center text-primary'>Nest.js:</h5>
                            <hr />
                            <p>Nest.js is a progressive and opinionated web application framework for Node.js. It is built with a modular and scalable architecture inspired by Angular, leveraging TypeScript for static typing and enhanced developer experience.</p>
                            <hr />
                            <p>Nest.js provides a higher-level abstraction compared to Express.js, incorporating concepts from object-oriented programming, functional programming, and reactive programming. It promotes the use of decorators, dependency injection, and modules for building scalable and maintainable applications.</p>
                        </div>
                    </div>
                </div>
                <div className='text-center bg-light border border-danger p-4 rounded shadow m-4' data-aos="fade-up">
                    <h4>What is MongoDB aggregate and how does it work?</h4>
                    <br />
                    <p>In MongoDB, the aggregate function is used to perform advanced data processing and analysis on collections. It allows you to execute a pipeline of operations that transform, filter, and aggregate data in a flexible and powerful way.</p>
                    <br />
                    <p>The aggregate function takes an array of stages as input. Each stage represents a specific operation in the data processing pipeline. The stages are applied sequentially, with the output of one stage.</p>
                </div>
            </Row>

        </Container>
    );
};

export default Blog;