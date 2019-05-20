import React, { Component } from 'react'
import axios from 'axios';
import SERVER_URL from '../constants/server';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import ReactDOM from 'react-dom';

class Display extends Component {
  constructor(props){
    super(props);
    this.state = {
      apptDate: new Date(this.props.appointment.date).toLocaleDateString(),
      apptStart: new Date(this.props.appointment.start).toLocaleString(),
      apptLength: new Date(this.props.appointment.apptLength).toISOString().substr(11, 8).split(':'),
      client: '',
      service: '',
      appointmentID: this.props.appointment._id
    };
  }

  handleTimeChange = (e) => { 
    let timeArr = e.target.value.split(':')
    let seconds = (timeArr[0] * 3600000) + (timeArr[1] * 60000)
    this.setState({ apptLength: seconds }); 
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('HERE - handle submit', this.state)
    let token = localStorage.getItem('serverToken');
    // SEND DATA TO SERVER
    axios.put(`${SERVER_URL}/appointment/apptdisplay`, this.state, {
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('consultation response', response)

      // close this / redraw stylist.js
      console.log('reload from apptdisply')
      this.props.componentReload()


    })
    .catch(error => {
      console.log('error', error)
    })
  }

  render() {
    let lengthStamp = this.props.appointment.length
    return (
      <div>
        This is an appointment detail stub
        <h4>{this.props.appointment.client.user.firstname + ' ' + this.props.appointment.client.user.lastname}</h4>
        <h4>{this.state.apptStart}</h4>
        <h4>{this.state.apptLength[0] + ' hr ' + this.state.apptLength[1] + ' min'}</h4>
        <Button color="success" block onClick={this.handleSubmit}>Accept</Button>
      </div>
    )
  }
}

export default Display