import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logout, isLoading } = useAuth();
    console.log(user)
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div className='pb-1'>
            <Navbar fixed="top" className='text-white ' bg="info" expand="lg" >
                <Container fluid className="container " >
                    <Navbar.Brand className="text-white me-5 " href="#">Baby Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll"  >
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '150px' }}
                            navbarScroll

                        >
                            <Nav.Link as={HashLink} className="text-white me-3" to='/home#home'>Home</Nav.Link>
                            <Nav.Link className="text-white me-3" href="#action2">About </Nav.Link>
                            <Nav.Link as={HashLink} className="text-white me-3" to='/home#services'>Services</Nav.Link>
                            <Nav.Link className="text-white me-3" href="#action2">Doctors</Nav.Link>

                            <Nav.Link className="text-white me-3" href="#action2">Contact </Nav.Link>

                        </Nav >

                        {user?.email ?
                            <div className='d-flex flex-column flex-lg-row'>
                                <Nav.Link onClick={logout} className="text-white me-2" as={Link} to='/login'>Logout</Nav.Link>
                                <span className='mt-2 text-warning'>Sign in as: <span className='text-decoration-underline'>{user.displayName}</span></span>
                            </div>

                            :
                            <div>
                                <Nav.Link className="text-white me-2" as={Link} to='/login'>Login</Nav.Link>

                            </div>


                        }

                        <Nav.Link className="text-white me-2" as={Link} to='/registration'>Registration</Nav.Link>

                        <Form className="d-flex ">

                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;