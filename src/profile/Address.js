import React from 'react'
import Form from 'react-bootstrap/Form';


const Address = () => {
  return (
    <div className='form-2'>
         
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
    </div>
  )
}

export default Address
