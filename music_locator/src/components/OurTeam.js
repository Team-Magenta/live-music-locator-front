import React from 'react';
// import axios from 'axios';
import './OurTeam.css';
// import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class OurTeam extends React.Component {
  render() {
    return (
      <>
        <h1>Our Team</h1>
        <Row xs={1} sm={2} md={3} lg={5} className="cardgroup">
          
        <Col>{/* <div class="cardgroup"> */}
        <Card className="h-100">
          <Card.Img variant="top" src="./images/stephen.png" className="stephen"/>
          <Card.Body>
            <Card.Title>Stephen Martinez</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className="h-100">
          <Card.Img variant="top" src="./images/scottie.png" className="scottie"/>
          <Card.Body>
            <Card.Title>Scottie Houghton</Card.Title>
            <Card.Text>
            Since graduating from the University of Washington in 2004, Scottie Houghton has gained experience in many different roles in multiple industries of the professional world. Looking for a career pivot, Scottie decided to sign up for Code Fellows’ program with the hope of a long, successful journey into the tech world.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className="h-100">
          <Card.Img variant="top" src="https://via.placeholder.com/150"/>
          <Card.Body>
            <Card.Title>Marvin Bonds</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className="h-100">
          <Card.Img variant="top" src="./images/dennis.png" className="dennis"/>
          <Card.Body>
            <Card.Title>Dennis Devries</Card.Title>
            <Card.Text>
            Separated from the US Army after serving for four years. Previously, he studied Mechanical Engineering at Clarkson University and received his Bachelors degree. He is now pursuing a qualification in software development at Code Fellows in order to enter the technology career field.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className="h-100">
          <Card.Img variant="top" src="./images/falashade.png" />
          <Card.Body>
            <Card.Title>Falashade Greene</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        </Row>
       {/* </div> */}
      </>
    )
  }
}



export default OurTeam;
