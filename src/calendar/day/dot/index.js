import PropTypes from 'prop-types';
import React from 'react';
import {View, Text} from 'react-native';
import styleConstructor from './style';

const Dot = ({theme, marked, disabled, color, today, selected, textColor, extraEventTextColor, title}) => {
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
  // console.log("=== Color for the + feild ===")
  // console.log(title)
  // console.log(textColor)
  // console.log(extraEventTextColor)
  // console.log(color)
  return (
    <View style={{
        margin: 1,
        height : 20,
        backgroundColor : color,
        fontFamily : 'ProximaNova-Bold',
        width : title.length == 2 || title.length ==3 && title.includes("+")?25:50,
        fontSize: title.length == 2 || title.length ==3 && title.includes("+")?5:6,
        marginLeft : title.length == 2 || title.length ==3 && title.includes("+")?50/4:0,
        borderRadius : title.length == 2 || title.length ==3 && title.includes("+")? 25:10,
        alignContent : 'center',
        justifyContent : 'center'
        
    }}>
      <Text style={{
        fontSize : 10,
        paddingHorizontal : 1,
        paddingVertical : 1,
        color : ((title.length == 2 || title.length ==3) && title.includes("+"))? extraEventTextColor : textColor,
        textAlign : 'center',
      }}>
        {title.length > 7 ? `${title.substring(0,6)}..` : title}
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
