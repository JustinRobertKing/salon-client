import React, { Component } from 'react'
import { Row, Col, Card, CardHeader, CardBody, Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import AppointmentForm from '../appointment/AppointmentForm'
import Moment from 'react-moment'

let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let slotTime = 900000

class DayView extends Component {
	state = {
		collapse: false,
		modal: false,
		dateStamp: this.props.todayStamp + (86400000 * parseInt(this.props.day)),
		dateDisplay: new Date(this.props.todayStamp + (86400000 * parseInt(this.props.day))).toLocaleDateString(),
		day: new Date(this.props.todayStamp + (86400000 * parseInt(this.props.day))).getDay(),
		slotTime: 900000
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
		// let hours = []
		// for (let i = 0; i < 24; i++) {
		// 	let timeSlots = [] 
		// 	for (let i = 0; i < 4; i++) {
		// 		timeSlots.push(
		// 			<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 0)></div>
		// 		)
		// 	}
		// 	[...hours, timeSlots]
		// }

		return (
			<div>
			<Card className="weekRow" onClick={this.toggleCollapse}>
	      <CardHeader>{weekday[this.state.day] + ' - ' + this.state.dateDisplay}</CardHeader>
	        <CardBody>
	        </CardBody>
      	</Card>
			<Collapse isOpen={this.state.collapse}>
				<div className="day" onClick={this.toggleModal}>
					<div className="time">
						<div className="hour">
							<div className="hourSlot">
							8:00 am
							</div>
						</div>
					</div>
					<div className="slots">
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 32)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 33)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 34)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 35)}></div>
					</div>
					<div className="time">
						<div className="hour">
							<div className="hourSlot">
							9:00 am
							</div>
						</div>
					</div>
					<div className="slots">
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 36)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 37)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 38)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 39)}></div>
					</div>
					<div className="time">
						<div className="hour">
							<div className="hourSlot">
							10:00 am
							</div>
						</div>
					</div>
					<div className="slots">
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 40)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 41)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 42)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 43)}></div>
					</div>
					<div className="time">
						<div className="hour">
							<div className="hourSlot">
							11:00 am
							</div>
						</div>
					</div>
					<div className="slots">
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 44)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 45)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 46)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 47)}></div>
					</div>
					<div className="time">
						<div className="hour">
							<div className="hourSlot">
							12:00 pm
							</div>
						</div>
					</div>
					<div className="slots">
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 48)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 49)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 50)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 51)}></div>
					</div>
					<div className="time">
						<div className="hour">
							<div className="hourSlot">
							1:00 pm
							</div>
						</div>
					</div>
					<div className="slots">
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 52)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 53)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 54)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 55)}></div>
					</div>
					<div className="time">
						<div className="hour">
							<div className="hourSlot">
							2:00 pm
							</div>
						</div>
					</div>
					<div className="slots">
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 56)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 57)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 58)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 59)}></div>
					</div>
					<div className="time">
						<div className="hour">
							<div className="hourSlot">
							3:00 pm
							</div>
						</div>
					</div>
					<div className="slots">
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 60)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 61)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 62)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 63)}></div>
					</div>
					<div className="time">
						<div className="hour">
							<div className="hourSlot">
							4:00 pm
							</div>
						</div>
					</div>
					<div className="slots">
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 64)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 65)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 66)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 67)}></div>
					</div>
					<div className="time">
						<div className="hour">
							<div className="hourSlot">
							5:00 pm
							</div>
						</div>
					</div>
					<div className="slots">
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 68)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 69)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 70)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 71)}></div>
					</div>
					<div className="time">
						<div className="hour">
							<div className="hourSlot">
							6:00 pm
							</div>
						</div>
					</div>
					<div className="slots">
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 72)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 73)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 74)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 74)}></div>
					</div>
					<div className="time">
						<div className="hour">
							<div className="hourSlot">
							7:00 pm
							</div>
						</div>
					</div>
					<div className="slots">
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 76)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 77)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 78)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 79)}></div>
					</div>
					<div className="time">
						<div className="hour">
							<div className="hourSlot">
							8:00 pm
							</div>
						</div>
					</div>
					<div className="slots">
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 80)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 81)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 82)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 83)}></div>
					</div>
					<div className="time">
						<div className="hour">
							<div className="hourSlot">
							9:00 pm
							</div>
						</div>
					</div>
					<div className="slots">
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 84)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 85)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 86)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 87)}></div>
					</div>
					<div className="time">
						<div className="hour">
							<div className="hourSlot">
							10:00 pm
							</div>
						</div>
					</div>
					<div className="slots">
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 88)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 89)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 90)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 91)}></div>
					</div>
					<div className="time">
						<div className="hour">
							<div className="hourSlot">
							11:00 pm
							</div>
						</div>
					</div>
					<div className="slots">
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 92)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 93)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 94)}></div>
						<div className="timeSlot" id={this.state.dateStamp + (this.state.slotTime * 95)}></div>
					</div>
				</div>
				<Modal isOpen={this.state.modal}>
					<ModalHeader toggle={this.toggleModal}>Book Appointment - {this.state.dateDisplay}</ModalHeader>
        <ModalBody>
					<AppointmentForm 
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