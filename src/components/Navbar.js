import React from 'react';
import { Button, Container, Form, FormControl, Navbar } from 'react-bootstrap';

const NavBar = () => (
    // <Container fluid>
    //     <Row>
    //         <Col md={4}>
    //             <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
    //         </Col>

    //         <Col md={{ span: 4, offset: 4 }}>
    //             <Form className="d-flex">
    //                 <FormControl
    //                     type="search"
    //                     placeholder="Search"
    //                     className="me-2"
    //                     aria-label="Search"
    //                 />
    //                 <Button variant="outline-success">Search</Button>
    //             </Form>
    //         </Col>
    //     </Row>
    // </Container>
    <Navbar bg="dark" variant="dark">
        <Container>
            {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
            {/* <img src="https://i.ibb.co/WvPzK3t/logo.png" alt="logo" />
            <h1>SpaceX Launch Missions</h1> */}
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
                {/* <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text> */}{' '}
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
