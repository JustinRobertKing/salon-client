import React, { Component } from 'react';

class Profile extends Component {
	handleLogout = (e) => {
    e.preventDefault();
    // REMOVE LS TOKEN; UPDATE PARENT STATE
    localStorage.removeItem('serverToken')
    this.props.resetUser()
  }
  render() {
    if (this.props.user) {
      return(

        <div className="container">
          <h4>firstname: {this.props.user.firstname}</h4>
          <h4>lastname: {this.props.user.lastname}</h4>
          <h4>referral: {this.props.user.referral}</h4>
          <h4>phone: {this.props.user.phone}</h4>
          <h4>email: {this.props.user.email}</h4>
          <h4>stylist: {this.props.user.stylist}</h4>
          <a href='/logout' onClick={this.handleLogout}>Logout</a>
          <hr />
          <br />
          <br />
        </div>
      )
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
