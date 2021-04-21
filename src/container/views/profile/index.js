import React, {Component} from 'react';
import { Container, Row, Col, Card,Form, Button } from 'react-bootstrap';

import { MainTable, SearchField } from '../../utils';
import './index.scss';
// export class Profile extends Component{

// }

export class Profile extends Component {

  columns = [
    {name: 'Country', key: 0, },
    {name: 'State	', key: 1, },
    {name: 'City', key: 2, },
    {name: 'Device', key: 3, },
    {name: 'Date', key: 4, },

];

    render (){
        return(
            <Container fluid className='mb-5 pb-4 profile--holder'>
            <Row className='page-titles'>
            <Col md={5} className='align-self-center'>
                        <h3 className='text-themecolor pt-3'>My Profile</h3>
                    </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Card>
                        <Card.Header><h3>Edit Profile</h3></Card.Header>
                        <Card.Body>
                        <Form>
                            <Form.Group as={Row} controlId="formPlaintextEmail" className='mb-5'>
                                <Form.Label column sm="3">
                                NAME
                                </Form.Label>
                                <Col sm="9">
                                <Form.Control  type='text' placeholder="name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextEmail" className='mb-4'>
                                <Form.Label column sm="3">
                                IMAGE
                                </Form.Label>
                                <Col sm="9">
                                    <div className='addImage'>
                                        <img width='100' src='http://enkuire.com/account/classes/saf_framework/images/No_Image_Available.jpg'/>
                                    </div>
                                    <Button type='default' className='btn btn-default'>Add Photo</Button>

                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextEmail" className='mb-5'>
                                <Form.Label column sm="3">
                                POSITION
                                </Form.Label>
                                <Col sm="9">
                                <Form.Control  type='text' placeholder="Position" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextEmail" className='mb-5'>
                                <Form.Label column sm="3">
                                EMAIL
                                </Form.Label>
                                <Col sm="9">
                                <Form.Control  type='text' placeholder="Email" />
                                </Col>
                            </Form.Group>


                            <Form.Group as={Row} controlId="formPlaintextPassword" className='mb-5'>
                                <Form.Label column sm="3">
                                Password
                                </Form.Label>
                                <Col sm="9">
                                <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                            </Form>
                            <Row>
                            <Col md={3} className='pr-0'>
                                    <Button type='primary' className='btn btn-primary'>Submit</Button>
                            </Col>
                            <Col md={3} className='pl-0'>
                                    <Button type='default' className='btn btn-default'>Cancel</Button>
                            </Col>
                        </Row>
                        </Card.Body>

                       
                    </Card>
                </Col>
                <Col md={7}>
                    <Card>
                        <Card.Header><h3>Login History</h3></Card.Header>
                        <Card.Body>
                        <MainTable columns={this.columns} /> 
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        );
    }
}

