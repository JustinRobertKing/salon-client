import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Profile extends Component {
	handleLogout = (e) => {
    e.preventDefault();
    // REMOVE LS TOKEN; UPDATE PARENT STATE
    localStorage.removeItem('serverToken')
    this.props.resetUser()
    //redirect to home
		

  }
  render() {

    if (this.props.user) {
      return(

        <div className="container">
        <div>
        	<h1>Your Profile</h1>
        </div>
          <div>
          	<h5 className="inlineStuff thin">First name:</h5><h4 className="inlineStuff"> {this.props.user.firstname}</h4>
          </div>
          <div>
          	<h5 className="inlineStuff thin">Last name: </h5><h4 className="inlineStuff">{this.props.user.lastname}</h4>
          </div>
          <div>
          	<h5 className="inlineStuff thin">Referral: </h5><h4 className="inlineStuff">{this.props.user.referral}</h4>
          </div>
          <div>
          	<h5 className="inlineStuff thin">Phone: </h5><h4 className="inlineStuff">{this.props.user.phone}</h4>
          </div>
          <div>
          	<h5 className="inlineStuff thin">E-mail: </h5><h4 className="inlineStuff">{this.props.user.email}</h4>
          </div>
          {this.props.user && !this.props.user.stylist ? <div><h5 className="inlineStuff thin">Stylist: </h5><h4 className="inlineStuff">{this.props.user.stylist}</h4></div> : ''}
                    <hr />

          <a href='/logout' className="tall" onClick={this.handleLogout}>Logout</a>
          <br />
          <br />
        </div>
      )
    }
    return(
      <Redirect to="/" />
    );
  }
}

export default Profile;
