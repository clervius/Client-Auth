import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions';

class SignOut extends Component {
  componentWillMount() {
    this.props.signOutUser();
  }

  render() {
    return (
      <div>You have signed out</div>
    );
  }
}

export default connect(null, { logout })(SignOut);
