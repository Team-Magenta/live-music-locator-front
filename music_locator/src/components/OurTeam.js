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
              I have a history of working in the security industry. I was inspired to get into technology by a family friend. I believe my drive and work ethic will set me in the right direction to becoming a successful software developer
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
          <Card.Img variant="top" src="./images/falashade.png"/>
          <Card.Body>
            <Card.Title>Falashade Greene</Card.Title>
            <Card.Text>
            Software Developer student at Code Fellows.  I have a background in Fashion Design. However as my love for tech grew I figured why not bridge the gap between design and tech and make it my career. I’m very passionate about technology and can bring a great deal of value to the technology space.
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
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Marvin Bonds</Card.Title>
            <Card.Text>
            Currently a student at Code Fellows. As the global environment continues to shift, he hopes to be an active participant of that technological advancement, with an overall focus on full stack. The idea is to eventually provide the client a unique, all inclusive experience.
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
