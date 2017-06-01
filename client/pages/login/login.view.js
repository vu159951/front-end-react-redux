import React from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'

export const LoginView = () => {
  return (
    <div className="col-md-3 col-md-offset-4 container">
      <h2 className="text-center">Login to Your Account</h2>
      <Form className='formLogin'>
          <FormGroup controlId="formHorizontalEmail">
            <FormControl type="email" placeholder="Email"/>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
            <FormControl type="password" placeholder="Password"/>
          </FormGroup>
          <FormGroup className="text-center">
            <Button bsStyle="primary" bsSize="large" block type="submit">
              Login
            </Button>
          </FormGroup>
      </Form>
    </div>
  )
  }
