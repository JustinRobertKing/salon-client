import React, { Component } from 'react'
import Display from './Consultation/Display'
import ApptDisplay from './appointment/ApptDisplay'
import { UncontrolledCollapse, Button } from 'reactstrap';
import axios from 'axios';
import SERVER_URL from './constants/server';

class Stylist extends Component {
	 state = {
    consultations: [],
    current: {},
    appointments: [],
    currentAppt: {},
    consultationsApproved:[]

  }

  componentDidMount() {
    this.getConsultations()
    this.getAppointments()
    this.getConsultationsApproved()
  }

  getConsultations = () => {
    let token = localStorage.getItem('serverToken');
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/landing`, { userId: this.props.user },
    	{
      	headers: {
        	'Authorization' : `Bearer ${token}`}
      }
    )
    .then(response => {
      console.log('consultation response', response)
      this.setState({ consultations: response.data})
    })
    .catch(error => {
      console.log('error', error)
    })
  }
getConsultationsApproved = () => {
    let token = localStorage.getItem('serverToken');
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/landing/consultationsApproved`, { userId: this.props.user },
    	{
      	headers: {
        	'Authorization' : `Bearer ${token}`}
      }
    )
    .then(response => {
      console.log('consultation response', response)
      this.setState({ consultationsApproved: response.data})
    })
    .catch(error => {
      console.log('error', error)
    })
  }
  getAppointments = () => {
    let token = localStorage.getItem('serverToken');
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/landing/appointment`, { userId: this.props.user },
      {
        headers: {
          'Authorization' : `Bearer ${token}`}
      }
    )
    .then(response => {
      console.log('appointment response', response)
      this.setState({ appointments: response.data})
    })
    .catch(error => {
      console.log('error', error)
    })
  }

	render() {
		// make into it's own component when refactoring.  can re-use with client
		let consultationRequests = this.state.consultations.map((consultation, index) => {
      
            	console.log('hey',consultation)

      return (
        <div key={index}>
          <Button color="secondary" id={'toggler' + index} block style={{ border: '1px solid white', borderRadius: 0 }}>
           		{consultation.client.user.firstname} {consultation.client.user.lastname} 
          </Button>
          <UncontrolledCollapse toggler={'#toggler' + index}>
            <Display 
              consultation={consultation}
              rerender={this.getConsultations}
              setCurrentConsultation={this.setCurrentConsultation}
              currentId={this.state.current._id}
            />
          </UncontrolledCollapse>
        </div>
      )
    })
    
		let consultationRequestsApproved = this.state.consultationsApproved.map((consultation, index) => {
      
            	console.log('hey',consultation)

      return (
        <div key={index}>
          <Button color="secondary" id={'toggler' + index} block style={{ border: '1px solid white', borderRadius: 0 }}>
           		{consultation.client.user.firstname} {consultation.client.user.lastname} 
          </Button>
          <UncontrolledCollapse toggler={'#toggler' + index}>
            <Display 
              consultation={consultation}
              rerender={this.getConsultations}
              setCurrentConsultation={this.setCurrentConsultation}
              currentId={this.state.current._id}
            />
          </UncontrolledCollapse>
        </div>
      )
    })
    let appointmentRequests = this.state.appointments.map((appointment, index) => {

     
	      return (

	        <div key={index}>
	          <Button color="primary" id={'togglerA' + index} block style={{ border: '1px solid white', borderRadius: 0 }}>
	          {/*  {console.log("HEY",this.state.appointments[index])}
	            {this.state.appointment}*/}
	            Client Name - Appointment
	          </Button>
	          <UncontrolledCollapse toggler={'#togglerA' + index}>
	            <ApptDisplay 
	              appointment={appointment}
	              rerender={this.getAppointments}
	              setCurrentAppointment={this.setCurrentAppointment}
	              currentId={this.state.current._id}
	            />
	          </UncontrolledCollapse>
	        </div>
	      )
    
    	
    })

    return(
      <div className="container">
        <h2>Stylist Page</h2>
        <hr />
        <h4>Pending Consultations</h4>
        {consultationRequests}
        <hr />
        <h4>Approved Consultations</h4>
        {consultationRequestsApproved}
        <hr />
        <h4>Appointment Request</h4>
        {appointmentRequests}
        <br />
        <br />
      </div>
    );
  }
}

export default Stylist