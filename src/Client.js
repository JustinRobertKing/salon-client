import React, { Component } from 'react'
import ConsultationForm from './Consultation/ConsultationForm'
import { UncontrolledCollapse, Collapse, Button } from 'reactstrap';
import ApptDisplay from './appointment/ApptDisplay'
import DisplayClient from './Consultation/DisplayClient'
import axios from 'axios';
import SERVER_URL from './constants/server';

class Client extends Component {

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
    consultButtonStatus: {process:'start',color:'primary', text:'START CONSULTATION'},
    consultProcess: '',
    isOpen: '',
    collapse: false 

  }

  componentDidMount() {
    this.getConsultations()
    this.getAppointments()
     
  }



//TODO: Create callback function to change / reset the button
formDone = () => {
	console.log('this works')
	this.getConsultations()
	// this.setState({isOpen:false})
	window.scrollTo(0, 0)
	this.toggle()

	// this.setState({consultButtonStatus:{process:'pending',color:'success',text:'Review Consultation'}})
	// this.setState({consultProcess: 'submitted'})


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
      let currentConsultation = response.data.length - 1
      console.log('------>',response.data[currentConsultation])
      //check if there is a consultation
      if (response.data.length === currentConsultation || response.data[currentConsultation].scheduled === true){
      	//if no consultation, show the button as such, with the form
	      this.setState({consultProcess:'start'})
	      console.log('LENGTH IS ZERO')
	      

    	} else if(response.data[currentConsultation].approved === false){
    		// else if there is a consultation, grab that and show the review
    		console.log('NOT APPROVED')
    		 this.setState({consultProcess:'submitted'})
    		 this.setState({consultButtonStatus:{process:'pending',color:'success',text:'Review Consultation'}})
	      


    	} else if(response.data[currentConsultation].approved === true && response.data[currentConsultation].scheduled === false){
    		// else if there is a consultation, grab that and show the review
    		console.log('APPROVED BUT NOT SCHEDULED')
    		 this.setState({consultProcess:'approved'})
    		 this.setState({consultButtonStatus:{process:'pending',color:'success',text:'Review & Schedule'}})


    	} else {
    		console.log('ELSE CAUGHt THIS')
    	}
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


let consultationProcessTitle
let consultationProcessText  
let consultationForm

    if (this.state.consultProcess === 'start'){
    	consultationProcessTitle=(<h4>Ready for a new you? </h4>)
			consultationProcessText =( <p>Start the consultation process now.</p>)

   		consultationForm = (

   		 	<ConsultationForm formDone={this.formDone} user={this.props.user} />
   		

   		)
		} else if (this.state.consultProcess === 'submitted'){ 
			//consultation found
			consultationProcessTitle=(<h4>Your stylist is still reviewing your consultation.</h4>)
			consultationProcessText =( <p></p>)

			console.log('WOWWWWW ->>>>>>>>> ',this.state.consultations)
			consultationForm = (
			//add props to display client based on how much to review
            <DisplayClient 
            	stylistNotes = {false}
            	noCancel = {false}
            	getConsultations={this.getConsultations}
            	formDone={this.formDone}
              consultation={this.state.consultations}
              rerender={this.getConsultations}
              setCurrentConsultation={this.setCurrentConsultation}
              currentId={this.state.current._id}
            />
   		 )
		} else if(this.state.consultProcess === 'approved'){
			//displayclient form with all the fields
			consultationForm = (
			//add props to display client based on how much to review
            <DisplayClient 
            	
            	stylistNotes = {true}
            	noCancel = {false}
            	getConsultations={this.getConsultations}
            	formDone={this.formDone}
              consultation={this.state.consultations}
              rerender={this.getConsultations}
              setCurrentConsultation={this.setCurrentConsultation}
              currentId={this.state.current._id}
            />
            )
			consultationProcessTitle = ( <h4>Your consultation has been approved!</h4> )
			consultationProcessText = ( <p>Please read your stylist notes, and schedule an appointment.</p>)
			
		}
		let pastHeader 
//past consultations
		let consultationPast = this.state.consultations.map((consultation, index) => {
      console.log('heyasdjfajk -----',consultation)

      //do logic to make sure it's a past one
      if (consultation.scheduled === true){
      	pastHeader=(<h4>Past consultations</h4>)
	      return (
	        <div key={index}>
	          <Button color="secondary" id={'toggler' + index} block style={{ border: '1px solid white', borderRadius: 0 }}>
	           		{consultation.stylist.user.firstname} {consultation.stylist.user.lastname} 
	          </Button>

{/*HEREHERHEHRERHHRE*/}

	          <UncontrolledCollapse toggler={'#toggler' + index}>
		          <DisplayClient 
	            	stylistNotes = {true}
	            	noCancel = {true}
	            	getConsultations={this.getConsultations}
	            	formDone={this.formDone}
	              consultation={this.state.consultations}
	              rerender={this.getConsultations}
	              setCurrentConsultation={this.setCurrentConsultation}
	              currentId={this.state.current._id}
	            />
	          </UncontrolledCollapse>
	        </div>
	      )
    	} 
    })


    return(
    	<div className="container">
		 		<h2>Client Page</h2>
        <hr />
				<div id="consultations">
					{consultationProcessTitle}
		 			<Button color={this.state.consultButtonStatus.color} block onClick={this.toggle} style={{ marginBottom: '1rem' }}>
	     			{this.state.consultButtonStatus.text}
	    		</Button>
	    		{consultationProcessText}
		 	   
		 	   <Collapse isOpen={this.state.collapse}>
		 	    
		 	    {consultationForm}
		 	    
  	 	    </Collapse>
		  	</div>
				<hr />
	      {pastHeader}
				{consultationPast}
      </div>
    );
  }
}

export default Client