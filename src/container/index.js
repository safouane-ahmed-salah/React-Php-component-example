import  React  from "react";
import {  Link, Route } from 'react-router-dom';
import  Navbar  from "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";
import  NavDropdown   from "react-bootstrap/NavDropdown";
import {  Form, Button  } from "react-bootstrap";
import { routes, menus } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

import MetisMenu from 'react-metismenu';
import 'font-awesome/css/font-awesome.min.css';

import 'react-metismenu/dist/react-metismenu-standart.min.css';

const logo = 'http://enkuire.com/assets/images/EnkuireLogo.png';
export function MainHolder(){
    return <div className="content">
                <Main />
                <footer class="footer">
                                        © Copyright 2020. All right reserved
            </footer>
            </div>
}
export function SideBar(){
    return <div className="sidebar">
        <div className="logo">
            {/* <Link to="/"><img src={logo} /></Link> */}
        </div>

        <MetisMenu content={menus} activeLinkFromLocation />,
    
    </div>
}
export function AppBar(){
    return (<div className="appbar">
        <div className="appbar-left">
        <header theme='light' className='header'>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><img width="120" src= {logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Form.Group className='mb-0 ml-4'>
            <Form.Control as="select" size="md">
                <option>IT Team</option>
            </Form.Control>
            </Form.Group>
            </Nav>
            <NavDropdown title="F" className='header--dropdown' menuAlign="right" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Farhat</NavDropdown.Item>
            <NavDropdown.Item href="#">Farhatbaig77@gmail.com</NavDropdown.Item>
            <NavDropdown.Item href="#"><Button type='primary' size='sm'> 
            <Link to='/profile'> View Profile </Link>
            </Button></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
        </NavDropdown>
        </Navbar.Collapse>
        </Navbar>
        </header>
        </div>
      
    </div>)
}


function Main(){
    // const routes = [
    //     {path: '/', exact:true, component: Dashboard  },
    //     {path: '/enquiry-dashBoard', exact:true, component: EnquiryDashBoard  },
    //     {path: '/campaign', exact:true, component: Campaign  },
    // ];
    return (<div className="main">
        {routes.map(function (v, i) {
                return <Route {...v} />;
            } )}
    </div>)
}