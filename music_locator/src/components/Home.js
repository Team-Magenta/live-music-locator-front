import React from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
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
  };


  handleSubmit = async (event) => {
    event.preventDefault();
    let url = `${process.env.REACT_APP_SERVER}/allEvents?location=${this.state.city}`;
    let eventsInfo = await axios.get(url);
    console.log(eventsInfo);
    this.setState({
      events: eventsInfo.data,
    });
    // let enteredCity = event.target.value;
    // this.setState({
    //   city: enteredCity,
    // });
  };

  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    });
  };
  
  // componentDidMount() {
  //   this.getEvents();
  // }

  // Getting all of the events from the server

  // getEvents = async () => {
  //   try{
  //     let results = await axios.get(`${process.env.REACT_APP_SERVER}allEvents?location=${this.state.city}`);
  //     this.setState({
  //       events: results.data
  //     })
  //   } catch (error) {
      // console.log('error: ', error.response.data)
    // }
  // }


  // handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   try{
  //     let url = (`${process.env.REACT_APP_SERVER}/allEvents?location=${this.state.city}`)
  //     let eventInfo = await axios.get(url);
  //     this.setState({
  //       events: eventInfo.data,
  //     })
  //   } catch (error) {
  //     this.setState({
  //       error: true,
  //       errorMessage: `An error occurred: ${error.reponse.status}`
  //     })
      
  //   }
  // }
  postEvents = async (event) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/events`;
      let createdEvent = await axios.post(url, event);
      this.setState({
        events: [...this.state.events, createdEvent.data]})
      } catch(error){
        console.log('we have an error: ', error.response)
      }
  }

  render() {
    // function to map through the data retrieved from the server which are stored in "events" in state
    // {event.venue} and other elements will have to match items that are in the data set that is sent from the api
    
    let events = this.state.events.map((event, idx) => {
      return <Container>
        <Card>
          <Card.Img
            variant="top"
            // style={{cursor: 'pointer'}}
            src={event.image}
            alt={event.title}
            title={event.title}
          />
          <Card.Body>
          <Card.Header>{event.venue[0].name}</Card.Header>
          <Card.Title>{event.artist}</Card.Title>
          <Card.Text>{event.date}</Card.Text>
          </Card.Body>
          <Button onClick={()=> {this.postEvents(event)}}>Add to My Events</Button>
        </Card>
      </Container>
    });
    return (
      <>
        <h2>Test Home</h2>
        <p>testing testing testing</p>
        <Form onSubmit={this.handleSubmit}>
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
            type="submit"
            variant="primary">
            Submit
          </Button>
        </Form>
        <div>
          {events}
        </div>
      </>
    )
  }
}

export default Home;