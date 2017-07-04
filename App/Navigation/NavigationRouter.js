import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'
import List from '../Containers/List.js'
/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer'>
          <Scene initial
            key='home'
            component={List}
            title='Home'
            leftButtonIconStyle={Styles.leftButton}
            rightButtonTextStyle={Styles.rightButton} />
          <Scene key='tabbar' component={NavigationDrawer} tabs hideNavBar tabBarStyle={Styles.tabBarStyle}>
            <Scene
              key='main'
              title='My Tab'
              icon='ios-home-outline'>
              <Scene key='myTab_1' component={List} hideNavBar />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
