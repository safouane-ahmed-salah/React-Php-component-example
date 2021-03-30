import React, { Component } from 'react';
import { Container , Row , Col , Form } from 'react-bootstrap';
export class Dashboard extends Component {
    render(){
        return (
            <Container fluid>
                <Row className='page-titles'>
                    <Col md={5} className='align-self-center'>
                        <h3 className='text-themecolor'>Overview</h3>
                    </Col>
                    <Col md={7} className='align-self-center'>
                    <Form>
                    <Row>
                    <Col md={4}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Campaign:</Form.Label>
                        <Form.Control as="select">
                            <option>Default select</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col md={4}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>User:</Form.Label>
                        <Form.Control as="select">
                            <option>Default select</option>
                        </Form.Control>
                    </Form.Group>
                   
                    </Col>
                    </Row>


                    
                    </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}
