import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      city: '',
      error: false,
      errorMessage: '',
    }
  }

  // componentDidMount() {
  //   this.getEvents();
  // }
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

  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();
    try{
      let url = (`${process.env.REACT_APP_SERVER}/events?city=${this.state.city}`)
      let eventInfo = await axios.get(url);
      this.setState({
        events: eventInfo.data,
      })
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `An error occurred: ${error.reponse.status}`
      })
      
    }
  }


  render() {
    // function to map through the data retrieved from the server which are stored in "events" in state
    // {event.venue} and other elements will have to match items that are in the data set that is sent from the api
    
    // let events = this.state.events.data.map((event, idx) => {
    //   return <Card>
    //     <Card.Body>
    //       <Card.Header>{event.venue}</Card.Header>
    //       <Card.Title>{event.artist}</Card.Title>
    //       <Card.Text>{event.location}</Card.Text>
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
            controlId="location"
          >
            <Form.Label>By City</Form.Label>
            <Form.Control
              type="text"
              onInput={this.handleCityInput}
              placeholder="City"
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