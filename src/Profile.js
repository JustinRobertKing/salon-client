import React, { Component } from 'react';
import axios from 'axios';
import Client from './Client'
import Stylist from './Stylist'
import Display from './Consultation/Display'
import SERVER_URL from './constants/server';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

class Profile extends Component {
  state = {
    consultations: [],
    current: {}
  }

  componentDidMount() {
    this.getConsultations()
  }

  getConsultations = () => {
    let token = localStorage.getItem('serverToken');
    // SEND DATA TO SERVER
    axios.get(`${SERVER_URL}/profile`, {
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('consultation response', response)
      this.setState({ consultations: response.data})
    })
    .catch(error => {
      console.log('error', error)
    })
  }

  setCurrentConsultation = (consultation) => {
    this.setState({ current: consultation })
  }
  render() {
    console.log(this.state.consultations)
    
    if (this.props.user && this.props.user.stylist) {
      let requests = this.state.consultations.map((consultation, index) => {
        return (
          <div key={index}>
            <Button color="primary" id={'toggler' + index} block style={{ marginBottom: '.5rem' }}>
              Toggle
            </Button>
            <UncontrolledCollapse toggler={'#toggler' + index}>
              <Display 
                consultation={consultation}
                rerender={this.getConsultations}
                setCurrentConsultation={this.setCurrentConsultation}
                currentId={this.state.current._id}
              />
            </UncontrolledCollapse>
          </div>
        )
      })
      return(
        <div className="container">
          <h4>Stylist Page</h4>
          <hr />
          <h4>Pending Consultations</h4>
          {requests}
          <hr />
{/*          <Stylist />
*/}          <br />
          <br />
          <br />
        </div>
      );
    } else if (this.props.user) {
      return(
        <div className="container">
          <h4>firstname: {this.props.user.firstname}</h4>
          <h4>lastname: {this.props.user.lastname}</h4>
          <h4>referral: {this.props.user.referral}</h4>
          <h4>phone: {this.props.user.phone}</h4>
          <h4>email: {this.props.user.email}</h4>
          <h4>stylist: {this.props.user.stylist}</h4>
          <hr />
          <Client />
          <br />
          <br />
          <br />
        </div>
      );
    }
    return(
      <div className="container">
        <p>This is a profile page. You must be logged in to see it.</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
    );
  }
}

export default Profile;
