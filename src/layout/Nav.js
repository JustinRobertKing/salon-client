import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    // REMOVE LS TOKEN; UPDATE PARENT STATE
    localStorage.removeItem('serverToken')
    this.props.resetUser()
  }

  render() {
    // let links = '';
    if(this.props.user){
      
    
    return(
        <div>
          <nav className="nav">
            <span>
            	<Link to="/">Home</Link>
            	{this.props.user.stylist ?<Link to="/schedule">Schedule</Link>:'' }
            </span>
            <span>
              <Link to="/profile">Me</Link>
            </span>
          </nav>
          <header className="App-header">
            <h6 className="welcome">Welcome, {this.props.user.firstname} </h6>
          </header>
        </div>
      );
    }
    return(<div></div>)

    }
  }


export default Nav;
