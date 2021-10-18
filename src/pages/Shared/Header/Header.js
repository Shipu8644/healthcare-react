
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
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
                            <Nav.Link as={Link} className="text-white me-3" to='/home'>Home</Nav.Link>
                            <Nav.Link className="text-white me-3" href="#action2">About Us</Nav.Link>
                            <Nav.Link className="text-white me-3" href="#action2">Services</Nav.Link>
                            <Nav.Link className="text-white me-3" href="#action2">Doctors</Nav.Link>

                            <Nav.Link className="text-white me-3" href="#action2">Contact Us</Nav.Link>

                        </Nav >


                        <Nav.Link className="text-white me-2" as={Link} to='/login'>Login</Nav.Link>
                        <span className="text-warning me-2">Sign in as: Monjurur Kader Shipu</span>

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