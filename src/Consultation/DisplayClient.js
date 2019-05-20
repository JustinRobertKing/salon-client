import React, { Component } from 'react'
import axios from 'axios';
import SERVER_URL from '../constants/server';
import { Card, CardBody, Button, FormText } from 'reactstrap';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'

class Display extends Component {
	constructor(props){
    super(props);

    this.state = {
    	index: this.props.index,
      products: '',
      apptLength: this.props.consultation[this.props.index].apptLength ? new Date(this.props.consultation[this.props.index].apptLength).toISOString().substr(11, 8).split(':') : '',
      estimate: '',
      stylistComment: '',
      consultationID: this.props.consultation._id,
      stylistNotes: this.props.stylistNotes,
      noCancel: this.props.noCancel
      
    };
  }
 	delete = (i) =>{
	  let token = localStorage.getItem('serverToken');

	  // SEND DATA TO SERVER
	  axios.delete(`${SERVER_URL}/consultation`, {data:{_id:this.props.consultation[i]._id,}, headers: {'Authorization' : `Bearer ${token}`}})
	  .then (response=>{
	  	console.log('delete .then')
	  	  this.props.componentReload()
	  })
	

  }

	render() {
		// console.log('HEEEEEEEEEEEYYYYYYYY INDEX',this.state.index)
		//make sure there is a consultation
		if (this.props.consultation[this.state.index]){
		console.log('-Display Client - this.props.consultation',this.props.consultation[this.state.index])
			let currentPhotos = this.props.consultation[this.state.index].currentHair.map((c, i) => {
				return (
					<div key={i}>
		        <img src={c} alt="Before Hair" />
		      </div>
		    )
			})
			let dreamPhotos = this.props.consultation[this.state.index].dreamHair.map((d, i) => {
				return (
					<div key={i}>
		        <img src={d} alt="Dream Hair" />
		      </div>
	      )
			})
			let stylistNotes 

			if (this.props.stylistNotes === true){

				// re-factor this into a component that takes props based on 
				// user type- then re-use on stylist.js
				
				stylistNotes=(
					//show the rest of the consultation record
					<Card className="stylistCard">
			    	<CardBody>
							<h4> Stylist Notes </h4>
							<FormText color="muted">
			        	Stylist Comment
			        </FormText>
							<p>
								{this.props.consultation[this.state.index].stylistComment}
							</p>
							<FormText color="muted">
			        	Estimate
			        </FormText>
							<p>
								${this.props.consultation[this.state.index].estimate}
							</p>
							<FormText color="muted">
			        	Appointment Length
			        </FormText>
							<p>
								{this.state.apptLength[0] + ' hr ' + this.state.apptLength[1] + ' min'}
							</p>
							{/*schedule link*/}
							{/*check if this is a past booking, draw the booking button if false*/}
							{!this.props.noCancel ? <Link to="/schedule"><Button className="hotPink" block id="yes" onClick={()=>{console.log('LETS BOOK THIS SHIT')}}>Yes! Let's book it!</Button></Link> : ''}
						</CardBody>
					</Card>
				)
					

				
					return (
				
				<div>
					{stylistNotes}
					<Card className="clientCard">
			      <CardBody>
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
								{this.props.consultation[this.state.index].clientComment}
							</p>
							{/*draw cancel button if appropriate*/}
								{!this.props.noCancel ? <Button block onClick={()=>{this.delete(this.state.index)}} color="danger"> Cancel Consultation </Button> : ''}
						</CardBody>
					</Card>
				</div>
				
			)
			
			//closes if statement  if(this.props.stylistnotes)
			}

			return (
				<div>
					{stylistNotes}
					<Card className="clientCard">
			      <CardBody>
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
								{this.props.consultation[this.state.index].clientComment}
							</p>
							{/*draw cancel button if appropriate*/}
								{!this.props.noCancel ? <Button block onClick={()=>{this.delete(this.state.index)}} color="danger"> Cancel Consultation </Button> : ''}
						</CardBody>
					</Card>
				</div>	
			)
		//closes if that checks for a consultation
		} else {
			//if that record has been deleted, set the parents state for the start consultation button
			
			return (
			<div></div>
			)
		}
	//closes render	
	}
// closes component
}
export default Display