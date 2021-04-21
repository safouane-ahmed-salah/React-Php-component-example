import React, {Component} from 'react';
import { Container , Row, Col, Form , Card} from 'react-bootstrap';
import { Chart } from "react-google-charts";
import { InnerTable } from '../../utils';

export class Source extends Component{
    columns = [
        {name: 'SOURCE', key: 0, },
        {name: 'Total Enquiries		', key: 1, },
        {name: 'Percentage', key: 2, },

    ];
    render (){
        return (
            <Container fluid>
            <Row className='page-titles'>
                <Col md={5} className='align-self-center'>
                    <h3 className='text-themecolor'>Source</h3>
                </Col>
                <Col md={7} className='align-self-center'>
                <Form>
                <Row>
                <Col md={6}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User:</Form.Label>
                    <Form.Control as="select">
                        <option>Default select</option>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Date Range:</Form.Label>
                    <Form.Control as="select">
                        <option>Default select</option>
                    </Form.Control>
                </Form.Group>
                </Col>
                </Row>
                </Form>
                </Col>
            </Row>

            <Card>
                <Card.Body>
                <h2>SOURCE</h2>

                <Row>
                    <Col md={12}>
                    <Chart
                        width={'1024'}
                        height={'500px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Organic / No UTM code', 'Hours per Day'],
                            ['Facebook', 11],
                            ['Google Display Text', 2],
                            ['Google Search', 2],
                            ['Instagram', 2],
                            ['Homepage', 7],
                            ['Google Display Image', 7],
                            ['Other', 7],
                        ]}
                        options={{
                            title: '',
                        }}
                        rootProps={{ 'data-testid': '1' }}
                        />
                    </Col>
                    <Col md={12}>
                        <InnerTable columns={this.columns} />
                        
                    </Col>
                </Row>

                </Card.Body>
            </Card>

        </Container>
        );
    }
}