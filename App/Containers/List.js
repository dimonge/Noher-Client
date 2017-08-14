import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from '../Components/Item'
import TodosActions from '../Redux/TodosRedux'
import I18n from 'react-native-i18n'
import {
  View,
  Text,
  ScrollView,
  Keyboard
} from 'react-native'
import ProgressBar from '../Components/ProgressBar'
import styles from './Styles/ListStyle'
import InputField from '../Components/InputField'
import {Metrics} from '../Themes/'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

class List extends Component {
  componentWillMount () {
    this.props.getTodos()
  }

  handleCheck (data) {
    const { id } = data
    this.props.checkTodo(id)
  }
  _renderRow () {
    const todos = this.props.state.todos
    let rows = []
    if (todos.payload.data && todos.payload.data.items.length > 0) {
      todos.payload.data.items.forEach(todo => {
        rows.push(
          <Item
            key={todo.id}
            onCheck={this.props.checkTodo}
            checked={todo.completed}
            todo={todo}
          />
        )
      })
      return rows
    }
    return rows
  }
  _handleOnSubmit () {
    Keyboard.dismiss()
    this._todolist.scrollToEnd()
  }
  render () {
    const todos = this.props.state.todos

    if (todos.fetching === null) {
      return null
    }

    if (todos.fetching) {
      return (<ProgressBar animating={!todos.fetching} />)
    }

    if (todos.payload.data && todos.payload.data.length === 0) {
      return (
        <View style={styles.noContent}>
          <Text>{I18n.t('noTask')}</Text>
        </View>
      )
    }

    return (
      <KeyboardAwareScrollView
        keyboardDismissMode='interactive'
        keyboardShouldPersistTaps='never'
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}
        contentContainerStyle={styles.container}
        getTextInputRefs={() => {
          return [this._addTodo._todoInput]
        }}>
        <ScrollView
          ref={(r) => { this._todolist = r }}
          keyboardDismissMode='interactive'
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={(contentWidth, contentHeight) => { this.height = contentHeight }}
          style={styles.listContent}>
          {this._renderRow()}
        </ScrollView>
        <InputField
          onSubmitEditing={() => { Keyboard.dismiss(); this._todolist.scrollTo({y: this.height - Metrics.getlastPosition}) }}
          ref={(r) => { this._addTodo = r }}
          onAdd={this.props.addTodo}
        />
      </KeyboardAwareScrollView>

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
    getTodos: () => dispatch(TodosActions.todosRequest()),
    checkTodo: (id, payload) => dispatch(TodosActions.updateTodo(id, payload)),
    addTodo: (payload) => dispatch(TodosActions.addTodo(payload))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)
