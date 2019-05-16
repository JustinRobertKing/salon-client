import React, { Component } from 'react'
import ConsultationForm from './Consultation/ConsultationForm'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import ApptDisplay from './appointment/ApptDisplay'
import Display from './Consultation/Display'
import axios from 'axios';
import SERVER_URL from './constants/server';

class Client extends Component {


 state = {
    consultations: [],
    current: {},
    appointments: [],
    currentAppt: {},
    consultButtonStatus: {process:'start',color:'primary', text:'START CONSULTATION'},
    consultProcess: 'start'

  }

  componentDidMount() {
    this.getConsultations()
    this.getAppointments()
  }


//TODO: Create callback function to change / reset the button
formDone =() =>{
	console.log('this works')
	this.setState({consultButtonStatus:{process:'pending',color:'success',text:'Review Consultation'}})
	this.setState({consultProcess: 'submitted'})

}

  getConsultations = () => {
  	console.log('getting consultations for: ',this.props.user)
    let token = localStorage.getItem('serverToken');
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/landing/client`, { userId: this.props.user },
    	{
      	headers: {
        	'Authorization' : `Bearer ${token}`}
      }
    )
    .then(response => {
      console.log('YO consultation response: ', response)
      this.setState({ consultations: response.data})
      console.log('YO - STATE DATA', this.state)
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
      
            	{console.log('hey',consultation)}

      return (
        <div key={index}>
          <Button color="secondary" id={'toggler' + index} block style={{ border: '1px solid white', borderRadius: 0 }}>
           		{consultation.stylist.user.firstname} {consultation.stylist.user.lastname} 
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
let consultationForm
    if (this.state.consultProcess == 'start'){
   		consultationForm = (


   		 	<ConsultationForm formDone={this.formDone} user={this.props.user}/>
   		

   		)
		} else if (this.state.consultProcess == 'submitted'){ 
			consultationForm = (


				<p> Your consultation has been sent to ____. Thank you!</p>


			)
		}

    return(
    	<div className="container">
		 		<h2>Client Page</h2>
        <hr />
				<div id="consultations">
		 			<Button color={this.state.consultButtonStatus.color} block id="toggler" style={{ marginBottom: '1rem' }}>
	     			{this.state.consultButtonStatus.text}
	    		</Button>
		 	    <UncontrolledCollapse toggler="#toggler">
		 	   
		 	    {consultationForm}
		 	    
		 	    </UncontrolledCollapse>
		     </div>
			<hr />
        <h4>Pending Consultations</h4>
        {consultationRequests}
        <hr />
        <h4>Appointment Requests</h4>
        {appointmentRequests}
        <br />
        <br />
      </div>
    );
  }

}

export default Client