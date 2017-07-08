import { Navigation } from 'react-native-navigation'
import List from '../Containers/List.js'
import GroupScreen from '../Containers/GroupScreen'
import SettingScreen from '../Containers/SettingScreen'
import AddTaskScreen from '../Containers/AddTask'
export function registerScreens (store, provider) {
  Navigation.registerComponent('maTodo.List', () => List, store, provider)
  Navigation.registerComponent('maTodo.Group', () => GroupScreen, store, provider)
  Navigation.registerComponent('maTodo.Settings', () => SettingScreen, store, provider)
  Navigation.registerComponent('maTodo.AddTask', () => AddTaskScreen, store, provider)
}
