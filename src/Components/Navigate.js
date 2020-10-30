import React,{useContext} from 'react';
import {Theme} from './ThemeContext';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Button, Form, FormControl } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import ThemeButton from './ThemeButton';
//import Login from '../Pages/Login';

function Navigate() {
    const currentTheme = useContext(Theme)[0];

    return (
        <Navbar bg={currentTheme} variant={currentTheme}>
            <Nav className="mr-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/article">Article</NavLink>
                <NavLink to="/admin">Admin</NavLink>
                <NavLink to="/login">Login</NavLink>
               <ThemeButton/>
            </Nav>

            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>














    );




}
export default Navigate;