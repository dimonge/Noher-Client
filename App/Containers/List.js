import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from '../Components/Item'
import TodosActions from '../Redux/TodosRedux'
import I18n from 'react-native-i18n'
import {
  View,
  Text,
  ListView
} from 'react-native'
import ProgressBar from '../Components/ProgressBar'
import styles from './Styles/ListStyle'

class List extends Component {
  componentWillMount () {
    this.props.getTodos()
  }
  _renderRow (rowData) {
    return (
      <Item checked={false} task={rowData.task} />
    )
  }
  render () {
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})
    let dataSource = []
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

    dataSource = ds.cloneWithRows(todos.payload.data.items)
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={dataSource}
          renderRow={this._renderRow}
          renderFooter={this._renderFooter}
          enableEmptySections
          pageSize={10}
          />
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
    getTodos: () => dispatch(TodosActions.todosRequest())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)
