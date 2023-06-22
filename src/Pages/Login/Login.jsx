/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaGooglePlus} from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../../providers/AuthProvider';
import app from '../../Firebase/firebase.config';
import Swal from 'sweetalert2';


const Login = () => {
    const auth = getAuth(app);
    const navigate = useNavigate()

    const googleProvider = new GoogleAuthProvider();

    const { signIn } = useContext(AuthContext);

    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value
        const password = form.password.value;
        console.log(email, password)

        if (password.length < 6) {
            alert(' please At least one special character!')
            return
        }

        //signIn(email, password) --
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    title: 'User LogIn Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error)
            })
    }

    // Google Sign in----
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })

            })
            .catch(error => console.log(error.message))
    }


    return (
        <Container >

            <Row>
                <Col lg={4} md={4} sm={2} className=' mx-auto  p-5  my-5  border border-warning rounded bg-light shadow'>
                    <h2 className='text-center text-success py-2'>Login </h2>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3 w-50%" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" />
                        </Form.Group>
                        <Form.Text className="text-muted">
                        </Form.Text>

                        <Button className='m-3' variant="success" type="submit">Login</Button>

                        <Button onClick={handleGoogleSignIn} variant="outline-success" className='m-2 '><FaGooglePlus /></Button>

                        <p><small> You have no account? please <Link className='text-decoration-none text-success' to='/register'>Register</Link></small></p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;