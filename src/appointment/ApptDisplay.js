import React, { Component } from 'react'
import axios from 'axios';
import SERVER_URL from '../constants/server';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import ReactDOM from 'react-dom';

class Display extends Component {
  constructor(props){
    super(props);
    this.state = {
      apptTime: '',
      apptLength: '',
      client: '',
      service: '',
      appointmentID: this.props.appointment._id
    };
  }

  handleTimeChange = (e) => { 
    let timeArr = e.target.value.split(':')
    let seconds = (timeArr[0] * 3600) + (timeArr[1] * 60)
    this.setState({ apptLength: seconds }); 
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('HERE - handle submit', this.state)
    let token = localStorage.getItem('serverToken');
    // SEND DATA TO SERVER
    axios.put(`${SERVER_URL}/consultation/display`, this.state, {
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('consultation response', response)
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
        <h4>*** POPULATE NAME ***</h4>
        <h4>{this.props.appointment.start}</h4>
        <h4>Butts</h4>
      </div>
    )
  }
}

export default Display