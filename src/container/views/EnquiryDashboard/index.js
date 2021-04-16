import React,{Component} from 'react';
import { Container , Row , Col , Form, Card, Button } from 'react-bootstrap';
import { dashboardBoxes, progressCategories } from '../../constants';
import { MainTable, SearchField } from '../../utils';
import './index.scss';
export class EnquiryDashBoard extends Component{
    columns = [
        {name: 'Assignee', key: 0, },
        {name: 'Lead Name	', key: 1, },
        {name: 'Status', key: 2, },
        {name: 'Campaign', key: 3, },
        {name: 'Submission Date', key: 4, },
    ];

    render(){
        return (
            <Container fluid className='enquiry--dashboard'>
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

                <Row className="text-center mt-4">
                       <Col md={12}>
                        <Card className="text-center  pt-3">
                        <Card.Body>
                          <Row>

                              {progressCategories.map((v,i)=>
                              <Col md={3} className="align-self-center mb-3" key={i} >
                                    <div className='progress--box' >
                                      <div className='progress--circle' style={{borderColor:v.color}}>
                                           <h4>{v.value}</h4> 
                                      </div>
                                      <p className='text-dark'>{v.name + (v.statusPercentage )}</p>
                                  </div>
                              </Col>
                              )}
                              <Col md={3} className="align-self-center">
                                
                              </Col>
                            </Row>          
                        </Card.Body>
                        <Card.Footer className="text-right float-right">
                            <Button variant="primary">Check Results in Table View</Button>
                            </Card.Footer>
                        </Card>
                       </Col>
                   </Row>

                   <Row className='mt-4'> 
                        <Col md={12}>
                            <Card>
                                <Card.Header>
                                    <Row>
                                        <Col md={6}>
                                            <h3>Leads Table</h3>
                                        </Col>
                                        <Col md={6} >
                                            <Button className='text-right float-right' type='primary'>Create New</Button>
                                        </Col>
                                    </Row>
                                </Card.Header>
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