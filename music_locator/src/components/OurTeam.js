import React from 'react';
// import axios from 'axios';
import './OurTeam.css';
// import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'



class OurTeam extends React.Component {
  render() {
    return (
      <>
        <h1>Our Team</h1>
        <div class="cardgroup">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./images/stephen.png" class="stephen"/>
          <Card.Body>
            <Card.Title>Stephan Martinez</Card.Title>
            <Card.Text >
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./images/scottie.jpeg" />
          <Card.Body>
            <Card.Title>Scottie Houghton</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150"/>
          <Card.Body>
            <Card.Title>Marvin Bonds</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Dennis Devries</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Falashade Greene</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
       </div>
      </>
    )
  }
}



export default OurTeam;
