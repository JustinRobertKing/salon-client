import React, { Component } from 'react';
import { Container, Row, Col, Card, CardHeader, CardTitle, CardText, Button, CardBody } from 'reactstrap';

class Week extends Component {
  render() {





    return(
    			<div>
    				<Card className="weekRow">
			        <CardHeader>Sunday</CardHeader>
			        <CardBody >
			         <Row>
			         		<Col>
			         				<Row>
				         				<Col className="hourCell"></Col>
				         				<Col className=""></Col>
				         				<Col className="hourCell"></Col>
				         				<Col className="hourCell"></Col>
				         				<Col className=""></Col>
				         				<Col className="hourCell"></Col>
				         				<Col className="hourCell"></Col>
				         				<Col className="hourCell"></Col>
				         				<Col className=""></Col>
				         				<Col className="hourCell"></Col>
				         				<Col className="hourCell"></Col>
				         				<Col className="hourCell"></Col>
			         				</Row>
			         		</Col>
			         		<Col>
			         				<Row>
				         				<Col className="hourCell"></Col>
				         				<Col className="hourCell"></Col>
				         				<Col className="hourCell"></Col>
				         				<Col className="hourCell"></Col>
				         				<Col className=""></Col>
				         				<Col className="hourCell"></Col>
				         				<Col className="hourCell"></Col>
				         				<Col className="hourCell"></Col>
				         				<Col className=""></Col>
				         				<Col className="hourCell"></Col>
				         				<Col className=""></Col>
				         				<Col className="hourCell"></Col>
			         				</Row>
			         		</Col>
			         	</Row>
			        </CardBody>
		      	</Card>
		      	<Card className="weekRow">
			        <CardHeader>Monday</CardHeader>
			        <CardBody >
			         
			        </CardBody>
		      	</Card>
		      	<Card className="weekRow">
			        <CardHeader>Tuesday</CardHeader>
			        <CardBody >
			         
			        </CardBody>
		      	</Card>
		      	<Card className="weekRow">
			        <CardHeader>Wednesday</CardHeader>
			        <CardBody >
			         
			        </CardBody>
		      	</Card>
		      	<Card className="weekRow">
			        <CardHeader>Thursday</CardHeader>
			        <CardBody >
			         
			        </CardBody>
		      	</Card>
		      	<Card className="weekRow">
			        <CardHeader>Friday</CardHeader>
			        <CardBody >
			         
			        </CardBody>
		      	</Card>
		      	<Card className="weekRow">
			        <CardHeader>Saturday</CardHeader>
			        <CardBody >
			         
			        </CardBody>
		      	</Card>
		      </div>
      );
  }
}

export default Week;
