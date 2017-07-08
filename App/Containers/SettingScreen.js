import React from 'react'
import { View, Text, Switch, ScrollView } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/SettingScreenStyles'

class SettingScreen extends React.Component {
  constructor (props) {
    super(props)

    this.dataObjects = {
      profile: { name: 'Peter Shodeinde', email: 'petershodeinde4@gmail.com' },
      appVersion: { name: 'App Version', version: '1.10.2' },
      setting: { name: 'Push Notification', description: '(Comments, Tasks, Mentions)' },
      information: [
        { name: 'Legal & Privacy' },
        { name: 'Send us feedback' }
      ]
    }
    this.state = {
      enablePushNotification: false
    }
  }

  renderRow (rowData, sectionID) {
    // You can condition on sectionID (key as string), for different cells
    // in different sections
    if (sectionID === 'setting') {
      return (
        <View style={styles.settingContainer}>
          <View style={styles.settingRow}>
            <Text style={styles.label}>{rowData.title || rowData.name}</Text>
            <Text style={styles.label}>{rowData.description || rowData.email || rowData.version}</Text>
          </View>
          <Switch
            onValueChange={(value) => this.setState({enablePushNotification: !this.state.enablePushNotification})}
            value={this.state.enablePushNotification} />
        </View>
      )
    } else {
      return (
        <View style={styles.row}>
          <Text style={styles.label}>{rowData.title || rowData.name}</Text>
          <Text style={styles.label}>{rowData.description || rowData.email || rowData.version}</Text>
        </View>
      )
    }
  }
  render () {
    const dataObjects = this.dataObjects
    return (
      <ScrollView style={styles.container}>
        {this.renderRow(dataObjects.profile, 'profile')}
        {this.renderRow(dataObjects.appVersion, 'appVersion')}
        {this.renderRow(dataObjects.setting, 'setting')}
        {dataObjects.information.map((info) => this.renderRow(info, 'information'))}
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)
