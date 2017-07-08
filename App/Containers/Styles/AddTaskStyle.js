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
    marginTop: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.lightgray,
    borderBottomWidth: 1
  },
  taskInput: {
    ...Fonts.style.h5,
    height: Metrics.doubleSection * 2,
    lineHeight: Metrics.doubleBaseMargin / 4

  },
  noContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listContent: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  groupColor: {
    width: Metrics.marginVertical,
    height: Metrics.marginVertical,
    borderRadius: Metrics.marginVertical / 2,
    margin: Metrics.baseMargin - 3
  },
  groupContainer: {
    flexDirection: 'row',
    borderBottomColor: Colors.lightgray,
    borderBottomWidth: Metrics.borderBottomWidth
  },
  groupStyle: {
    flexDirection: 'row',
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin
  },
  groupLabel: {
    ...Fonts.style.normal
  },
  buttonStyle: {
    // flex: 1,
    justifyContent: 'flex-end'
  }
})
