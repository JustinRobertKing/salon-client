import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constants/server';
import { Card, CardBody, Tooltip, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import logo from './../cutcolor.png';
import { Link } from 'react-router-dom';


class Signup extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      referral: '',
      phone: '',
      stylist: false,
      tooltipOpen: false,
      referralLink: ''


    };
  }



 toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }



  handleFirstnameChange = (e) => { this.setState({ firstname: e.target.value }); }

  handleLastnameChange = (e) => { this.setState({ lastname: e.target.value }); }

  handleReferralLinkChange = (e) => { this.setState({ referralLink: e.target.value }); }

  handlePhoneChange = (e) => { this.setState({ phone: e.target.value }); }

  handleEmailChange = (e) => { this.setState({ email: e.target.value }); }

  handlePasswordChange = (e) => { this.setState({ password: e.target.value }); }

  handleStylistChange = (e) => { this.setState({ stylist: e.target.value }); }


  handleSubmit = (e) => {
    e.preventDefault();

    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/auth/signup`, this.state)
    .then(response => {
    	console.log('response: ', response)
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
    	<div className="container">


        <div className="loginCenter">
      		<img src={logo} className="App-logo" alt="logo" />
      			<Card  className="signUpCard">
	      			<CardBody>


	    	<h2>Create Account</h2>
	    	<Link className="backLogin" to="/login">Back to login</Link>
	    	<br />
	    	<br />
	    	<Form onSubmit={this.handleSubmit}>
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
	      {/* referal code */}
					<FormGroup>
	        	<Label for="referralLink">
	        		Referral code (<span id="TooltipExample">optional</span>)
	        		<Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
			          This is how we connect you with your stylist, or your salon.  Make sure to ask your stylist or salon for their code, you can enter it on your profile later, if you wish.
			        </Tooltip>
	        	</Label>
	        	<Input type="text" name="referralLink" id="referralLink" placeholder="" value={this.state.referralLink} onChange={this.handleReferralLinkChange}/>
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
	            <CustomInput type="radio" id="accountTypeF" label="Client" value='false' onChange={this.handleStylistChange} name="stylist" inline />
	            <CustomInput type="radio" id="accountTypeT" label="Stylist" value='true' onChange={this.handleStylistChange} name="stylist" inline />
	          </div>
	        </FormGroup>
				{/* submit button */}
		    	<Button>Submit</Button>

		    </Form>

		    </CardBody>
		    </Card>
		    <br />
		    </div>
      </div>
    );
  }
}

export default Signup;
