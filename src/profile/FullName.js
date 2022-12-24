import React from 'react'
import Form from 'react-bootstrap/Form';

const FullName = () => {
  return (
    <div className='form-1'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>FullName</Form.Label>
    <Form.Control type="email" placeholder="fullName" />
    <Form.Text className="text-muted">
  
    </Form.Text>
  </Form.Group>
  </div>
  )
}

export default FullName
