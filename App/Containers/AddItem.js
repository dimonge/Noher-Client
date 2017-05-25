import React, { Component } from 'react';
import { connect } from 'react-redux';

import Fields from '../Components/Fields';

class AddItem extends Component {
  render() {
    return <Fields {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
