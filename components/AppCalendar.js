// components/AppCalendar.js
import { useState } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import CalendarDay from './CalendarDay';
import styles from '../styles/AppStyles';

// selectedDate: stringa 'YYYY-MM-DD' del giorno attualmente selezionato (gestita dal genitore)
// markedDates: oggetto { 'YYYY-MM-DD': { dots: [{ color }, ...] } } con i pallini degli eventi

export default function AppCalendar({ onDayPress, selectedDate, markedDates = {} }) {

  const [selected, setSelected] = useState('');

  const handleDayPress = (day) => {
    if (onDayPress) onDayPress(day);
  };

  /* Aggiunge il flag "selected" al giorno correntemente selezionato, senza
  perdere i pallini eventuali già presenti per quella data. */
  const fullMarkedDates = { ...markedDates };
  if (selectedDate) {
    fullMarkedDates[selectedDate] = {
      ...(fullMarkedDates[selectedDate] || {}),
      selected: true,
    };
  }

  return (
    <View style={styles.calendarContainer}>
 
      <Calendar
        style={styles.calendar}
        onDayPress={handleDayPress}
        markedDates={fullMarkedDates}
        dayComponent={(props) => <CalendarDay {...props} />}
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