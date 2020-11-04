import React,{useContext} from 'react';
import {Theme} from './ThemeContext';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Button, Form, FormControl } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import ThemeButton from './ThemeButton';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Style/Navigate.css';

function Navigate() {
    const currentTheme = useContext(Theme)[0];

    return (
        <Navbar bg={currentTheme} variant={currentTheme}>
            <Nav className="mr-auto" >
     <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/article">Article</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
                <br/>
                <br/>
               
            </Nav>
            <ThemeButton/>

        </Navbar>


/*
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
            */











    );




}
export default Navigate;