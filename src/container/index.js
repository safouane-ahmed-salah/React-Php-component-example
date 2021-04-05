import  React  from "react";
import { NavLink, Route } from 'react-router-dom';
import  Navbar  from "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";
import  NavDropdown   from "react-bootstrap/NavDropdown";
import FormControl  from "react-bootstrap/FormControl";
import { Container , Row , Col , Card, Button, Form  } from "react-bootstrap";
import { routes, menus } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dashboard } from "./views";
import { EnquiryDashBoard } from "./views/EnquiryDashboard";

const logo = 'http://enkuire.com/assets/images/EnkuireLogo.png';
export function MainHolder(){
    return <div className="content">
       
        <Main />

</div>
}
export function SideBar(){
    return <div className="sidebar">
        <div className="logo">
            {/* <Link to="/"><img src={logo} /></Link> */}
        </div>
        <ul className="nav-list">
            {menus.map((v,i) => <li key={i}>
                <NavLink exact={v.path=='/'} activeClassName='active' to={v.path}>
                    <img src={v.icon} />
                    {v.name}
                </NavLink>
                
            </li> )}
        </ul>
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
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        </Navbar.Collapse>
        </Navbar>
        </header>
        </div>
      
    </div>)
}


function Main(){
    const routes = [
        {path: '/', exact:true, component: Dashboard  },
        {path: '/enquiry-dashBoard', exact:true, component: EnquiryDashBoard  },
    ];
    return (<div className="main">
        {routes.map(function (v, i) {
                return <Route {...v} />;
            } )}
    </div>)
}