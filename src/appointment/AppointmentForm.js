import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import SERVER_URL from '../constants/server';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class AppointmentForm extends Component {

	componentDidMount(){
		// console.log('')
		// console.log('')
		// console.log('hey')
		// console.log('')
		// console.log('')
		// console.log(this.props.user.id)
		// console.log('')
		// console.log('')
		this.getStylist()
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
	    	clientsArr.push(c.user.lastname + ', ' + c.user.firstname)
	    })
	    console.log('Stylist response: stylist', response.data)
	    this.setState({ clients: clientsArr.sort()})
	    this.setState({ stylist: response.data._id })
	    console.log('stylist state is now:', this.state.stylist)
	  })
	  .catch(error => {
	    console.log('error', error)
	  })
	}

	state ={
		stylist: '',
		clients: ['asdfglaj','asldhfa'],
		client: '',
		date: 1558767600,
		duration: 9900,
		start: 0,
		end: 0,
	}

	handleClientChange = (e) => { 
		this.setState({ client: e.target.value })
	}

	handleStartChange = (e) => { 
		let timeArr = e.target.value.split(':')
		let seconds = (timeArr[0] * 3600) + (timeArr[1] * 60) + this.state.date
		this.setState({ start: seconds, end: this.state.start + this.state.duration }); 
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
  }

  toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
  }

	render() {
		let clients = this.state.clients.map((c, i) => {
			return(
				<option>{this.toTitleCase(c)}</option>
			)
		})
		return (
			 <div>
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
	            <option>8:00</option>
	            <option>8:15</option>
	            <option>8:30</option>
	            <option>8:45</option>
	            <option>9:00</option>
	            <option>9:15</option>
	            <option>9:30</option>
	            <option>9:45</option>
	            <option>10:00</option>
	            <option>10:15</option>
	            <option>10:30</option>
	            <option>10:45</option>
	            <option>11:00</option>
	            <option>11:15</option>
	            <option>11:30</option>
	            <option>11:45</option>
	            <option>12:00</option>
	            <option>12:15</option>
	            <option>12:30</option>
	            <option>12:45</option>
	            <option>13:00</option>
	            <option>13:15</option>
	            <option>13:30</option>
	            <option>13:45</option>
	            <option>14:00</option>
	            <option>14:15</option>
	            <option>14:30</option>
	            <option>14:45</option>
	            <option>15:00</option>
	            <option>15:15</option>
	            <option>15:30</option>
	            <option>15:45</option>
	            <option>16:00</option>
	            <option>16:15</option>
	            <option>16:30</option>
	            <option>16:45</option>
	            <option>17:00</option>
	            <option>17:15</option>
	            <option>17:30</option>
	            <option>17:45</option>
	            <option>18:00</option>
	            <option>18:15</option>
	            <option>18:30</option>
	            <option>18:45</option>
	            <option>19:00</option>
	            <option>19:15</option>
	            <option>19:30</option>
	            <option>19:45</option>
	            <option>20:00</option>
	            <option>20:15</option>
	            <option>20:30</option>
	            <option>20:45</option>
	          </Input>
	        </FormGroup>
	        <FormGroup>
	          <Label for="stylistComment">Process Description</Label>
	          <Input type="textarea" name="stylistComment" id="stylistComment" value={this.state.stylistComment} onChange={this.handleStylistCommentChange}/>
	        </FormGroup>
	        <Button color="success" type="submit" onClick={this.handleSubmit}>Create Appointment</Button>
	      </Form>
	      <br />
	      <br />
			</div>
		)
	}
}

export default AppointmentForm