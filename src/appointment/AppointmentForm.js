import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import SERVER_URL from '../constants/server';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class AppointmentForm extends Component {
	state ={
		stylist: '',
		stylistName: '',
		clients: ['asdfglaj','asldhfa'],
		client: '',
		notes: '',
		date: this.props.date,
		apptLength: '',
		apptLengthClient: '',
		start: 0,
		end: 0,
		approved: this.props.user.stylist ? true : false,
		consultationID: ''
	}

	componentDidMount(){
		this.props.user.stylist ? this.getStylist() : this.getConsultations()
		// this.getAppointments()
	}

  getStylist = () => {
	  let token = localStorage.getItem('serverToken');
	  // SEND DATA TO SERVER
	  axios.get(`${SERVER_URL}/landing`, {
	    headers: {
	      'Authorization' : `Bearer ${token}`
	    },
	  })
	  .then(response => {
	  	let clientsArr = []
	    response.data.client.forEach((c, i) => {
	    	let clientObj = {
	    		name: c.user.firstname + ' ' + c.user.lastname,
	    		_id: c._id
	    	}
	    	clientsArr.push(clientObj)
	    })
	    console.log('Stylist response: stylist', response.data)
	    this.setState({ clients: clientsArr.sort()})
	    this.setState({ stylist: response.data._id })
	  })
	  .catch(error => {
	    console.log('error', error)
	  })
	}

	getConsultations = () => {
  	console.log('getting consultations for: ', this.props.user)
    let token = localStorage.getItem('serverToken');
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/landing/client`, { userId: this.props.user },
    	{
      	headers: {
        	'Authorization' : `Bearer ${token}`}
      }
    )
    .then (response => {
      if (response.data.length) {
      	console.log('YO consultation response: ', response)
      	this.setState({ 
      		consultationID: response.data[response.data.length -1]._id, 
      		client: response.data[response.data.length -1].client._id,
      		stylist: response.data[response.data.length -1].stylist._id,
      		stylistName: response.data[response.data.length -1].stylist.user.firstname + ' ' + response.data[response.data.length -1].stylist.user.lastname,
      		apptLength: response.data[response.data.length -1].apptLength,
      		apptLengthClient: new Date(response.data[response.data.length -1].apptLength).toISOString().substr(11, 8).split(':')
      	})
    	} else {
    		console.log('ELSE CAUGHt THIS')
    	}
    })
    .catch(error => {
      console.log('error', error)
    })
  }

  // getAppointments () => {
  // 	if (this.props.user.stylist) {

  // 	}
  // }

	handleClientChange = (e) => { 
		this.setState({ client: e.target.value })
	}

	handleStartChange = (e) => { 
		let timeArr = e.target.value.split(':')
		let startOffset = (timeArr[0] * 3600000) + (timeArr[1] * 60000)
		this.setState({ 
			start: this.state.date + startOffset, 
			end: this.state.date + startOffset + this.state.apptLength 
		})
	}

	handleApptLengthChange = (e) => {
		if (this.props.user.stylist) {
			let timeArr = e.target.value.split(':')
			let seconds = (timeArr[0] * 3600000) + (timeArr[1] * 60000)
			this.setState({ 
				apptLength: seconds,
				end: this.state.start + seconds
			})
		}
	}

	handleNotesChange = (e) => {
		this.setState({ notes: e.target.value })
	}
	handleSubmit = (e) => {
		e.preventDefault()
		console.log('submitting appointment', this.state)
    let token = localStorage.getItem('serverToken');
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/appointment`, this.state, {
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
    .then(response => {
    	console.log('appointment response', response)
    })
    .catch(error => {
      console.log('error', error)
    })
    axios.put(`${SERVER_URL}/consultation/scheduled`, this.state, {
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
    .then(response => {
    	console.log('consultation response', response)
    	
    	//close the modal
    	this.props.toggleModal()
    	
    	// OR should we display a message?
    	
    	// OR should we redirect to home?
    	
    	
    })
    .catch(error => {
      console.log('error', error)
    })
  }

  toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
  }

	render() {
		if (this.state.stylist && this.props.user.stylist) {
			console.log('state', this.state)
			let clients = this.state.clients.map((c, i) => {
				return(
					<option key={i} value={c._id}>{this.toTitleCase(c.name)}</option>
				)
			})
			return (
				<div className="container">
					<Form onSubmit={this.handleSubmit}>
						<FormGroup>
		          <Label for="client">Client</Label>
		          <Input type="select" name="client" id="client" onChange={this.handleClientChange}>
		            <option>-:--</option>
		            {clients}
		          </Input>
		        </FormGroup>
		        <FormGroup>
		          <Label for="start">Start Time</Label>
		          <Input type="select" name="start" id="start" onChange={this.handleStartChange}>
		            <option>-:--</option>
		            <option value="6:00">6:00 am</option>
		            <option value="6:15">6:15 am</option>
		            <option value="6:30">6:30 am</option>
		            <option value="6:45">6:45 am</option>
		            <option value="7:00">7:00 am</option>
		            <option value="7:15">7:15 am</option>
		            <option value="7:30">7:30 am</option>
		            <option value="7:45">7:45 am</option>
		            <option value="8:00">8:00 am</option>
		            <option value="8:15">8:15 am</option>
		            <option value="8:30">8:30 am</option>
		            <option value="8:45">8:45 am</option>
		            <option value="9:00">9:00 am</option>
		            <option value="9:15">9:15 am</option>
		            <option value="9:30">9:30 am</option>
		            <option value="9:45">9:45 am</option>
		            <option value="10:00">10:00 am</option>
		            <option value="10:15">10:15 am</option>
		            <option value="10:30">10:30 am</option>
		            <option value="10:45">10:45 am</option>
		            <option value="11:00">11:00 am</option>
		            <option value="11:15">11:15 am</option>
		            <option value="11:30">11:30 am</option>
		            <option value="11:45">11:45 am</option>
		            <option value="12:00">12:00 pm</option>
		            <option value="12:15">12:15 pm</option>
		            <option value="12:30">12:30 pm</option>
		            <option value="12:45">12:45 pm</option>
		            <option value="13:00">1:00 pm</option>
		            <option value="13:15">1:15 pm</option>
		            <option value="13:30">1:30 pm</option>
		            <option value="13:45">1:45 pm</option>
		            <option value="14:00">2:00 pm</option>
		            <option value="14:15">2:15 pm</option>
		            <option value="14:30">2:30 pm</option>
		            <option value="14:45">2:45 pm</option>
		            <option value="15:00">3:00 pm</option>
		            <option value="15:15">3:15 pm</option>
		            <option value="15:30">3:30 pm</option>
		            <option value="15:45">3:45 pm</option>
		            <option value="16:00">4:00 pm</option>
		            <option value="16:15">4:15 pm</option>
		            <option value="16:30">4:30 pm</option>
		            <option value="16:45">4:45 pm</option>
		            <option value="17:00">5:00 pm</option>
		            <option value="17:15">5:15 pm</option>
		            <option value="17:30">5:30 pm</option>
		            <option value="17:45">5:45 pm</option>
		            <option value="18:00">6:00 pm</option>
		            <option value="18:15">6:15 pm</option>
		            <option value="18:30">6:30 pm</option>
		            <option value="18:45">6:45 pm</option>
		            <option value="19:00">7:00 pm</option>
		            <option value="19:15">7:15 pm</option>
		            <option value="19:30">7:30 pm</option>
		            <option value="19:45">7:45 pm</option>
		            <option value="20:00">8:00 pm</option>
		            <option value="20:15">8:15 pm</option>
		            <option value="20:30">8:30 pm</option>
		            <option value="20:45">8:45 pm</option>
		            <option value="21:00">9:00 pm</option>
		          </Input>
		        </FormGroup>
		        <FormGroup>
	            <Label for="apptLength">Appointment Length</Label>
	            <Input type="select" name="apptLength" id="apptLength" onChange={this.handleApptLengthChange}>
	              <option>-:--</option>
	              <option>0:15</option>
	              <option>0:30</option>
	              <option>0:45</option>
	              <option>1:00</option>
	              <option>1:15</option>
	              <option>1:30</option>
	              <option>1:45</option>
	              <option>2:00</option>
	              <option>2:15</option>
	              <option>2:30</option>
	              <option>2:45</option>
	              <option>3:00</option>
	              <option>3:15</option>
	              <option>3:30</option>
	              <option>3:45</option>
	              <option>4:00</option>
	              <option>4:15</option>
	              <option>4:30</option>
	              <option>4:45</option>
	              <option>5:00</option>
	              <option>5:15</option>
	              <option>5:30</option>
	              <option>5:45</option>
	              <option>6:00</option>
	              <option>6:15</option>
	              <option>6:30</option>
	              <option>6:45</option>
	              <option>7:00</option>
	              <option>7:15</option>
	              <option>7:30</option>
	              <option>7:45</option>
	              <option>8:00</option>
	            </Input>
	          </FormGroup>
		        <FormGroup>
		          <Label for="notes">Notes</Label>
		          <Input type="textarea" name="notes" id="notes" value={this.state.notes} onChange={this.handleNotesChange}/>
		        </FormGroup>
		        <Button color="success" type="submit" block onClick={this.handleSubmit}>Create Appointment</Button>
		      </Form>
		      <br />
		      <br />
				</div>
			)
		} else if (this.state.stylist && !this.props.user.stylist) {
			console.log('state', this.state)
			return (
				<div className="container">
					<Form onSubmit={this.handleSubmit}>
						<FormGroup>
		          <Label for="stylist">Stylist</Label>
		          <Input type="select" name="stylist" id="stylist" disabled >
		            <option>{this.state.stylistName}</option>
		          </Input>
		        </FormGroup>
		        <FormGroup>
	            <Label for="apptLength">Appointment Length</Label>
	            <Input type="select" name="apptLength" id="apptLength" disabled >
	              <option>{this.state.apptLengthClient[0] + ' hr ' + this.state.apptLengthClient[1] + ' min'}</option>
	            </Input>
	          </FormGroup>
		        <FormGroup>
		          <Label for="start">Start Time</Label>
		          <Input type="select" name="start" id="start" onChange={this.handleStartChange}>
		            <option>-:--</option>
		            <option value="6:00">6:00 am</option>
		            <option value="6:15">6:15 am</option>
		            <option value="6:30">6:30 am</option>
		            <option value="6:45">6:45 am</option>
		            <option value="7:00">7:00 am</option>
		            <option value="7:15">7:15 am</option>
		            <option value="7:30">7:30 am</option>
		            <option value="7:45">7:45 am</option>
		            <option value="8:00">8:00 am</option>
		            <option value="8:15">8:15 am</option>
		            <option value="8:30">8:30 am</option>
		            <option value="8:45">8:45 am</option>
		            <option value="9:00">9:00 am</option>
		            <option value="9:15">9:15 am</option>
		            <option value="9:30">9:30 am</option>
		            <option value="9:45">9:45 am</option>
		            <option value="10:00">10:00 am</option>
		            <option value="10:15">10:15 am</option>
		            <option value="10:30">10:30 am</option>
		            <option value="10:45">10:45 am</option>
		            <option value="11:00">11:00 am</option>
		            <option value="11:15">11:15 am</option>
		            <option value="11:30">11:30 am</option>
		            <option value="11:45">11:45 am</option>
		            <option value="12:00">12:00 pm</option>
		            <option value="12:15">12:15 pm</option>
		            <option value="12:30">12:30 pm</option>
		            <option value="12:45">12:45 pm</option>
		            <option value="13:00">1:00 pm</option>
		            <option value="13:15">1:15 pm</option>
		            <option value="13:30">1:30 pm</option>
		            <option value="13:45">1:45 pm</option>
		            <option value="14:00">2:00 pm</option>
		            <option value="14:15">2:15 pm</option>
		            <option value="14:30">2:30 pm</option>
		            <option value="14:45">2:45 pm</option>
		            <option value="15:00">3:00 pm</option>
		            <option value="15:15">3:15 pm</option>
		            <option value="15:30">3:30 pm</option>
		            <option value="15:45">3:45 pm</option>
		            <option value="16:00">4:00 pm</option>
		            <option value="16:15">4:15 pm</option>
		            <option value="16:30">4:30 pm</option>
		            <option value="16:45">4:45 pm</option>
		            <option value="17:00">5:00 pm</option>
		            <option value="17:15">5:15 pm</option>
		            <option value="17:30">5:30 pm</option>
		            <option value="17:45">5:45 pm</option>
		            <option value="18:00">6:00 pm</option>
		            <option value="18:15">6:15 pm</option>
		            <option value="18:30">6:30 pm</option>
		            <option value="18:45">6:45 pm</option>
		            <option value="19:00">7:00 pm</option>
		            <option value="19:15">7:15 pm</option>
		            <option value="19:30">7:30 pm</option>
		            <option value="19:45">7:45 pm</option>
		            <option value="20:00">8:00 pm</option>
		            <option value="20:15">8:15 pm</option>
		            <option value="20:30">8:30 pm</option>
		            <option value="20:45">8:45 pm</option>
		            <option value="21:00">9:00 pm</option>
		          </Input>
		        </FormGroup>
		        <FormGroup>
		          <Label for="notes">Notes</Label>
		          <Input type="textarea" name="notes" id="notes" value={this.state.notes} onChange={this.handleNotesChange}/>
		        </FormGroup>
		        <Button color="success" type="submit" block onClick={this.handleSubmit}>Create Appointment</Button>
		      </Form>
		      <br />
		      <br />
				</div>
			)
		}
		return <div></div>
	}
}

export default AppointmentForm