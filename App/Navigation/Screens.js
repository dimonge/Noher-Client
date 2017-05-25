import { Navigation } from 'react-native-navigation';
import List from '../Containers/List.js';
import AddItem from '../Containers/AddItem';


export function registerScreens(store, provider) {
  Navigation.registerComponent('maTodo.List', () => List, store, provider);
  Navigation.registerComponent('maTodo.AddItem', () => AddItem, store, provider);
}
