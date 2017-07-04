import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from './Styles/ItemStyle'

export default class Item extends Component {
  render () {
    const { task } = this.props
    return (
      <View style={styles.rowContainer}>
        <View style={styles.checkbox} />
        <Text style={styles.taskStyle}>{task}</Text>
      </View>
    )
  }
}
