import React from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/AddTaskStyle'
import I18n from 'react-native-i18n'
import {
  Colors
} from '../Themes'
import FullButton from '../Components/FullButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
class AddTaskScreen extends React.Component {
  constructor (props) {
    super(props)
    const groups = [
      { name: 'Home', color: Colors.fire },
      { name: 'Work', color: Colors.facebook },
      { name: 'Personal', color: Colors.error },
      { name: 'Free time', color: Colors.bloodOrange }
    ]
    this.state = {
      groups: groups
    }
  }
  renderGroup () {
    return this.state.groups.map(group => {
      return (
        <TouchableOpacity key={group.name} style={styles.groupStyle} onPress={this.props.onPress}>
          <View style={[styles.groupColor, {backgroundColor: group.color}]} />
          <Text style={styles.groupLabel}>{group.name}</Text>
        </TouchableOpacity>
      )
    })
  }
  // Text input field { horizantal scrolling buttons}
  render () {
    return (
      <KeyboardAwareScrollView
        keyboardDismissMode='interactive'
        keyboardShouldPersistTaps={false}
        getTextInputRefs={() => {
          return [this._taskInput]
        }}
        style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.taskInput}
            placeholder={I18n.t('taskInputPlaceholder')}
            // onSubmitEditing={}
            autoFocus
            placeholderTextColor={Colors.lightgray}
            multiline
            numberOfLines={4}
            ref={(r) => { this._taskInput = r }}
            />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.groupContainer}>
          {this.renderGroup()}
        </ScrollView>
        <View style={styles.buttonStyle}>
          <FullButton text={I18n.t('taskButton')} />
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default connect()(AddTaskScreen)
