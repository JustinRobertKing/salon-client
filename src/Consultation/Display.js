import React, { Component } from 'react'
import axios from 'axios';
import SERVER_URL from '../constants/server';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Display extends Component {
	constructor(props){
    super(props);
    this.state = {
      products: '',
      time: '',
      cost: '',
      stylistComment: ''
    };
  }

  handleProductsChange = (e) => { this.setState({ products: e.target.value }); }

  handleTimeChange = (e) => { this.setState({ time: e.target.value }); }

  handleCostChange = (e) => { this.setState({ cost: e.target.value }); }

  handleStylistCommentChange = (e) => { this.setState({ stylistComment: e.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/consultation/display`, this.state)
    .then(response => {
      // Set response.data.token to local storage
      localStorage.setItem('serverToken', response.data.token);
      // Update the user in parent component
      this.props.getUser()
    })
    .catch(error => {
      console.log('error', error)
    })
  }

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
	          <Input type="text" name="products" id="products" value={this.state.products} onChange={this.handleProductsChange}/>
	        </FormGroup>
	        <FormGroup>
	          <Label for="time">Time Required</Label>
	          <Input type="text" name="time" id="time" value={this.state.time} onChange={this.handleTimeChange}/>
	        </FormGroup>
 					<FormGroup>
	          <Label for="cost">Estimated Cost</Label>
	          <Input type="text" name="cost" id="cost" value={this.state.cost} onChange={this.handleCostChange}/>
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
	          <Input type="textarea" name="stylistComment" id="stylistComment" value={this.state.stylistComment} onChange={this.handleStylistCommentChange}/>
	        </FormGroup>
	        <Button>Submit</Button>
	      </Form>
			</div>
		)
	}
}

export default Display