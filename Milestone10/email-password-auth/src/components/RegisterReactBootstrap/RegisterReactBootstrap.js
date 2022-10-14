import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.init';

const auth = getAuth(app);
const RegisterReactBootstrap = () => {

    const [passErr,setPassErr]=useState('')
    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPassErr('Please provide at least two uppercase');
            return;
        }
        if (password.length < 6) {
            setPassErr("Password must be at least 6 characters long");
            return;
        }
        if (!/(?=.*[!#$%&? "])/.test(password)) {
            setPassErr('Please add one special character');
            return;
        }
        setPassErr('');
          createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
              const user = result.user;
              console.log(user);
            })
            .catch((err) => {
              console.error("error", err);
            });
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Register using React Bootstrap</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' required/>
                </Form.Group>
                <p className='text-danger'>{ passErr}</p>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    );
};

export default RegisterReactBootstrap;