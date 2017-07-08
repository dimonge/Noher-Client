import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background,
    marginBottom: Metrics.tabBarHeight
  },
  row: {
    width: Metrics.screenWidth / 2 - 20,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: 'white',
    borderRadius: Metrics.smallMargin,
    shadowColor: Colors.border,
    shadowOffset: {
      width: 0.5,
      height: 0.5
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    borderWidth: 0
  },
  createRow: {
    width: Metrics.screenWidth / 2 - 20,
    height: 200,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: Metrics.baseMargin,
    borderRadius: Metrics.smallMargin,
    borderWidth: 0,
    backgroundColor: 'whitesmoke'
  },
  boldLabel: {
    ...Fonts.style.h5,
    fontWeight: '500',
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    ...Fonts.style.h4,
    alignSelf: 'center',
    color: Colors.text,
    textAlign: 'center',
    fontWeight: '500'
  },
  listContent: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  iconStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
