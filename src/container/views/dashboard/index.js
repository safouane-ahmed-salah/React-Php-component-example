import React, { Component } from 'react';
import { Container , Row , Col , Form, Card, Button } from 'react-bootstrap';
import { dashboardBoxes , progressCategories     } from '../../constants';
import { DateRange } from '../../utils';
import './index.scss';
export class Dashboard extends Component {
    columns = [
        {name: 'Assignee', key: 0, },
        {name: 'Lead Name	', key: 1, },
        {name: 'Status', key: 2, },
        {name: 'Campaign', key: 3, },
        {name: 'Submission Date', key: 4, },

    ];
    render(){
        return (
            <Container fluid className="dashboard--holder">
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
                    <Col md={4}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Date Range:</Form.Label>
                        <DateRange/>
                    </Form.Group>
                       
                    </Col>
                    </Row>
                    </Form>
                    </Col>
                </Row>

                <div className='card--content--holder pl-3 pr-3'>
                    <Row>
                    {dashboardBoxes.map((v,i)=><Col key={i} md="4">
                    <Card className='bg-dark text-white'>
                            <Card.Body>
                                <div class="d-flex">
                                    {/* <div class="m-r-20 align-self-center">
                                        <h1 class="text-white"><i class="icon-cloud-download"></i></h1>
                                    </div> */}
                                    <Card.Title>{v.name}</Card.Title>
                                </div>
                                <Row>
                                    <Col md={4} className='align-self-center'>
                                        <h2 class="font-light text-white dash-h2">{v.value}</h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} className='align-self-center'>
                                        <h2 class="text-white dash-h2">{v.seconds}</h2>
                                        <small>{v.best}</small>
                                    </Col>
                                    <Col md={6} className='align-self-center'>
                                        <h2 class="text-white dash-h2">{v.days}</h2>
                                        <small>{v.worst}</small>
                                    </Col>
                                </Row>

                                </Card.Body>
                            </Card>
                    </Col>
                    )}                        
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

                   <Row className="mt-4">
                       <Col md={12}>
                        <Card className=" pt-2">
                        <Card.Body>
                            <h2>
                            Incoming
                            </h2>  
                            <p className='card-subtitle'>Number of Incoming Enquiries Per Day</p>
                        </Card.Body>
                        </Card>
                       </Col>
                   </Row>

                   <Row className="mt-4">
                       <Col md={12}>
                        <Card className=" pt-2">
                        <Card.Body>
                            <h2>
                            Device
                            </h2> 
                            <div className='progress--holder mt-5'>
                                <h4>Desktop</h4>
                                <div className='progress--desktop'>
                                    <span>7466</span>
                                </div>
                            </div> 

                            <div className='progress--holder'>
                                <h4>iPhone</h4>
                                <div className='progress--iphone'>
                                    <span>3687</span>
                                </div>
                            </div> 

                            <div className='progress--holder'>
                                <h4>Android</h4>
                                <div className='progress--android'>
                                    <span>6082</span>
                                </div>
                            </div> 
                        </Card.Body>
                        </Card>
                       </Col>
                   </Row>

                   <Row className="mt-4">
                       <Col md={6}>
                        <Card className=" pt-2">
                        <Card.Body>
                            <h2>
                            Source
                            </h2>  
                        </Card.Body>
                        </Card>
                       </Col>

                       <Col md={6}>
                        <Card className=" pt-2">
                        <Card.Body>
                            <h2>
                            Average Response Time

                            </h2>  
                        </Card.Body>
                        </Card>
                       </Col>
                   </Row>

                   <Row className="mt-4">
                       <Col md={12}>
                        <Card className=" pt-2">
                        <Card.Body>
                            <h2>
                            Location
                            </h2>  
                        </Card.Body>
                        </Card>
                       </Col>
                   </Row>

                   <Row className="mt-4 mb-4">
                       <Col md={12}>
                        <Card className=" pt-2">
                        <Card.Body>
                            <h2>
                            Leaderboard
                            </h2>  
                            
                            <Row className='mt-4'> 
                                <Col md={4}>
                                <Card>
                                <Card.Header>Fastest Response</Card.Header>
                                <Card.Body>
                                    <Row className='mb-4'>
                                        <Col md={4} className='pr-0'>
                                                <div className='userName--holder'>A</div>
                                        </Col>
                                        <Col md={8} className='pl-0 pt-3'>
                                            <h6>Aqili</h6>
                                        </Col>
                                    </Row>
                                    <Button  className='btn-block' variant="primary">View</Button>
                                    <Row className="row text-center">
                                        <Col md={12} className='mt-4'>
                                            <h3 className='text-secons'>16 seconds</h3>
                                            <small>Processing time</small>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                </Card>
                                </Col>

                                <Col md={4}>
                                <Card>
                                <Card.Header>Most Calls (Change Status)</Card.Header>
                                <Card.Body>
                                    <Row className='mb-4'>
                                        <Col md={4} className='pr-0'>
                                                <div className='userName--holder'>A</div>
                                        </Col>
                                        <Col md={8} className='pl-0 pt-3'>
                                            <h6>sabir</h6>
                                        </Col>
                                    </Row>
                                    <Button  className='btn-block' variant="primary">View</Button>
                                    <Row className="row text-center">
                                        <Col md={12} className='mt-4'>
                                            <h3 className='text-secons'>364</h3>
                                            <small>Number of changes</small>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                </Card>
                                </Col>

                            </Row>

                        </Card.Body>
                        </Card>
                       </Col>
                   </Row>

                </div>

            </Container>
        );
    }
}
