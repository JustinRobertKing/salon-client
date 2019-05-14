import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ConsultationForm extends Component {
	
	componentDidMount() {
    
}

checkUploadResult = (resultEvent) => {
	if (resultEvent.event === 'success') {
		console.log(resultEvent)
		for (var i=0;i<resultEvent.length;i++){
      let u = 'img_'+(i+1)
      console.log(u)
		}
	
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

		

		return (
			 <div className="container">
				 <Form>
					<FormGroup>
	          <Label for="exampleFile">File</Label>
	          <Input type="file" name="file" id="exampleFile" />
	          <FormText color="muted">
	            Current hair photos
	          </FormText>
	          	
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