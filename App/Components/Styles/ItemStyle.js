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
    height: Metrics.doubleBaseMargin - 4,
    width: Metrics.doubleBaseMargin - 4,
    borderRadius: (Metrics.doubleBaseMargin - 4) / 2,
    borderWidth: 1,
    borderColor: Colors.border
  },
  taskStyle: {
    ...Fonts.style.h5,
    marginLeft: Metrics.marginHorizontal,
    flexWrap: 'wrap',
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin
    // flex: 0.75
  },
  fillCircle: {
    backgroundColor: Colors.lightgray
  },
  completedText: {
    textDecorationColor: Colors.scroll,
    textDecorationLine: 'line-through'
  }
})
