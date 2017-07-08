import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },

  row: {
    flex: 1,
    backgroundColor: Colors.background,
    marginVertical: Metrics.smallMargin,
    borderBottomWidth: 1,
    padding: Metrics.baseMargin,
    marginBottom: Metrics.doubleBaseMargin
  },
  settingContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: Metrics.baseMargin,
    marginBottom: Metrics.doubleBaseMargin
  },
  settingRow: {
    flex: 1,
    backgroundColor: Colors.background,
    marginVertical: Metrics.smallMargin
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.black,
    marginVertical: Metrics.smallMargin
  },

  label: {
    ...Fonts.style.normal,
    color: Colors.black,
    marginBottom: Metrics.smallMargin
  },

  listContent: {
    marginTop: Metrics.baseMargin
  }
})
