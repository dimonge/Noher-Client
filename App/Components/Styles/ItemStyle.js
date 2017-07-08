import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  rowContainer: {
    // flex: 0.5,
    flexDirection: 'row',
    width: Metrics.screenWidth - 10,
    // height: Metrics.itemHeight,
    margin: Metrics.smallMargin,
    shadowColor: Colors.border,
    shadowOffset: {
      width: 0.5,
      height: 0.5
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    paddingLeft: Metrics.baseMargin,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.transparent,
    paddingBottom: Metrics.smallMargin,
    paddingTop: Metrics.smallMargin,
    paddingRight: Metrics.itemHeight
  },
  checkbox: {
    height: 15,
    width: 15,
    borderWidth: 2,
    borderColor: Colors.border
  },
  taskStyle: {
    ...Fonts.style.h5,
    marginLeft: Metrics.marginHorizontal,
    flexWrap: 'wrap',
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin
    // flex: 0.75
  }
})
