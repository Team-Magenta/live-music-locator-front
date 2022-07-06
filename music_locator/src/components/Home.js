import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
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
      error: false,
      errorMessage: '',
    }
  }

  componentDidMount() {
    this.getEvents();
  }
  // Getting all of the events from the server
  // getEvents = async () => {
  //   try{
  //     let results = await axios.get(`${process.env.REACT_APP_SERVER}/events&q=${this.state.artist}|${this.state.venue}|${this.state.location}`);
  //     this.setState({
  //       events: results.data
  //     })
  //   } catch (error) {
  //     console.log('error: ', error.response.data)
  //   }
  // }

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

  handleFormSubmit = async (e) => {
    e.preventDefault();
    try{
      let url = (`${process.env.REACT_APP_SERVER}/events&q=${this.state.artist}|${this.state.venue}|${this.state.location}`)
      let eventInfo = await axios.get(url);
      this.setState({
        events: eventInfo.data[0],
      })
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `An error occurred: ${error.reponse.status}`
      })
      
    }
  }


  render() {
    // let events = this.state.events.data.map((event, idx) => {
    //   return <Card>
    //     <Card.Body>
    //       <Card.Header>{this.state.venue}</Card.Header>
    //       <Card.Title>{this.state.artist}</Card.Title>
    //       <Card.Text>{this.state.datetime}</Card.Text>
    //     </Card.Body>
    //   </Card>
    // })
    return (
      <>
        <h2>Test Home</h2>
        <p>testing testing testing</p>
        <Form onSubmit={this.handleFormSubmit}>
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
              onInput={this.handleVenueInput  }
              placeholder="Venue"
            ></Form.Control>
          </Form.Group>
          <Button
          variant="primary"
          type="submit">
            Submit
          </Button>
        </Form>
        {/* <div>
          {events}
        </div> */}
      </>
    )
  }
}

export default Home;