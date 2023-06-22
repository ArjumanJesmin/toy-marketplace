/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaUserCog } from 'react-icons/fa';

const NavigationBar = () => {
    const [hovering, setHovering] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error.message))
    }

    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none',
            color: isActive ? 'yellow' : 'white'
        }
    }

    const handleMouseEnter = () => {
        setHovering(true);
      };

      const handleMouseLeave = () => {
        setHovering(false);
      };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to="/">Beauty of Dolls</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto  gap-4 ">
                        <NavLink style={navLinkStyle} to='/'>Home</NavLink>
                        <NavLink style={navLinkStyle} to='/allToys'>All Toys</NavLink>
                        {/* <NavLink style={navLinkStyle}  to='/myToys'>My Toys</NavLink> */}
                        <NavLink style={navLinkStyle} to='/addAToys'>Add A Toys</NavLink>
                        <NavLink style={navLinkStyle} to='/blog'>Blog</NavLink>
                    </Nav>

                    <Nav> {user?.email ?
                        <>
                            <Link className='text-decoration-none text-white px-2' onClick={handleLogOut}> LogOut</Link>
                            <NavLink style={navLinkStyle} to='/myToys' > MyToys</NavLink>

                            <NavLink to='/' className={hovering ? "user-hover" : ""}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}> <FaUserCog style={{ fontSize: '2rem',color:'white', marginLeft:'10px' }} />  {user.displayName}</NavLink>

                        </>
                        :
                        <Link className='text-decoration-none text-white px-2' to='/login'>Login</Link>
                    }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavigationBar;