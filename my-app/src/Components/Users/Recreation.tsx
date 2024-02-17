import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Users = () => {
    return (
        <InputGroup className="mb-3">
          <InputGroup.Text>Two Activities</InputGroup.Text>
          <Form.Control aria-label="Activity 1" />
          <Form.Control aria-label="Activity 2" />
        </InputGroup>
      );
}

export default Users;
