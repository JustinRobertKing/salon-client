import React, { Component } from 'react'
import axios from 'axios';
import SERVER_URL from '../constants/server';
import { Button, FormText } from 'reactstrap';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Display extends Component {
	constructor(props){
    super(props);
    this.state = {
      products: '',
      apptLength: '',
      estimate: '',
      stylistComment: '',
      consultationID: this.props.consultation._id,
      stylistNotes: this.props.stylistNotes
    };
  }
 	delete = () =>{
  	console.log('DELETING consultation-----', this.props.consultation[0]._id)
	  let token = localStorage.getItem('serverToken');

	  // SEND DATA TO SERVER
	  // axios.delete(url, {data:{username:"user", password:"pass"}, headers:{Authorization: "token"}})

	  axios.delete(`${SERVER_URL}/consultation`, {data:{_id:this.props.consultation[0]._id,}, headers: {'Authorization' : `Bearer ${token}`}})
	  
	  // this.props.getConsultations()

  }


	render() {
		console.log("this is on displayclient, checking props.consultation------>",this.props.consultation)
		let currentPhotos = this.props.consultation[0].currentHair.map((c, i) => {
			return (
				<div key={i}>
	        <img src={c} alt="Before Hair" />
	      </div>
	    )
		})
		let dreamPhotos = this.props.consultation[0].dreamHair.map((d, i) => {
			return (
				<div key={i}>
	        <img src={d} alt="Dream Hair" />
	      </div>
      )
		})
		let stylistNotes 
		if (this.props.stylistNotes === true){
			stylistNotes=(
				//show the rest of the consultation record
				<div>
				<hr />
					<h4> Stylist Notes </h4>
					<FormText color="muted">
	        	Stylist Comment
	        </FormText>
					<p>
						{this.props.consultation[0].stylistComment}
					</p>
					<FormText color="muted">
	        	Estimate
	        </FormText>
					<p>
						${this.props.consultation[0].estimate}
					</p>
					<FormText color="muted">
	        	Appointment Length
	        </FormText>
					<p>
						{this.props.consultation[0].apptLength} (RUN THIS THROUGH A CONVERSION FUNCTION)
					</p>
					{/*schedule link*/}
				</div>

				)
		}

		return (
			<div>
			{stylistNotes}
			<Button block id="yes" onClick={()=>{console.log('LETS BOOK THIS SHIT')}}>Yes! Let's book it!</Button>
			{/*approve and schedule button*/}
			{}
			<hr />
			<h4>Your Notes</h4>
				<FormText color="muted">
          Current hair photos
        </FormText>
        <Carousel>
          {currentPhotos}
        </Carousel>
			
				<FormText color="muted">
          Dream hair photos
        </FormText>
        <Carousel>
          {dreamPhotos}
        </Carousel>
				
				<FormText color="muted">
          Your comments
        </FormText>
				<p>
					{this.props.consultation[0].clientComment}
				</p>
					<Button block onClick={()=>{this.delete()}} color="danger"> Cancel Consultation </Button>
			</div>
		)
	}
}

export default Display