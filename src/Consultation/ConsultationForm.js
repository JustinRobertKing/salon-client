import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ConsultationForm extends Component {
	
	render() {
		return (
			 <Form>
				{/*<FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" value />
          <FormText color="muted">
            Current hair photos
          </FormText>
        </FormGroup>        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Dream hair photos
          </FormText>
        </FormGroup>*/}
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
		)
	}

}

export default ConsultationForm