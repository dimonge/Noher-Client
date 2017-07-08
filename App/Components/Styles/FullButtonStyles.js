import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    borderTopColor: Colors.button,
    borderBottomColor: Colors.button,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.button
  },
  buttonText: {
    margin: 10,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  }
})
