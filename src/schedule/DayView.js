import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import AppointmentForm from '../appointment/AppointmentForm'
import axios from 'axios'
import SERVER_URL from '../constants/server';

let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

class DayView extends Component {
	state = {
		collapse: false,
		modal: false,
		dateStamp: this.props.todayStamp + (86400000 * parseInt(this.props.day)),
		dateDisplay: new Date(this.props.todayStamp + (86400000 * parseInt(this.props.day))).toLocaleDateString(),
		day: new Date(this.props.todayStamp + (86400000 * parseInt(this.props.day))).getDay(),
		slotTime: 900000,
		appointments: [['butts', 'balls']],
		availability: [0,0,0,0,0,0,0]
	}

	componentDidMount() {
		this.getAppointments()
		this.getAvailability()
	}

	getAppointments = () => {
		if (this.props.user.stylist) {
	    let token = localStorage.getItem('serverToken');
	    // SEND DATA TO SERVER
	    axios.post(`${SERVER_URL}/appointment/day/stylist`, { userId: this.props.user, date: this.state.dateStamp },
	      {
	        headers: {
	          'Authorization' : `Bearer ${token}`}
	      }
	    )
	    .then(response => {
	      console.log('appointment response', response.data)
	      let appointmentsArr = []
				response.data.forEach((a, i) => {
					appointmentsArr.push([
						a.start, 
						a.apptLength, 
						a.end, 
						a.client.user.firstname + ' ' + a.client.user.lastname
					])
				})
	      this.setState({ appointments: appointmentsArr})
	    })
	    .catch(error => {
	      console.log('error', error)
	    })
		} else {
			let token = localStorage.getItem('serverToken');
	    // SEND DATA TO SERVER
	    axios.post(`${SERVER_URL}/appointment/day/client`, { userId: this.props.user, date: this.state.dateStamp },
	      {
	        headers: {
	          'Authorization' : `Bearer ${token}`}
	      }
	    )
	    .then(response => {
	      console.log('appointment response', response.data)
	      let appointmentsArr = []
				response.data.forEach((a, i) => {
					appointmentsArr.push([
						a.start, 
						a.apptLength, 
						a.end, 
						a.client.user.firstname + ' ' + a.client.user.lastname
					])
				})
	      this.setState({ appointments: appointmentsArr})
	    })
	    .catch(error => {
	      console.log('error', error)
	    })
		}
  }

  getAvailability = () => {
  	if (this.props.user.stylist) {
	    let token = localStorage.getItem('serverToken');
	    // SEND DATA TO SERVER
	    axios.post(`${SERVER_URL}/appointment/availability`, { userId: this.props.user, date: this.state.dateStamp },
	      {
	        headers: {
	          'Authorization' : `Bearer ${token}`}
	      }
	    )
	    .then(response => {
	      console.log('availability response', response.data)
	      this.setState({ availability: response.data.availability})
	    })
	    .catch(error => {
	      console.log('error', error)
	    })
		} else {
			let token = localStorage.getItem('serverToken');
	    // SEND DATA TO SERVER
	    axios.post(`${SERVER_URL}/appointment/availability/client`, { userId: this.props.user, date: this.state.dateStamp },
	      {
	        headers: {
	          'Authorization' : `Bearer ${token}`}
	      }
	    )
	    .then(response => {
	      console.log('availability response', response.data)
	      this.setState({ availability: response.data.availability})
	    })
	    .catch(error => {
	      console.log('error', error)
	    })
		}
  }

	toggleCollapse = (e) => {
    this.setState({ collapse: !this.state.collapse })
		// this.props.setDate(this.props.day)
  }

  toggleModal = (e) => {
    this.setState({ modal: !this.state.modal })
  }

  toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
  }
	render() {
		console.log(this.state.dateStamp)
		console.log(this.state.availability)
		let display = []
		let displayHoriz = []
		let hour = []
		let offset = 0
		let ampm = 'am'
		let nameDisplayed = []
		for (let i = 0; i < 1000; i++) {
			nameDisplayed.push(false)
		}
		for (let i = 0; i < 96; i++) {
			if (this.state.appointments) {
				let color = (this.state.availability[this.state.day][1] >= i * 900000) || (this.state.availability[this.state.day][2] <= i * 900000) ? 'unavailable' : 'timeSlot'
				let colorH = (this.state.availability[this.state.day][1] >= i * 900000) || (this.state.availability[this.state.day][2] <= i * 900000) ? 'unavailableH' : 'timeSlotH'
				let appointmentInfo = ''			
				this.state.appointments.forEach((a, j) => {
					if (this.state.dateStamp + (this.state.slotTime * i) >= a[0] && 
						this.state.dateStamp + (this.state.slotTime * i) < a[2]) {
						console.log('hey dickhead', this.state.day)
						let timeArr = new Date(a[0]).toISOString().substr(11, 8).split(':')
						color = "booked"
						colorH = "bookedH"
						if (!nameDisplayed[j]) {
							appointmentInfo = a[3] 
							// + ' - ' + timeArr[0] + ':' + timeArr[1]
							nameDisplayed[j] = true
						} else {
							appointmentInfo = ''
						}
					}
				})
				hour.push(
					<div className={color}><span>{this.props.user.stylist ? appointmentInfo : ''}</span></div>
				)
				displayHoriz.push(
					<div className={colorH}></div>
				)
			} else {
				hour.push(
					<div className="timeSlot"></div>
				)
			}
			if ((i + 1) % 4 === 0) {
				display.push(
					<div className="slotBlock">
						<div className="time">
							<div className="hour">
								<div className="hourSlot">
								{offset === 0 ? 12 : offset}:00 {ampm}
								</div>
							</div>
						</div>
						<div className="slots">
							{hour}
						</div>
					</div>
				)
				hour = []
				if (offset >= 11) {
					ampm = 'pm'
					offset = 0
				} else {
					offset += 1
				}
			} 
		}
		return (
			<div>
			<Card className="weekRow" onClick={this.toggleCollapse}>
	      <CardHeader>{weekday[this.state.day] + ' - ' + this.state.dateDisplay}</CardHeader>
        <CardBody>
					<div className="unavailableH"></div>
					<div className="unavailableH"></div>
        	{displayHoriz}
					<div className="unavailableH"></div>
					<div className="unavailableH"></div>
        </CardBody>
    	</Card>
			<Collapse isOpen={this.state.collapse}>
				<div className="day" onClick={this.toggleModal}>
					{display}
				</div>
				<Modal isOpen={this.state.modal}>
					<ModalHeader toggle={this.toggleModal}>Book Appointment - {this.state.dateDisplay}</ModalHeader>
        <ModalBody>
					<AppointmentForm 
						appointments={this.state.appointments}
						date={this.state.dateStamp} 
						user={this.props.user} 
						toggleModal={this.toggleModal}
					/>
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