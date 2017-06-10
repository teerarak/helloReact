import React, { Component } from 'react'
class Footer extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false
    }
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
        button = <button className="btn-flat" onClick={this.handleLogoutClick.bind(this)}>logout</button>
    } else {
        button = <button className="btn-flat" onClick={this.handleLoginClick.bind(this)}>login</button>
    }
    return (
      <div>
        {button}
      </div>
    );
  }
}
export default Footer
