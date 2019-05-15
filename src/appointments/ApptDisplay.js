import React, { Component } from 'react'
import axios from 'axios';
import SERVER_URL from '../constants/server';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import ReactDOM from 'react-dom';

class Display extends Component {
	constructor(props){
    super(props);
    this.state = {
      products: '',
      apptLength: '',
      estimate: '',
      stylistComment: '',
      appointmentID: this.props.appointment._id
    };
  }

  handleProductsChange = (e) => { this.setState({ products: e.target.value }); }

  handleTimeChange = (e) => { 
  	let timeArr = e.target.value.split(':')
  	let seconds = (timeArr[0] * 3600) + (timeArr[1] * 60)
  	this.setState({ apptLength: seconds }); 
  }

  handleCostChange = (e) => { this.setState({ estimate: e.target.value }); }

  handleStylistCommentChange = (e) => { this.setState({ stylistComment: e.target.value }); }

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
		return (
			<div>
				This is an appointment detail stub
			</div>
		)
	}
}

export default Display