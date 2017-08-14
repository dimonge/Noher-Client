import React from 'react'
import {
  TextInput,
  View,
  TouchableHighlight
} from 'react-native'
import styles from './Styles/InputFieldStyle'
import I18n from 'react-native-i18n'
import {
  Colors,
  Metrics
} from '../Themes'
import Icon from 'react-native-vector-icons/Ionicons'

let counter = 11

export default class InputField extends React.Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }
  }
  handlePress = () => {
    // const { onAdd } = this.props
    let payload = {
      id: counter++,
      task: this.state.value,
      completed: false
    }

    this.props.onAdd(payload)
    this.setState({value: ''})
  }
  _handleSubmitEditing = () => {
    this.props.onSubmitEditing()
    this.handlePress()
  }
  handleFocus () {
    this._todoInput.focus()
  }
  render () {
    // const { onSubmitEditing } = this.props;

    return (
      <View style={styles.textInputContainer}>
        <TouchableHighlight style={styles.addButtonStyle} onPress={this.handleFocus.bind(this)}>
          <Icon size={Metrics.doubleBaseMargin} name='ios-add-circle' color={Colors.addCircle} />
        </TouchableHighlight>
        <TextInput
          style={styles.taskInput}
          placeholder={this.state.value.length ? null : I18n.t('taskInputPlaceholder')}
          placeholderTextColor={this.state.value.length ? null : Colors.addCircle}
          ref={(r) => { this._todoInput = r }}
          onChangeText={(value) => this.setState({value})}
          onSubmitEditing={this._handleSubmitEditing}
          value={this.state.value}
        />
      </View>
    )
  }
}
