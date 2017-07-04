import React, {Component} from 'react'
import {
  View,
  ActivityIndicator
} from 'react-native'
import styles from './Styles/ProgressBarStyles'
export default class ProgressBar extends Component {
  render () {
    return (<View style={styles.container}>
      <ActivityIndicator
        style={styles.indicator}
        color='black'
        animating={!this.props.request}
                />
    </View>)
  }
}
ProgressBar.propTypes = {
  animating: React.PropTypes.bool
}
