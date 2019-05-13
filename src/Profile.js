import React, { Component } from 'react';
import Client from './Client'
import Stylist from './Stylist'

class Profile extends Component {
  render() {
    if(this.props.user){
      return (
          <div>
            <h2>{this.props.user.name}</h2>
            <h4>{this.props.user.email}</h4>
            <hr />
            <Client />
            <Stylist />
          </div>
        );
    }
    return(
      <div>
        <p>This is a profile page. You must be logged in to see it.</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
      );
  }
}

export default Profile;
