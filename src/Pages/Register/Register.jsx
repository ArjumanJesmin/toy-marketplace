/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    useTitle('register')
    return (
        <Container>
            <Row>
                <Col className='mx-auto my-4 border p-5 rounded shadow' md={6}>
                    <h2>Register </h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupImage">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control type="photo" name='image' placeholder="Image URL" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupSubmit">
                            <Form.Label>Submit</Form.Label>
                            <Form.Control type="Submit"  />
                        </Form.Group>
                        <Button><FaGoogle/></Button>
                    </Form>
                    <p> <small> <Link className='text-decoration-none text-danger' to='/login'>Login</Link></small></p>
                </Col>
            </Row>


        </Container>
    );
};

export default Register;