import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import SERVER_URL from '../constants/server';

class Availability extends Component {
	state = {
		stylistUser: this.props.user,
		check1: false,
		check2: false,
		check3: false,
		check4: false,
		check5: false,
		check6: false,
		check7: false,
		start1: 86399999,
		start2: 86399999,
		start3: 86399999,
		start4: 86399999,
		start5: 86399999,
		start6: 86399999,
		start7: 86399999,
		end1: 0,
		end2: 0,
		end3: 0,
		end4: 0,
		end5: 0,
		end6: 0,
		end7: 0
	}

	handleSubmit = (e) => {
		e.preventDefault()
    let token = localStorage.getItem('serverToken');
		axios.put(`${SERVER_URL}/appointment/availability`, this.state, {
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
    .then(response => {
    	console.log('availability response', response)
    	this.props.toggleModal()
    })
    .catch(error => {
      console.log('error', error)
    })
  }

	handleCheck1Change = (e) => {
		this.setState({ check1: e.target.checked})
	}
	handleCheck2Change = (e) => {
		this.setState({ check2: e.target.checked})
	}
	handleCheck3Change = (e) => {
		this.setState({ check3: e.target.checked})
	}
	handleCheck4Change = (e) => {
		this.setState({ check4: e.target.checked})
	}
	handleCheck5Change = (e) => {
		this.setState({ check5: e.target.checked})
	}
	handleCheck6Change = (e) => {
		this.setState({ check6: e.target.checked})
	}
	handleCheck7Change = (e) => {
		this.setState({ check7: e.target.checked})
	}
	handleStart1Change = (e) => {
		let timeArr = e.target.value.split(':')
		let seconds = (timeArr[0] * 3600000) + (timeArr[1] * 60000)
		this.setState({ 
			start1: seconds
		})
	}
	handleStart2Change = (e) => {
		let timeArr = e.target.value.split(':')
		let seconds = (timeArr[0] * 3600000) + (timeArr[1] * 60000)
		this.setState({ 
			start2: seconds
		})
	}
	handleStart3Change = (e) => {
		let timeArr = e.target.value.split(':')
		let seconds = (timeArr[0] * 3600000) + (timeArr[1] * 60000)
		this.setState({ 
			start3: seconds
		})
	}
	handleStart4Change = (e) => {
		let timeArr = e.target.value.split(':')
		let seconds = (timeArr[0] * 3600000) + (timeArr[1] * 60000)
		this.setState({ 
			start4: seconds
		})
	}
	handleStart5Change = (e) => {
		let timeArr = e.target.value.split(':')
		let seconds = (timeArr[0] * 3600000) + (timeArr[1] * 60000)
		this.setState({ 
			start5: seconds
		})
	}
	handleStart6Change = (e) => {
		let timeArr = e.target.value.split(':')
		let seconds = (timeArr[0] * 3600000) + (timeArr[1] * 60000)
		this.setState({ 
			start6: seconds
		})
	}
	handleStart7Change = (e) => {
		let timeArr = e.target.value.split(':')
		let seconds = (timeArr[0] * 3600000) + (timeArr[1] * 60000)
		this.setState({ 
			start7: seconds
		})
	}
	handleEnd1Change = (e) => {
		let timeArr = e.target.value.split(':')
		let seconds = (timeArr[0] * 3600000) + (timeArr[1] * 60000)
		this.setState({ 
			end1: seconds
		})
	}
	handleEnd2Change = (e) => {
		let timeArr = e.target.value.split(':')
		let seconds = (timeArr[0] * 3600000) + (timeArr[1] * 60000)
		this.setState({ 
			end2: seconds
		})
	}
	handleEnd3Change = (e) => {
		let timeArr = e.target.value.split(':')
		let seconds = (timeArr[0] * 3600000) + (timeArr[1] * 60000)
		this.setState({ 
			end3: seconds
		})
	}
	handleEnd4Change = (e) => {
		let timeArr = e.target.value.split(':')
		let seconds = (timeArr[0] * 3600000) + (timeArr[1] * 60000)
		this.setState({ 
			end4: seconds
		})
	}
	handleEnd5Change = (e) => {
		let timeArr = e.target.value.split(':')
		let seconds = (timeArr[0] * 3600000) + (timeArr[1] * 60000)
		this.setState({ 
			end5: seconds
		})
	}
	handleEnd6Change = (e) => {
		let timeArr = e.target.value.split(':')
		let seconds = (timeArr[0] * 3600000) + (timeArr[1] * 60000)
		this.setState({ 
			end6: seconds
		})
	}
	handleEnd7Change = (e) => {
		let timeArr = e.target.value.split(':')
		let seconds = (timeArr[0] * 3600000) + (timeArr[1] * 60000)
		this.setState({ 
			end7: seconds
		})
	}
	render() {
		console.log(this.state)
		return (
			<div>
				<div className="container">
					<Form onSubmit={this.handleSubmit}>
						<h4>Sunday</h4>
						<hr />
		        <FormGroup check>
		          <Label check>
		            <Input type="checkbox" onChange={this.handleCheck1Change} />{' '}
		            Unavailable
		          </Label>
		        </FormGroup>
		        <br />
		        <FormGroup>
		          <Label for="start">Start Time</Label>
		          <Input type="select" name="start" id="start" onChange={this.handleStart1Change}>
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
	            <Label for="end">End Time</Label>
	            <Input type="select" name="end" id="end" onChange={this.handleEnd1Change}>
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
		            <option value="21:15">9:15 pm</option>
		            <option value="21:30">9:30 pm</option>
		            <option value="21:45">9:45 pm</option>
		            <option value="22:00">10:00 pm</option>
		            <option value="22:15">10:15 pm</option>
		            <option value="22:30">10:30 pm</option>
		            <option value="22:45">10:45 pm</option>
		            <option value="23:00">11:00 pm</option>
		            <option value="23:15">11:15 pm</option>
		            <option value="23:30">11:30 pm</option>
		            <option value="23:45">11:45 pm</option>
		          </Input>
		        </FormGroup>
		        <hr />
		        <h4>Monday</h4>
						<hr />
		        <FormGroup check>
		          <Label check>
		            <Input type="checkbox" onChange={this.handleCheck2Change} />{' '}
		            Unavailable
		          </Label>
		        </FormGroup>
		        <br />
		        <FormGroup>
		          <Label for="start">Start Time</Label>
		          <Input type="select" name="start" id="start" onChange={this.handleStart2Change}>
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
	            <Label for="end">End Time</Label>
	            <Input type="select" name="end" id="end" onChange={this.handleEnd2Change}>
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
		            <option value="21:15">9:15 pm</option>
		            <option value="21:30">9:30 pm</option>
		            <option value="21:45">9:45 pm</option>
		            <option value="22:00">10:00 pm</option>
		            <option value="22:15">10:15 pm</option>
		            <option value="22:30">10:30 pm</option>
		            <option value="22:45">10:45 pm</option>
		            <option value="23:00">11:00 pm</option>
		            <option value="23:15">11:15 pm</option>
		            <option value="23:30">11:30 pm</option>
		            <option value="23:45">11:45 pm</option>
		          </Input>
		        </FormGroup>
		        <hr />
		        <h4>Tuesday</h4>
						<hr />
		        <FormGroup check>
		          <Label check>
		            <Input type="checkbox" onChange={this.handleCheck3Change} />{' '}
		            Unavailable
		          </Label>
		        </FormGroup>
		        <br />
		        <FormGroup>
		          <Label for="start">Start Time</Label>
		          <Input type="select" name="start" id="start" onChange={this.handleStart3Change}>
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
	            <Label for="end">End Time</Label>
	            <Input type="select" name="end" id="end" onChange={this.handleEnd3Change}>
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
		            <option value="21:15">9:15 pm</option>
		            <option value="21:30">9:30 pm</option>
		            <option value="21:45">9:45 pm</option>
		            <option value="22:00">10:00 pm</option>
		            <option value="22:15">10:15 pm</option>
		            <option value="22:30">10:30 pm</option>
		            <option value="22:45">10:45 pm</option>
		            <option value="23:00">11:00 pm</option>
		            <option value="23:15">11:15 pm</option>
		            <option value="23:30">11:30 pm</option>
		            <option value="23:45">11:45 pm</option>
		          </Input>
		        </FormGroup>
		        <hr />
		        <h4>Wednesday</h4>
						<hr />
		        <FormGroup check>
		          <Label check>
		            <Input type="checkbox" onChange={this.handleCheck4Change} />{' '}
		            Unavailable
		          </Label>
		        </FormGroup>
		        <br />
		        <FormGroup>
		          <Label for="start">Start Time</Label>
		          <Input type="select" name="start" id="start" onChange={this.handleStart4Change}>
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
	            <Label for="end">End Time</Label>
	            <Input type="select" name="end" id="end" onChange={this.handleEnd4Change}>
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
		            <option value="21:15">9:15 pm</option>
		            <option value="21:30">9:30 pm</option>
		            <option value="21:45">9:45 pm</option>
		            <option value="22:00">10:00 pm</option>
		            <option value="22:15">10:15 pm</option>
		            <option value="22:30">10:30 pm</option>
		            <option value="22:45">10:45 pm</option>
		            <option value="23:00">11:00 pm</option>
		            <option value="23:15">11:15 pm</option>
		            <option value="23:30">11:30 pm</option>
		            <option value="23:45">11:45 pm</option>
		          </Input>
		        </FormGroup>
		        <hr />
		        <h4>Thursday</h4>
						<hr />
		        <FormGroup check>
		          <Label check>
		            <Input type="checkbox" onChange={this.handleCheck5Change} />{' '}
		            Unavailable
		          </Label>
		        </FormGroup>
		        <br />
		        <FormGroup>
		          <Label for="start">Start Time</Label>
		          <Input type="select" name="start" id="start" onChange={this.handleStart5Change}>
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
	            <Label for="end">End Time</Label>
	            <Input type="select" name="end" id="end" onChange={this.handleEnd5Change}>
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
		            <option value="21:15">9:15 pm</option>
		            <option value="21:30">9:30 pm</option>
		            <option value="21:45">9:45 pm</option>
		            <option value="22:00">10:00 pm</option>
		            <option value="22:15">10:15 pm</option>
		            <option value="22:30">10:30 pm</option>
		            <option value="22:45">10:45 pm</option>
		            <option value="23:00">11:00 pm</option>
		            <option value="23:15">11:15 pm</option>
		            <option value="23:30">11:30 pm</option>
		            <option value="23:45">11:45 pm</option>
		          </Input>
		        </FormGroup>
		        <hr />
		        <h4>Friday</h4>
						<hr />
		        <FormGroup check>
		          <Label check>
		            <Input type="checkbox" onChange={this.handleCheck6Change} />{' '}
		            Unavailable
		          </Label>
		        </FormGroup>
		        <br />
		        <FormGroup>
		          <Label for="start">Start Time</Label>
		          <Input type="select" name="start" id="start" onChange={this.handleStart6Change}>
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
	            <Label for="end">End Time</Label>
	            <Input type="select" name="end" id="end" onChange={this.handleEnd6Change}>
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
		            <option value="21:15">9:15 pm</option>
		            <option value="21:30">9:30 pm</option>
		            <option value="21:45">9:45 pm</option>
		            <option value="22:00">10:00 pm</option>
		            <option value="22:15">10:15 pm</option>
		            <option value="22:30">10:30 pm</option>
		            <option value="22:45">10:45 pm</option>
		            <option value="23:00">11:00 pm</option>
		            <option value="23:15">11:15 pm</option>
		            <option value="23:30">11:30 pm</option>
		            <option value="23:45">11:45 pm</option>
		          </Input>
		        </FormGroup>
		        <hr />
		        <h4>Saturday</h4>
						<hr />
		        <FormGroup check>
		          <Label check>
		            <Input type="checkbox" onChange={this.handleCheck7Change} />{' '}
		            Unavailable
		          </Label>
		        </FormGroup>
		        <br />
		        <FormGroup>
		          <Label for="start">Start Time</Label>
		          <Input type="select" name="start" id="start" onChange={this.handleStart7Change}>
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
	            <Label for="end">End Time</Label>
	            <Input type="select" name="end" id="end" onChange={this.handleEnd7Change}>
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
		            <option value="21:15">9:15 pm</option>
		            <option value="21:30">9:30 pm</option>
		            <option value="21:45">9:45 pm</option>
		            <option value="22:00">10:00 pm</option>
		            <option value="22:15">10:15 pm</option>
		            <option value="22:30">10:30 pm</option>
		            <option value="22:45">10:45 pm</option>
		            <option value="23:00">11:00 pm</option>
		            <option value="23:15">11:15 pm</option>
		            <option value="23:30">11:30 pm</option>
		            <option value="23:45">11:45 pm</option>
		          </Input>
		        </FormGroup>
		        <hr />
		        <Button color="success" type="submit" block onClick={this.handleSubmit}>Set Availability</Button>
		      </Form>
		      <br />
		      <br />
				</div>
			</div>
		)
	}

}

export default Availability