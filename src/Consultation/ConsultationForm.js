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
	profileImg: [],
}


checkUploadResult = (resultEvent) => {
	if (resultEvent.event === 'success') {


		// imgArr.push(resultEvent)

		console.log('resultEvent:',resultEvent.info.secure_url)
		// this.setState({profileImg: resultEvent.info.secure_url})

		this.setState({ profileImg: [...this.state.profileImg, resultEvent.info.secure_url] })

		//loop through the uploaded images and do something with them
		// imgArr.forEach((result,i)=>{
		// 	console.log('url:',result.info.secure_url)
			
		// 	console.log('profileIMG', this.state.profileImg)
		// })

	}

}





showWidget = (widget) => {
			window.cloudinary.openUploadWidget({
		  cloudName: 'dttbrg8ur', 
		  uploadPreset: 'mj03dwg3'}, 
		  (error, result) => {this.checkUploadResult(result)}
		)
}

	render() {

 let items = this.state.profileImg.map((item, i) => <div key={i}><img src={item} alt="Before Hair" key={ i } /></div>)
 console.log('in the render---->',this.state.profileImg)

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
         				<Button onClick={this.showWidget}>Upload Photo </Button>
         			</div>
	        </FormGroup>        
	        <FormGroup>
	          <Label for="exampleFile">File</Label>
	          <Input type="file" name="file" id="exampleFile" />
	          <FormText color="muted">
	            Dream hair photos
	          </FormText>
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