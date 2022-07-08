import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import './Home.css';
import { format, parseISO } from 'date-fns'


let SERVER = process.env.REACT_APP_SERVER;


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
    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        // console.log(jwt);

        const config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: `./allEvents?location=${this.state.city}`,
          headers: {'Authorization': `Bearer ${jwt}`}
        }
        console.log('config: ', config)
        const eventsInfo = await axios(config)

        
        // let url = `${process.env.REACT_APP_SERVER}/allEvents?location=${this.state.city}`;
        // let eventsInfo = await axios.get(url);
        
        this.setState({
          events: eventsInfo.data,
        });
        // let enteredCity = event.target.value;
        // this.setState({
        //   city: enteredCity,
        // });

      }

    } catch (error) {
      console.log(error.message);
    }

  };

  handleEventSubmit = (event) => {
    let newEvent = {
      image: event.image,
      venue: event.venue[0].name,
      artist: event.artist,
      date: event.date,
    }
    console.log(newEvent)
    this.postEvents(newEvent)
  }


  postEvents = async (newEventObj) => {
    try {
      let url = `${SERVER}/events`;

      let createEvent = await axios.post(url, newEventObj);
      this.setState({
        events: [...this.state.events, createEvent.data]
      });
    } catch (error) {
      console.log('error: ', error.response.data)
    }
  }


  handleCityInput = (event) => {

    this.setState({
      city: event.target.value
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
        events: [...this.state.events, createdEvent.data]
      })
    } catch (error) {
      console.log('we have an error: ', error.response)
    }
  }

  render() {
    // function to map through the data retrieved from the server which are stored in "events" in state
    // {event.venue} and other elements will have to match items that are in the data set that is sent from the api

    let events = this.state.events.map((event, idx) => {

      return (

        // <Container className='mt-4'>
        <Card className="card-container" key={idx} style={{ width: '18rem', margin: 25 }}>
          <Card.Img
            className="card-image"
            variant="top"
            src={event.image}
            alt={event.title}
            title={event.title} />
          <Card.Body>
            <Card.Title>{event.venue[0].name}</Card.Title>
            <Card.Text className="mb-2 pt-2 h-100">
              {event.artist}
            </Card.Text>
            <Card.Text>
              {format(parseISO(event.date), 'PPPP')}
            </Card.Text>

            <Button onClick={() => this.handleEventSubmit(event)}variant="light">Add to My Events</Button>

          </Card.Body>
        </Card>
        // </Container>
      )
      // return <div class="card-div">
      //   <Container className='mt-4'>
      //     <Card style={{ width: '18rem' }} className="h-100 p-3 card-container">
      //       <Card.Img
      //         className="card-image"
      //         variant="top"
      //         // style={{cursor: 'pointer'}}
      //         src={event.image}
      //         alt={event.title}
      //         title={event.title}
      //       />
      //       <Card.Body>
      //         <Card.Header>{event.venue[0].name}</Card.Header>
      //         <Card.Title>{event.artist}</Card.Title>
      //         <Card.Text>{event.date}</Card.Text>
      //       </Card.Body>
      //       <Button onClick={() => this.handleEventSubmit(event)}>Add to My Events</Button>
      //     </Card>
      //   </Container>
      // </div>
    });
    return (

      <>
      {this.props.auth0.isAuthenticated ? (

      <div className="d-flex h-100">


        <div className="form-div">
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
        </div>
        <div className="background">
          {events}
        </div>
      </div>

      ): <h2>Please Login</h2>}
      </>

    )
  }
}

export default withAuth0(Home);