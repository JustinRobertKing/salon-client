import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import SERVER_URL from '../constants/server';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class AppointmentForm extends Component {
	state ={
		stylist: '',
		clients: ['asdfglaj','asldhfa'],
		client: '',
		notes: '',
		date: 1558767600,
		apptLength: 9900,
		start: 0,
		end: 0,
		approved: true
	}

	componentDidMount(){
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
	    	let clientObj = {
	    		name: c.user.lastname + ', ' + c.user.firstname,
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

	handleClientChange = (e) => { 
		this.setState({ client: e.target.value })
	}

	handleStartChange = (e) => { 
		let timeArr = e.target.value.split(':')
		let startOffset = (timeArr[0] * 3600) + (timeArr[1] * 60)
		this.setState({ 
			start: this.state.date + startOffset, 
			end: this.state.date + startOffset + this.state.apptLength 
		})
	}

	handleApptLengthChange = (e) => {
		let timeArr = e.target.value.split(':')
		let seconds = (timeArr[0] * 3600) + (timeArr[1] * 60)
		this.setState({ 
			apptLength: seconds,
			end: this.state.start + seconds
		})
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
  }

  toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
  }

	render() {
		if (this.state.stylist) {
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
		}
		return <div></div>
	}
}

export default AppointmentForm