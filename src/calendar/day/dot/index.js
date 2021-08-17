import PropTypes from 'prop-types';
import React from 'react';
import {View, Text} from 'react-native';
import styleConstructor from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Dot = ({theme, marked, disabled, color,extraEventTextColor, today, selected, textColor, showMore, title}) => {
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
  return (
    
    <View style={{
        margin: 1,
        height : 15,
        backgroundColor : color,
        fontFamily : 'ProximaNova-Bold',
        width : 52,
        marginLeft : 0,
        borderRadius : 0,
        borderBottomColor : showMore && extraEventTextColor,
        borderBottomWidth: showMore ? 2 : 0
    }}>
      <View style={{ height : 15,  overflow : 'hidden',}}>
          <Text style={{
            fontSize : 10,
            color : textColor,
            textAlign: "center",
          }}>
            {title}
          </Text>
      </View>
      { showMore ? <FontAwesome name='caret-down' size={12} color={extraEventTextColor} style={{top : -5, alignSelf : 'center'}}/>: null}
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
