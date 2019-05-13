import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Display extends Component {
	render() {
		return (
			<div>
				<h3>Before photos carousel goes here</h3>
				<hr />
				<h3>Dream photos carousel goes here</h3>
				<hr />
				<p>Kevin pork chop meatloaf ball tip, pork loin ham bacon. Ground round andouille jowl landjaeger meatloaf frankfurter doner swine cow chuck prosciutto. Chicken ham hamburger sausage, fatback cow sirloin rump meatball ham hock pork loin kevin porchetta flank. Burgdoggen venison hamburger short ribs, sausage ham jerky tongue beef ribs rump doner filet mignon. Venison ribeye bresaola tri-tip, biltong pastrami prosciutto kielbasa pork loin swine capicola brisket hamburger doner.
				</p>
				<Form>
	        <FormGroup>
	          <Label for="products">Products</Label>
	          <Input type="text" name="products" id="products" />
	        </FormGroup>
	        <FormGroup>
	          <Label for="time">Time Required</Label>
	          <Input type="text" name="time" id="time" />
	        </FormGroup>
 					<FormGroup>
	          <Label for="cost">Estimated Cost</Label>
	          <Input type="text" name="cost" id="cost" />
	        </FormGroup>
	        <FormGroup check>
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
	        </FormGroup>
	        <FormGroup>
	          <Label for="stylistComment">Process Description</Label>
	          <Input type="textarea" name="stylistComment" id="stylistComment" />
	        </FormGroup>
	        <Button>Submit</Button>
	      </Form>
			</div>
		)
	}
}

export default Display