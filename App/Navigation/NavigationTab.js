import { Navigation } from 'react-native-navigation';

import React from 'react';
import { registerScreens } from './Screens';
import {iconsMap, iconsLoaded} from '../Themes/AppIcons';
//import configureStore from
registerScreens()

const navigatorStyle = {
	navBarTranslucent: true,
	drawUnderNavBar: true,
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	statusBarTextColorScheme: 'light',
	drawUnderTabBar: true
};

export default class NavigationTab extends React.Component {
  constructor(props) {
		super(props);
		iconsLoaded.then(() => {
			this.startApp();
		});
	}
  startApp() {
		Navigation.startTabBasedApp({
			tabs: [
				{
					label: 'Home',
					screen: 'maTodo.List',
					icon: iconsMap['ios-home-outline'],
					selectedIcon: iconsMap['ios-home'],
					title: 'Home',
					navigatorStyle,
					navigatorButtons: {
						rightButtons: [
							{
								title: 'Search',
								id: 'search',
								icon: iconsMap['ios-search']
							}
						]
					}
				},
				{
					label: 'Add Item',
					screen: 'maTodo.AddItem',
					icon: iconsMap['ios-add-outline'],
					selectedIcon: iconsMap['ios-add'],
					title: 'Add Item',
					navigatorStyle
				}
			],
			tabsStyle: {
				tabBarButtonColor: 'gray',
				tabBarSelectedButtonColor: 'black',
				tabBarBackgroundColor: 'white'
			}
		});
	}
}
