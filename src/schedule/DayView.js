import React, { Component } from 'react'
import { Row, Col, Card, CardHeader, CardBody, Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import AppointmentForm from '../appointment/AppointmentForm'
import Moment from 'react-moment'

let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

class DayView extends Component {
	state = {
		collapse: false,
		modal: false,
		dateStamp: this.props.todayStamp + (86400000 * parseInt(this.props.day)),
		dateDisplay: new Date(this.props.todayStamp + (86400000 * parseInt(this.props.day))).toLocaleDateString(),
		day: new Date(this.props.todayStamp + (86400000 * parseInt(this.props.day))).getDay()
	}

	toggleCollapse = (e) => {
    this.setState({ collapse: !this.state.collapse })
		// this.props.setDate(this.props.day)
  }

  toggleModal = (e) => {
    this.setState({ modal: !this.state.modal })
  }

	render() {
		console.log(this.state.dateStamp)
		return (
			<div>
			<Card className="weekRow" onClick={this.toggleCollapse}>
	      <CardHeader>{weekday[this.state.day] + ' - ' + this.state.dateDisplay}</CardHeader>
	        <CardBody>
	        </CardBody>
      	</Card>
			<Collapse isOpen={this.state.collapse}>
				<h1 onClick={this.toggleModal}>BUTTS</h1>
				<Modal isOpen={this.state.modal}>
					<ModalHeader toggle={this.toggleModal}>Book Appointment - {this.state.dateDisplay}</ModalHeader>
        <ModalBody>
					<AppointmentForm date={this.state.dateStamp} user={this.props.user} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
        </ModalFooter>
				</Modal>
			</Collapse>
			</div>
		)
	}
}

export default DayView
	         





	         {/*<Row>
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
	         	</Row>*/}