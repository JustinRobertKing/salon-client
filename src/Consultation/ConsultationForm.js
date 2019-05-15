import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class ConsultationForm extends Component {

componentDidMount(){
	// let items = ''
	// console.log('items', items)
	// let imgArr=[]
}

state ={
	currentHair: [],
	dreamHair: [],
}


checkUploadResult = (resultEvent) => {
	if (resultEvent.event === 'success') {
		console.log('resultEvent:',resultEvent.info.secure_url)
		this.setState({ currentHair: [...this.state.currentHair, resultEvent.info.secure_url] })
	}

}

checkUploadResult2 = (resultEvent) => {
	if (resultEvent.event === 'success') {
		console.log('resultEvent:',resultEvent.info.secure_url)
		this.setState({ dreamHair: [...this.state.dreamHair, resultEvent.info.secure_url] })
	}

}




showWidget = (widget) => {
			window.cloudinary.openUploadWidget({
		  cloudName: 'dttbrg8ur', 
		  uploadPreset: 'mj03dwg3'}, 
		  (error, result) => {this.checkUploadResult(result)}
		)
}
showWidget2 = (widget) => {
			window.cloudinary.openUploadWidget({
		  cloudName: 'dttbrg8ur', 
		  uploadPreset: 'mj03dwg3'}, 
		  (error, result) => {this.checkUploadResult2(result)}
		)
}
	render() {

 	let items = this.state.currentHair.map((item, i) => <div key={i}><img src={item} alt="Before Hair" key={ i } /></div>)
 	console.log('in the render---->',this.state.currentHair)
	
	let items2 = this.state.dreamHair.map((item, i) => <div key={i}><img src={item} alt="Before Hair" key={ i } /></div>)
 	console.log('in the render---->',this.state.dreamHair)

	
		return (
			 <div className="container">
				 <Form>
					<FormGroup>
	          <FormText color="muted">
	            Current hair photos
	          </FormText>
	          	<div id="currentHair">
		          	<Carousel>
				         { items }
								</Carousel>
	          	</div>
         			<div id="photo-form-container">
         				<Button onClick={this.showWidget}>Upload Photos </Button>
         			</div>
	        </FormGroup>        
	        <FormGroup>
	          <FormText color="muted">
	            Dream hair photos
	          </FormText>
	          <div id="dreamHair">
		        	<Carousel>
					      { items2 }
							</Carousel>
						</div>
	          <div id="photo-form-container2">
         			<Button onClick={this.showWidget2}>Upload Photos </Button>
         		</div>
	        </FormGroup>
	        <FormGroup>
	          <Label for="exampleText">Text Area</Label>
	          <Input type="textarea" name="text" id="exampleText" />
	        </FormGroup>
	        <Button>Submit</Button>
	      </Form>
	      



			</div>
		)
	}

}

export default ConsultationForm