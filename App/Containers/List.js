import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lists from '../Components/Lists';
import AddNew from '../Components/AddNew';
import {
  View
} from 'react-native';

class List extends Component {
  render() {
    render (
    <View>
      <Lists {...this.props}/>
      <AddNew />
    </View>
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(List);
