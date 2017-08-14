import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    marginBottom: Metrics.tabBarHeight,
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin
  },
  textInputContainer: {
    borderBottomColor: Colors.lightgray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskInput: {
    ...Fonts.style.h5,
    height: Metrics.doubleSection - 10,
    paddingRight: 15,
    paddingLeft: 0,
    paddingTop: 5,
    paddingBottom: 5,
    flex: 3
  },
  addButtonStyle: {
    flex: 0.425,
    alignItems: 'center'
  }
})
