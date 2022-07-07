import React from 'react';
import axios from 'axios';
import { Card, Button, Carousel, Image } from 'react-bootstrap';
import './MyEvents.css';

class MyEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myEvents: [],
      updatedEvent: []
    }
    console.log(this.state.myEvents)
  }
  getEvents = async () => {
    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/events`);
      console.log(results.data)
      this.setState({
        myEvents: results.data
      })
      console.log(this.state.myEvents);
    } catch (error) {
      console.log('we have an error: ', error.response.data)
    }
  }
  async deleteEvent(id) {

    try {
      let url = `${process.env.REACT_APP_SERVER}/events/${id}`;
      await axios.delete(url);
      let updatedEvents = this.state.myEvents.filter(event => event._id !== id);
      this.setState({
        myevents: updatedEvents,
      })
      this.getEvents();
    } catch (err) {
      console.log(err, 'Error');
    }
  }
  componentDidMount() {
    this.getEvents();
  }

  // handleUpdate = async (event) => {
  //   try {
  //     let url = `${process.env.REACT_APP_SERVER}/events/${id}`;
  //     let updatedEvent = await axios.put(url, event);

  //   } catch(error) {
  //     console.log('we have an error: ', error.response.data);
  //   }
  // }

  handleUpdate = async eventToUpdate => {
    try {

      const updatedEvents = this.state.myEvents.map(event => {
        if (event._id === eventToUpdate._id) {
         event.attended = true
          return eventToUpdate;
        } else {
          return event;
        }
      });

      this.setState({
        myEvents: updatedEvents
      })
      await axios.put(`${process.env.REACT_APP_SERVER}/events/${eventToUpdate._id}`, eventToUpdate);
    } catch (error) {
      console.error(error);
    }
  }
  

  // render() {

    
//     return (
//       <>
//         <h2>Test Search</h2>


//         <Button
//           onClick={() => this.deleteBook(this.state.myevents._id)} variant="danger">
//           Delete
//         </Button>
//       </>
//     )
//   }
// }

render() {

  /* TODO: render all the books in a Carousel */
  let events = this.state.myEvents.map((event, idx) => {
    return (

      <Carousel.Item key={idx}>
        <img
          className="d-block w-100"
          src={event.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{event.artist}</h3>
          <p>{event.Image}</p>
          <Button 
          onClick={() => this.deleteEvent(event._id)} variant="danger">
          Delete
        </Button>
        <Button 
                variant="primary" 
                onClick={() => this.handleUpdate(event)}
              >
                Did I Attended
              </Button>
        </Carousel.Caption>
      </Carousel.Item>
      
    )
  })

  return (
    <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
      {this.state.myEvents.length ? (
        <Carousel>
          {events}
        </Carousel>
      ) : (
        <h3>No Books Found :(</h3>
      )}

    </>
  )
}
}

// componentDidMount() {
//   this.getBooks(); delete and update methods, 
// }

//give events checkmarks to
// listen to onchange 
export default MyEvents;