import React from 'react';
import { Button, Container, Form, FormControl, Navbar } from 'react-bootstrap';

const NavBar = () => (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    alt="logo"
                    src="https://i.ibb.co/WvPzK3t/logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Space-x-Pedia
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default NavBar;
