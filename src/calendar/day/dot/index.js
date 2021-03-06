import PropTypes from 'prop-types';
import React from 'react';
import {View, Text} from 'react-native';
import styleConstructor from './style';

const Dot = ({theme, marked, disabled, color, today, selected, title}) => {
  const style = styleConstructor(theme);
  const dotStyle = [style.dot];


  if (marked) {
    dotStyle.push(style.visibleDot);

    if (today) {
      dotStyle.push(style.todayDot);
    }

    if (disabled) {
      dotStyle.push(style.disabledDot);
    }

    if (selected) {
      dotStyle.push(style.selectedDot);
    }

    if (color) {
      dotStyle.push({backgroundColor: color});
      
    }
  }
  // console.log(title);
  // console.log(color)
  return (
    <View >
      <Text style={{
        fontSize : 10,
        backgroundColor : color,
        color : "white",
        margin: 1,
        paddingHorizontal : 5,
        paddingVertical : 1,
        textAlign : 'center',
        height : 15,
        width : 40
      
      }}>
        {title.length > 6 ? `${title.substring(0,5)}..` : title}
      </Text>
    </View>
  );
};

export default Dot;

Dot.propTypes = {
  theme: PropTypes.object,
  color: PropTypes.string,
  marked: PropTypes.bool,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  today: PropTypes.bool
};
