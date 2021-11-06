import React, { useState } from 'react';
import { scroller } from "react-scroll";
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './Navbar.css';
const Navbare = () => {



    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <div className="container" style={{ overflowX: "hidden" }}>

                <div className="row">

                    <div className="col">

                        <Navbar expand="lg" style={{ backgroundColor: "white" }} >
                            <Container fluid>
                                <Navbar.Brand href="#" className="mx-5"><b>logo</b>ipsum</Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(expanded ? false : "expanded")} />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0 mx-5"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >

                                        <NavDropdown title="Hosting" id="navbarScrollingDropdown">
                                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">
                                                Something else here
                                            </NavDropdown.Item>
                                        </NavDropdown>

                                        <NavDropdown title="Domain" id="navbarScrollingDropdown">
                                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">
                                                Something else here
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link
                                            onClick={() => {
                                                scroller.scrollTo('Email', {
                                                    smooth: true,
                                                    offset: -70,
                                                    duration: 1000,
                                                });
                                                setExpanded(false)
                                            }}>Email</Nav.Link>
                                        <Nav.Link
                                            onClick={() => {
                                                scroller.scrollTo('Website Builder', {
                                                    smooth: true,
                                                    offset: -70,
                                                    duration: 1000,
                                                });
                                                setExpanded(false)
                                            }}>Website Builder</Nav.Link>

                                        <Nav.Link
                                            onClick={() => {
                                                scroller.scrollTo('Pricing', {
                                                    smooth: true,
                                                    offset: -70,
                                                    duration: 1000,
                                                });
                                                setExpanded(false)
                                            }}>
                                            Pricing
                                        </Nav.Link>
                                    </Nav>

                                    <Button className="button">Login</Button>

                                </Navbar.Collapse>
                            </Container>
                        </Navbar>

                    </div>

                </div>

            </div >

        </>
    )
}



export default Navbare;