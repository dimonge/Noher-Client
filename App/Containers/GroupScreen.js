import React from 'react'
import { View, Text, ListView, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import PlusIcon from '../Components/PlusIcon'
// For empty lists
// import AlertMessage from '../Components/AlertMessage'
import Icon from 'react-native-vector-icons/Ionicons'
// Styles
import styles from './Styles/GroupScreenStyle'
import { Colors } from '../Themes'

class GroupScreen extends React.Component {
  state: {
    dataSource: []
  }

  constructor (props) {
    super(props)
    // If you need scroll to bottom, consider http://bit.ly/2bMQ2BZ

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = [
      {title: 'Grocery', description: 'First Description', icon: 'ios-basket-outline'},
      {title: 'Home', description: 'Second Description', icon: 'ios-home-outline'},
      {title: 'Invitation list', description: 'Third Description', icon: 'ios-people-outline'},
      {title: 'Work', description: 'Fourth Description', icon: 'ios-filing-outline'},
      {title: 'Travel', description: 'Fifth Description', icon: 'ios-plane-outline'},
      {title: 'Wedding', description: 'Sixth Description', icon: 'ios-cart-outline'},
      {title: 'Create Group', create: true}
    ]

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    }
  }

  /* ***********************************************************
  * STEP 3
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  _renderRow (rowData) {
    if (rowData.hasOwnProperty('create')) {
      return (
        <TouchableHighlight onPress={this._onOpenGroup}>
          <View style={styles.createRow}>
            <PlusIcon />
            <Text style={styles.boldLabel}>{rowData.title}</Text>
            {/* <Text style={styles.label}>{rowData.description}</Text> */}
          </View>
        </TouchableHighlight>
      )
    }
    return (
      <TouchableHighlight onPress={this._onOpenGroup}>
        <View style={styles.row}>
          <Icon style={styles.iconStyle} name={rowData.icon} size={30} color={Colors.button} />
          <Text style={styles.boldLabel}>{rowData.title}</Text>
          {/* <Text style={styles.label}>{rowData.description}</Text> */}
        </View>
      </TouchableHighlight>
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  // Render a footer.
  _renderFooter = () => {
    return (
      <Text> - Footer - </Text>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          // renderFooter={this._renderFooter}
          enableEmptySections
          pageSize={15}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupScreen)
