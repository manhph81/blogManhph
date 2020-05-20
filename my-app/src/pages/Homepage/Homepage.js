import React, { Component } from 'react';
import Carousel from '../../components/Carousel/carousel';
import './Homepage.css';
import { Container, Row, Col, Jumbotron, Button, Progress } from 'reactstrap';


class HomePage extends Component{
    render(){
        return (
          <>
            <Container className="themed-container">
              <Carousel></Carousel>
            </Container>
            <Container className="themed-container" fluid="sm">
              <Row>
                <Col xs="6" sm="4">
                <Jumbotron>
                  <h1 className="display-3">Hello, world!</h1>
                  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                  <p className="lead">
                    <Button color="primary">Learn More</Button>
                  </p>
                </Jumbotron>
                </Col>
                <Col xs="6" sm="4">
                  <Jumbotron>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                      <Button color="primary">Learn More</Button>
                    </p>
                  </Jumbotron>
                </Col>
                <Col sm="4">
                  <Jumbotron>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                      <Button color="primary">Learn More</Button>
                    </p>
                  </Jumbotron>
                </Col>
              </Row>
            </Container>
            <Container className="themed-container" fluid="md">
              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>
                  <Jumbotron>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                      <Button color="primary">Learn More</Button>
                    </p>
                  </Jumbotron>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <Jumbotron>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                      <Button color="primary">Learn More</Button>
                    </p>
                  </Jumbotron>
                </Col>
              </Row>
            </Container>
            <Container className="themed-container" fluid="sm">
              <div className="text-center">25%</div>
              <Progress value="25">Java</Progress>
              <div className="text-center">50%</div>
              <Progress value={50}>ReactJS</Progress>
              <div className="text-center">75%</div>
              <Progress value={75}>HTML</Progress>
              <div className="text-center">100%</div>
              <Progress color="success" value="100">CSS</Progress>
              <div className="text-center">100%</div>
              <Progress multi>
                <Progress bar value="15">Football</Progress>
                <Progress bar color="success" value="30">Swimming</Progress>
                <Progress bar color="info" value="25">Video Game</Progress>
                <Progress bar color="warning" value="20">billiard</Progress>
                <Progress bar color="danger" value="5">!!</Progress>
              </Progress>
            </Container>
          </>
      )
    }

  
}


export default HomePage;
