import React, { Component } from 'react'
import { Tabs, Tab, Icon } from 'react-native-elements'
import List from '../Containers/List.js'
import AddItem from '../Containers/AddItem'

class TabBar extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: 'profile'
    }
  }

  changeTab (selectedTab) {
    this.setState({selectedTab})
  }

  render () {
    const { selectedTab } = this.state
    return (
      <Tabs>
        <Tab
          selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
          selected={selectedTab === 'feed'}
          title={selectedTab === 'feed' ? 'FEED' : null}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
          onPress={() => this.changeTab('feed')}>
          <List />
        </Tab>
        <Tab
          selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
          selected={selectedTab === 'profile'}
          title={selectedTab === 'profile' ? 'PROFILE' : null}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
          onPress={() => this.changeTab('profile')}>
          <AddItem />
        </Tab>
      </Tabs>
    )
  }
}

export default TabBar
