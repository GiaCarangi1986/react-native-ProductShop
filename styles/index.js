import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default {
  greenBackground: '#ABFA7A',
  white: 'white',
  mainBackground: '#e7eda1',
  black: 'black',
  red: 'red',

  fontSizeHeader: 24,
  fornSizeIcon: 12,

  screenWidth,
  screenHeight
}