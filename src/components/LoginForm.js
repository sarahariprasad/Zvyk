import React, {useState} from 'react';

import RegistrationForm from './RegistrationForm';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Dnd from './Dnd';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isAuthenticated = () => {
    if (typeof window == undefined) {
      return false;
    }
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    } else {
      return false;
    }
  };  
  
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  
 
  

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
        <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmit}
          >
                    Login
        </button>         
      </Form>
    </div>
    </div>
  );
}