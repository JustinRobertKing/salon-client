import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constants/server';
import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      referral: '',
      phone: '',
      stylist: false

    };
  }

  handleFirstnameChange = (e) => { this.setState({ firstname: e.target.value }); }

  handleLastnameChange = (e) => { this.setState({ lastname: e.target.value }); }

  handleReferralChange = (e) => { this.setState({ referral: e.target.value }); }

  handlePhoneChange = (e) => { this.setState({ phone: e.target.value }); }

  handleEmailChange = (e) => { this.setState({ email: e.target.value }); }

  handlePasswordChange = (e) => { this.setState({ password: e.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/auth/signup`, this.state)
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
    if(this.props.user){
      return (<Redirect to="/profile" />);
    }
    return(
    	<div>
	    	<h2>Create Account</h2>
	    	<Form onSubmit={this.handleSubmit}>
				{/* referal code */}
					<FormGroup>
	        	<Label for="referral">Referral code</Label>
	        	<Input type="text" name="referral" id="referral" placeholder="" value={this.state.referral} onChange={this.handleReferralChange}/>
	        </FormGroup>
	    	{/* first name */}
		    	<FormGroup>
	        	<Label for="firstname">First name</Label>
	        	<Input type="text" name="firstname" id="firstname" placeholder="" value={this.state.firstname} onChange={this.handleFirstnameChange}/>
	        </FormGroup>
				{/* last name */}
					<FormGroup>
	        	<Label for="lastname">Last name</Label>
	        	<Input type="text" name="lastname" id="lastname" placeholder="" value={this.state.lastname} onChange={this.handleLastnameChange}/>
	        </FormGroup>
	      {/* last name */}
					<FormGroup>
	        	<Label for="lastname">Phone number</Label>
	        	<Input type="text" name="phone" id="phone" placeholder="" value={this.state.phone} onChange={this.handlePhoneChange}/>
	        </FormGroup>
		 		{/* email */}
			    <FormGroup>
	        	<Label for="exampleEmail">Email</Label>
	        	<Input type="email" name="email" id="exampleEmail" placeholder="" value={this.state.email} onChange={this.handleEmailChange}/>
			    </FormGroup>
				{/* password */}
			    <FormGroup>
	        	<Label for="examplePassword">Password</Label>
	        	<Input type="password" name="password" id="examplePassword" placeholder="" value={this.state.password} onChange={this.handlePasswordChange}/>
			    </FormGroup>
				{/* stylist or client  radio */}
				{/*based on the referal code, hide this, and make the selection for them*/}
					<FormGroup> 
	          <Label for="exampleCheckbox">Account type</Label>
	          <div>
	            <CustomInput type="radio" id="accountType" label="Client" value="false" name="stylist" inline />
	            <CustomInput type="radio" id="accountType" label="Stylist" value="true" name="stylist" inline />
	          </div>
	        </FormGroup>
				{/* submit button */}
		    	<Button>Submit</Button>
		    </Form>
      </div>
    );
  }
}

export default Signup;
