import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container } from "react-bootstrap";
import { BrowserRouter as  Link, Redirect } from "react-router-dom"

import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isUser: false
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.email === "admin@test.com" && this.state.password === "adminpass"){
        this.setState({isUser:true});
    }
    
  }

  render() {
    if (this.state.email === 'admin@test.com') {
     if (this.state.isUser) return <Redirect to='/content' />;
    }

    return (
      <div className="Login " style={{position: 'absolute', left: '50%', top: '30%',transform: 'translate(-50%, -50%)',width: '30rem'}}>
        <p className="text-center"><h2>Login</h2></p>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}