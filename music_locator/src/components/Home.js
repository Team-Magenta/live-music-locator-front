import React from 'react';
import { Form, Button } from 'react-bootstrap';
// import axios from 'axios';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <>
        <h2>Test Home</h2>
        <p>testing testing testing</p>
        <Form>
          <Form.Group>
            <Form.Label>By Artist</Form.Label>
            <Form.Control
            type="text"
            placeholder="Artist"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>By Location</Form.Label>
            <Form.Control
            type="text"
            placeholder="Location"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>By Venue</Form.Label>
            <Form.Control
            type="text"
            placeholder="Venue"
            ></Form.Control>
          </Form.Group>
          <Button
          variant="primary"
          type="submit">
            Submit
          </Button>
        </Form>
      </>
    )
  }
}

export default Home;