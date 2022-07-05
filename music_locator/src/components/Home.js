import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      artist: '',
      venue: '',
      location: '',
    }
  }

  componentDidMount() {
    this.getEvents();
  }
  // Getting all of the events from the server
  getEvents = async () => {
    try{
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/events`);
      this.setState({
        events: results.data
      })
    } catch (error) {
      console.log('error: ', error.response.data)
    }
  }

  handleArtistInput = (e) => {
    this.setState({
      artist: e.target.value
    })
  }

  handleVenueInput = (e) => {
    this.setState({
      venue: e.target.value
    })
  }

  handleLocationInput = (e) => {
    this.setState({
      location: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    try{
      let url = `${process.env.REACT_APP_SERVER}/events&q=${this.state.artist}`
    } catch (error) {

    }

    

  }


  render() {
    return (
      <>
        <h2>Test Home</h2>
        <p>testing testing testing</p>
        <Form>
          <Form.Group
            className="mb-3"
            controlId="artist"
          >
            <Form.Label>By Artist</Form.Label>
            <Form.Control
              type="text"
              onInput={this.handleArtistInput}
              placeholder="Artist"
            ></Form.Control>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="location"
          >
            <Form.Label>By Location</Form.Label>
            <Form.Control
              type="text"
              onInput={this.handleLocationInput}
              placeholder="Location"
            ></Form.Control>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="venue"
          >
            <Form.Label>By Venue</Form.Label>
            <Form.Control
              type="text"
              onInput={this.handleVenueInput}
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