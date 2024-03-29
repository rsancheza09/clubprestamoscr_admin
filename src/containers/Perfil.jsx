import React, { Component } from 'react';
import autobind from 'react-autobind';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as MainActionCreators from '../actions/';

class Perfil extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators({
      MainActionCreators,
    }, dispatch);
    autobind(this);
  }
  render() {
    return (
      <div className="profile">
        Perfil
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing.location,
  authData: state.user,
});

export default withRouter(connect(mapStateToProps)(Perfil));
