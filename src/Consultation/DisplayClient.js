import React, { Component } from 'react'
import axios from 'axios';
import SERVER_URL from '../constants/server';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
      consultationID: this.props.consultation._id
    };
  }
  
deleteConsultation = (e) => {
	e.preventDefault()
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

		return (
			<div>
				<FormText color="muted">
          Current hair photos
        </FormText>
        <Carousel>
          {currentPhotos}
        </Carousel>
				<hr />
				<FormText color="muted">
          Dream hair photos
        </FormText>
        <Carousel>
          {dreamPhotos}
        </Carousel>
				<hr />
				<FormText color="muted">
          Your comments
        </FormText>
				<p>
					{this.props.consultation[0].clientComment}
				</p>
				<Form onSubmit={this.deleteConsultation}>
					<Button block color="danger"> Cancel Consultation </Button>
				</Form>
			</div>
		)
	}
}

export default Display