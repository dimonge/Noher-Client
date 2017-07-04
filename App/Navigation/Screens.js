import { Navigation } from 'react-native-navigation'
import List from '../Containers/List.js'
import GroupScreen from '../Containers/GroupScreen.js'

export function registerScreens (store, provider) {
  Navigation.registerComponent('maTodo.List', () => List, store, provider)
  Navigation.registerComponent('maTodo.Group', () => GroupScreen, store, provider)
}
