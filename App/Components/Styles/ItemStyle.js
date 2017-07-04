import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  rowContainer: {
    flex: 0.5,
    flexDirection: 'row',
    width: Metrics.screenWidth - 10,
    height: Metrics.itemHeight,
    margin: Metrics.smallMargin,
    shadowColor: Colors.border,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    paddingLeft: Metrics.baseMargin,
    paddingRight: Metrics.baseMargin,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  checkbox: {
    height: 10,
    width: 10,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: Colors.border
  },
  taskStyle: {
    marginLeft: Metrics.marginHorizontal
  }
})
