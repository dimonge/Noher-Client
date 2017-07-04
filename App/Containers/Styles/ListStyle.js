import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    marginBottom: Metrics.tabBarHeight
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
  }
})
