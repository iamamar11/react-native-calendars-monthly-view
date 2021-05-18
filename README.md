# React Native Calendars Montlhy View 🗓️ 📆

[![Version](https://img.shields.io/npm/v/react-native-calendars.svg)](https://www.npmjs.com/package/react-native-calendars)
[![Build Status](https://travis-ci.org/wix/react-native-calendars.svg?branch=master)](https://travis-ci.org/wix/react-native-calendars)

This module includes various customizable **React-Native** calendar components.

The package is both **Android** and **iOS** compatible.

## This package is replacing `multi-dots` in `react-native-calendar` with title name . Please avoid using react native calendar with this package otherwise you will face issues.

## Installation

```
$ npm install --save react-native-calendars-monthly-view
```

## Usage

### Calendar

<kbd>
  <img src="https://github.com/wix-private/wix-react-native-calendar/blob/master/demo/calendar.gif?raw=true">
</kbd>

#### Basic parameters

```javascript
<Calendar
  // Initially visible month. Default = Date()
  current={"2012-03-01"}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={"2012-05-10"}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={"2012-05-30"}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={(day) => {
    console.log("selected day", day)
  }}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={(day) => {
    console.log("selected day", day)
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={"yyyy MM"}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {
    console.log("month changed", month)
  }}
  // Hide month navigation arrows. Default = false
  hideArrows={true}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  renderArrow={(direction) => <Arrow />}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={true}
  // Show week numbers to the left. Default = false
  showWeekNumbers={true}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={(subtractMonth) => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={(addMonth) => addMonth()}
  // Disable left arrow. Default = false
  disableArrowLeft={true}
  // Disable right arrow. Default = false
  disableArrowRight={true}
  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
  disableAllTouchEventsForDisabledDays={true}
  // Replace default month and year title with custom one. the function receive a date as parameter.
  renderHeader={(date) => {
    /*Return JSX*/
  }}
  // Enable the option to swipe between months. Default = false
  enableSwipeMonths={true}
/>
```

### To get Google monthly canlendar like look use this code

<kbd>

<p></p>

Use `markingType={'title'}` if you want to display String or number. Both the `<Calendar/>` and `<CalendarList/>` support multiple dots by using `dots` array in `markedDates` prop.
The property `color` is mandatory while `key` and `selectedColor` are optional. If key is omitted then the array index is used as key. If `selectedColor` is omitted then `color` will be used for selected dates.

```javascript
const Ticket = {
  color: "red",
  title: "Ticket",
  extraEventColor: "pink", // this property is used to give color to field with extra events log. Make use you pass this property to first event object
}
const surfing = { color: "blue", title: "surfing" }
const workout = { color: "green", title: "workout" }

;<Calendar
  markedDates={{
    "2017-10-25": {
      dots: [vacation, massage, workout],
    },
    "2017-10-26": { dots: [massage, workout], disabled: true },
  }}
  markingType={"title"}
/>
```

## Authors for react-native-calendar package

- [Tautvilas Mecinskas](https://github.com/tautvilas/) - Initial code - [@tautvilas](https://twitter.com/Tautvilas)
- Katrin Zotchev - Initial design - [@katrin_zot](https://twitter.com/katrin_zot)

See also the list of [contributors](https://github.com/wix/react-native-calendar-components/contributors) who participated in this project.
