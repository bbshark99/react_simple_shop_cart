import React, {Component} from 'react'
import {Navbar, FormControl, Button, Nav, Form, Image} from 'react-bootstrap'
import logo_img from './../assets/logo.png'

export default class NavMenu extends Component {
    render(){
        return (
        <Navbar bg="secondary" variant="dark" sticky="top" expand="lg">
            <Navbar.Brand href="#home">
                <Image src={logo_img} style={{width:100}} roundedCircle="true"/>
            </Navbar.Brand>
            <Nav className="mr-auto" defaultActiveKey="#home">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
        );
    }
}