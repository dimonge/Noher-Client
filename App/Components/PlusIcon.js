import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from './Styles/PlusIconStyle'

export default class PlusIcon extends Component {
  render () {
    return (
      <View style={styles.circle}>
        <Text style={styles.plus}>+</Text>
      </View>
    )
  }
}
