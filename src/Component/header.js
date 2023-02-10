import React, { Component } from "react";
import { Button, Container, Form, FormControl, Nav, Navbar, NavLink } from "react-bootstrap";
import logo from './logo192.png'
import { 
    BrowserRouter as Router, 
    Route, 
    Routes,
    Link
 } from "react-router-dom";

import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'




export default class Header extends Component {

    render() {
        return (
            <>
            <Router>
            <Navbar  collarseonselect='true' expand='md' bg='dark' variant='dark'>
                <Container >
                    <Navbar.Brand href='/' > 
                        <img
                            src={logo}
                            height='50'
                            width='50'
                            className='d-inline-block aligh-top'
                            alt='logo' 
                        /> 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink as={Link} to ="/">Главная</NavLink>
                            <NavLink as={Link} to="/about">О нас</NavLink>
                            <NavLink as={Link} to="/contacts">Связаться с нами</NavLink>
                        </Nav>

                        <Form inline='true' >
                                <FormControl
                                type="text"
                                placeholder="Search"
                                className="me-sm-2" />
                                <Button className="mt-1" variant="secondary">Search</Button>
                        </Form>

                        </Navbar.Collapse>
                </Container>
            </Navbar>
                 <Routes>
                     <Route  path="/" element={<Home/>} />
                     <Route  path="/about" element={<About/>} />
                     <Route  path="/contacts" element={<Contacts/>} />
                </Routes>
            </Router>
            </>
        )

    }
}