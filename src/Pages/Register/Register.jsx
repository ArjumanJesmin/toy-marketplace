/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';



const Register = () => {
    const [error,setError] =useState('')
    const [success,setSuccess] =useState('')
    const { createUser } = useContext(AuthContext);

    const location = useLocation()
    console.log(location)
    const from = location.state?.from?.pathname || '/'
   
    const handleRegister = (event) => {
        event.preventDefault();
        setError('')
        setSuccess('')
       
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password= form.password.value;

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('please add at least one uppercase')
            return
        } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError('please add at least one special characters')
            return;
        } else if (password.length < 6){
            setError('please Minimum six in length!');
            return;
        }

        createUser(email,password)
        .then(result=>{
            const createdUser = result.user
            console.log(createdUser)
            setSuccess('Register Successfully')
            Navigate(from, {replace:true})
            event.target.reset();
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
       <Container>
         <Row>
         <Col lg={6} md={4} sm={2} className=' mx-auto border border-warning p-5 rounded my-5 bg-light shadow' >
            <h2 className='text-center py-2 text-success'>Register </h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" name='name' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>image URL</Form.Label>
                    <Form.Control type="photo" placeholder="Your Photo" name='photo' required />
                </Form.Group>

                <Form.Text className="text-muted">
                   
                </Form.Text>
                <Button variant="success" type="submit">
                    Register
                </Button>
                <br/>
                
                <p><small> You have all ready register? please <Link className=' text-decoration-none text-success' to='/login'>Login</Link></small></p>
            </Form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
            <div>
                
            </div>
        </Col>
         </Row>
       </Container>
    );
};

export default Register;