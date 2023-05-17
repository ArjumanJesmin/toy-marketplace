/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to="/">Beauty of Baby Dolls</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto  gap-4 ">
                        <Link className='text-decoration-none text-white' to='/'>Home</Link>
                        <Link className='text-decoration-none text-white' to='/allToys'>All Toys</Link>
                        <Link className='text-decoration-none text-white' to='/myToys'>My Toys</Link>
                        <Link className='text-decoration-none text-white' to='/addAToys'>Add A Toys</Link>
                        <Link className='text-decoration-none text-white' to='/blog'>Blog</Link>
                    </Nav>
                    <Nav>
                        <Link className='text-decoration-none text-white' to='/login'>Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavigationBar;