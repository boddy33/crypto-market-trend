import React, { Component } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class InfoPanel extends Component {
    render() {
        return (<Container className="p-4">
        <Jumbotron>
        <Row>
            <Col className="text-center">1 of 3</Col>
            <Col className="text-center">2 of 3</Col>
            <Col className="text-center">3 of 3</Col>
        </Row>  
        </Jumbotron>
        </Container>)
    }
}

export default InfoPanel;
