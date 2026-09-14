// components/AppCalendar.js
import { useState } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styles from '../styles/AppStyles';

export default function AppCalendar({ onDayPress, markedDates = {} }) {
  const [selected, setSelected] = useState('');

  const handleDayPress = (day) => {
    setSelected(day.dateString);
    if (onDayPress) onDayPress(day);
  };

  return (
    <View style={styles.calendarContainer}>

      <Calendar
        style={styles.calendar}
        onDayPress={handleDayPress}
        markedDates={{
          ...markedDates,
          [selected]: { selected: true, selectedColor: '#154f78' },
        }}
        markingType='dot'
        theme={{
          todayTextColor: '#154f78',
          arrowColor: '#154f78',
          selectedDayBackgroundColor: '#154f78',
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          dayTextColor: '#000000',
          monthTextColor: '#000000',
          textDayFontWeight: '600',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 14,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 13,
        }}
      />
      
    </View>
  );
}