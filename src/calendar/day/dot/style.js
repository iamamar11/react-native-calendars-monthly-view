import {StyleSheet} from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.dot';

export default function styleConstructor(theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    dot: {
      marginTop: 1,
      marginHorizontal: 1,
      borderRadius: 2,
      opacity: 0,
      ...appStyle.dotStyle
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.dotColor
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    },
    disabledDot: {
      backgroundColor: appStyle.disabledDotColor || appStyle.dotColor
    },
    todayDot: {
      backgroundColor: appStyle.todayDotColor || appStyle.dotColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
