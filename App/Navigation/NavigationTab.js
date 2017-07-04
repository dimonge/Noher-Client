import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import React from 'react'
import { registerScreens } from './Screens'
import {iconsMap, iconsLoaded} from '../Themes/AppIcons'
import {
  Colors
} from '../Themes'
import createStore from '../Redux'

// create our store
const store = createStore()
registerScreens(store, Provider)

const navigatorStyle = {
  navBarTranslucent: true,
  drawUnderNavBar: true,
  navBarTextColor: 'grey',
  navBarButtonColor: 'grey',
  navBarBackgroundColor: 'white',
  statusBarTextColorScheme: 'light',
  drawUnderTabBar: true
}

export default class NavigationTab extends React.Component {
  constructor (props) {
    super(props)
    iconsLoaded.then(() => {
      this.startApp()
    })
  }
  startApp () {
    Navigation.startTabBasedApp({
      tabs: [
        {
          // label: 'Home',
          screen: 'maTodo.List',
          icon: iconsMap['ios-home-outline'],
          selectedIcon: iconsMap['ios-home'],
          title: 'My Tasks (8)',
          navigatorStyle,
          navigatorButtons: {
            rightButtons: [
              {
                title: 'settings',
                id: 'settings',
                icon: iconsMap['ios-settings-outline']
              }
            ],
            leftButtons: [
              {
                title: 'check',
                id: 'check',
                icon: iconsMap['ios-checkmark-circle-outline']
              }
            ]
          }
        },
        {
          // label: 'Add Item',
          screen: 'maTodo.Group',
          icon: iconsMap['ios-add-circle-outline'],
          selectedIcon: iconsMap['ios-add-circle'],
          title: 'Group',
          navigatorStyle
        },
        {
          // label: 'Add Item',
          screen: 'maTodo.Group',
          icon: iconsMap['ios-grid-outline'],
          selectedIcon: iconsMap['ios-grid'],
          title: 'Group',
          navigatorStyle
        }
      ],
      tabsStyle: {
        tabBarButtonColor: Colors.lightgray,
        tabBarSelectedButtonColor: 'gray',
        tabBarBackgroundColor: 'white',
        tabBarTranslucent: true
      }
    })
  }
}
