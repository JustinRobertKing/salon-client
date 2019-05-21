import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return(
        <div>
          <footer className="footer">
            <Nav user={this.state.user} resetUser={this.resetUser}  />
          </footer>
        </div>
      );
  }
}

export default Footer;
