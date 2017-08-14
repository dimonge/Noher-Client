import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native'
import styles from './Styles/ItemStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import { Metrics, Colors } from '../Themes'

export default class Item extends Component {
  handlePress = () => {
    console.log(this.props)
    const { todo, onCheck } = this.props
    onCheck(todo.id, {completed: !todo.completed})
  }
  render () {
    const { todo } = this.props
    return (
      <View style={styles.rowContainer}>
        <TouchableHighlight
          underlayColor={Colors.transparent}
          onPress={this.handlePress}>
          {todo.completed
            ? <Icon size={Metrics.doubleBaseMargin} color={Colors.checkbox} name='ios-checkmark-circle' />
            : <View style={styles.checkbox} /> }
        </TouchableHighlight>
        <Text style={[styles.taskStyle, todo.completed ? styles.completedText : null]}>{todo.task}</Text>
      </View>
    )
  }
}
