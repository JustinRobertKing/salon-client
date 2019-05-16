import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import SERVER_URL from '../constants/server';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class AppointmentForm extends Component {

componentDidMount(){
	// let items = ''
	// console.log('items', items)
	// let imgArr=[]
	console.log('')
	console.log('')
	console.log('hey')
	console.log('')
	console.log('')
	console.log(this.props.user.id)
	console.log('')
	console.log('')
	this.getClient()


}

  getClient = () => {
    let token = localStorage.getItem('serverToken');
    // SEND DATA TO SERVER
    axios.get(`${SERVER_URL}/landing/client`, {
      headers: {
        'Authorization' : `Bearer ${token}`
      },
    })
    .then(response => {
      console.log('Client response:', response)

      console.log('Client response: stylist', response.data.stylist)
      this.setState({ stylist: response.data.stylist})
    })
    .catch(error => {
      console.log('error', error)
    })
  }

	state ={
		start: 0,
	}

	handleProductsChange = (e) => { this.setState({ products: e.target.value }); }

	handleTimeChange = (e) => { 
		let timeArr = e.target.value.split(':')
		let seconds = (timeArr[0] * 3600) + (timeArr[1] * 60)
		this.setState({ apptLength: seconds }); 
	}

	handleCostChange = (e) => { this.setState({ estimate: e.target.value }); }

	handleStylistCommentChange = (e) => { this.setState({ stylistComment: e.target.value }); }

	render() {
		return (
			 <div>
				<Form onSubmit={this.handleSubmit}>
	        <FormGroup>
          <Label for="start">Time Required</Label>
          <Input type="select" name="start" id="start" onChange={this.handleTimeChange}>
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
	          <Label for="estimate">Estimated Cost</Label>
	          <Input type="text" name="estimate" id="estimate" value={this.state.estimate} onChange={this.handleCostChange}/>
	        </FormGroup>
	       {/* <FormGroup check>
	          <Label check>
	            <Input type="checkbox" name="cut" value="cut"/>{' '}
	            Cut
	          </Label>
	        </FormGroup>
	        <FormGroup check>
	          <Label check>
	            <Input type="checkbox" name="color" value="color"/>{' '}
	            Color
	          </Label>
	        </FormGroup>*/}
	        <FormGroup>
	          <Label for="stylistComment">Process Description</Label>
	          <Input type="textarea" name="stylistComment" id="stylistComment" value={this.state.stylistComment} onChange={this.handleStylistCommentChange}/>
	        </FormGroup>
	        <Button color="success" type="submit" >Approve and Send</Button>
	      </Form>
	      <br />
	      <br />
			</div>
		)
	}
}

export default AppointmentForm