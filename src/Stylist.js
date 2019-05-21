import React, { Component } from 'react'
import Display from './Consultation/Display'
import DisplayClient from './Consultation/DisplayClient'
import ApptDisplay from './appointment/ApptDisplay'
import { Link } from 'react-router-dom';
import { UncontrolledCollapse, Button } from 'reactstrap';
import axios from 'axios';
import SERVER_URL from './constants/server';

class Stylist extends Component {
	constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

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

  componentReload = () => {
  	console.log('stylist componentreload')
  	this.getConsultations()
    this.getAppointments()
    this.getConsultationsApproved()
    window.scrollTo(0, 0)
  	this.toggle()
  }

  getConsultations = () => {
    let token = localStorage.getItem('serverToken');
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/landing/stylist`, { userId: this.props.user },
    	{
      	headers: {
        	'Authorization' : `Bearer ${token}`}
      }
    )
    .then(response => {
      console.log('$$$$ consultation response', response)
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
		let consultationRequests = this.state.consultations.slice(0).reverse().map((consultation, index) => {
      console.log('hey',consultation)
      return (
        <div key={index}>
          <Button className="hotPink"  id={'togglerR' + index} block style={{  margin: '2px', }}>
           		{consultation.client.user.firstname} {consultation.client.user.lastname} 
          </Button>
          <UncontrolledCollapse toggler={'#togglerR' + index}>
            <Display 
              consultation={consultation}
              rerender={this.getConsultations}
              setCurrentConsultation={this.setCurrentConsultation}
              currentId={this.state.current._id}
              componentReload={this.componentReload}
            />
          </UncontrolledCollapse>
        </div>
      )
    })
    
		let consultationRequestsApproved = this.state.consultationsApproved.slice(0).reverse().map((consultation, index) => {
      console.log('hey',consultation)
      return (
        <div key={index}>
          <Button color="secondary" id={'toggler' + index} block style={{ margin: '2px',}}>
           		{consultation.client.user.firstname} {consultation.client.user.lastname} 
          </Button>
          <UncontrolledCollapse toggler={'#toggler' + index}>
          {/* <DisplayClient 
            	index = {this.state.consultations.length - 1}
            	stylistNotes = {true}
            	noCancel = {false}
            	getConsultations={this.consultationsApproved}
            	formDone={this.formDone}
              consultation={this.state.consultations}
              rerender={this.getConsultations}
              setCurrentConsultation={this.setCurrentConsultation}
              currentId={this.state.current._id}
              componentReload={this.componentReload}
            />*/}
{/*try displayclient*/}
          <Display 	
              consultation={consultation}
              rerender={this.getConsultations}
              setCurrentConsultation={this.setCurrentConsultation}
              currentId={this.state.current._id}
              componentReload={this.componentReload}
            />
          </UncontrolledCollapse>
        </div>
      )
    })

    let appointmentRequests = this.state.appointments.slice(0).reverse().map((appointment, index) => {
      if (!appointment.approved) {
        return (
          <div key={index}>
            <Button className="hotPink" id={'togglerA' + index} block style={{  margin: '2px', }}>
              {appointment.client.user.firstname} {appointment.client.user.lastname}
            </Button>
            <UncontrolledCollapse toggler={'#togglerA' + index}>
              <ApptDisplay 
                appointment={appointment}
                rerender={this.getAppointments}
                setCurrentAppointment={this.setCurrentAppointment}
                currentId={this.state.current._id}
                componentReload={this.componentReload}
              />
            </UncontrolledCollapse>
          </div>
        )
      }
    })

    return(
      <div className="container">
        <h2>Stylist Page</h2>
        <hr />

        <h4>New Consultations</h4>
        {consultationRequests}
        <hr />
        <h4>New Appointments</h4>
        {appointmentRequests ? appointmentRequests : <h5>You're all caught up!</h5>}
        <hr />
        <h4>Approved Consultations</h4>
        {consultationRequestsApproved}
        <hr />
        <Link to="/schedule">
          <Button className="hotPink" block style={{  margin: '2px',}}>
            VIEW MY SCHEDULE
          </Button>
        </Link>
        <br />
        <br />
      </div>
    );
  }
}

export default Stylist