import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

import AppSidebar from '../components/AppSidebar';
import CustomButton from '../components/CustomButton';
import AppCalendar from '../components/AppCalendar';
import AppHeader from '../components/AppHeader';
import HomeCell from '../components/HomeCell';
import EventFormModal from '../components/EventFormModal';
import styles from '../styles/AppStyles';

// Converte 'YYYY-MM-DD' (formato usato dal calendario) in 'DD:MM:YYYY' per la visualizzazione
function formatDateForTitle(dateString) {
  if (!dateString) return '';
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
}

export default function Home({navigation}) {

  // events: { 'YYYY-MM-DD': [ { id, date, name, allDay, startTime, endTime, description, color, reminder }, ... ] }
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  // Pallini colorati da mostrare nel calendario per ogni giorno con eventi
  const markedDates = Object.keys(events).reduce((acc, date) => {
    const dayEvents = events[date];
    if (dayEvents && dayEvents.length > 0) {
      acc[date] = { dots: dayEvents.map((e) => ({ color: e.color })) };
    }
    return acc;
  }, {});

  const selectedDayEvents = selectedDate ? (events[selectedDate] || []) : [];

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const handleAddEventPress = () => {
    setEditingEvent(null);
    setModalVisible(true);
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setSelectedDate(event.date);
    setModalVisible(true);
  };

  const handleSaveEvent = (eventData) => {
    setEvents((prev) => {
      const dayEvents = prev[eventData.date] ? [...prev[eventData.date]] : [];
      const index = dayEvents.findIndex((e) => e.id === eventData.id);
      if (index >= 0) {
        dayEvents[index] = eventData;
      } else {
        dayEvents.push(eventData);
      }
      return { ...prev, [eventData.date]: dayEvents };
    });
    setModalVisible(false);
    setEditingEvent(null);
  };

  const handleDeleteEvent = (eventId) => {
    setEvents((prev) => {
      const dayEvents = (prev[selectedDate] || []).filter((e) => e.id !== eventId);
      return { ...prev, [selectedDate]: dayEvents };
    });
    setModalVisible(false);
    setEditingEvent(null);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setEditingEvent(null);
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />

      {/* HEADER */}
      <AppHeader navigation={navigation} />

      {/* BODY */}
      <View style={styles.bodyContainer}>

        {/* SIDEBAR */}
        <AppSidebar navigation={navigation} activeRoute="Home" />

        {/* PAGINA SCROLLABILE */}
        <ScrollView style={styles.scrollContainer}>

          {/* FIRST ROW: WELCOME AND CALENDAR */}
          <View style={styles.homeRow}>

            {/* WELCOME */}
            <HomeCell alignItems='center' justifyContent='center'>
              <Text style={styles.welcomeTitle}>BENVENUTO/A NEL PORTALE CV</Text>
              
              <View style={{flexDirection: 'row', gap: 15}}>
                <Text style={styles.userInfoText}>Nome Cognome</Text>

                <CustomButton 
                  text="Allega CV" 
                  onPress={() => console.log("Allega CV cliccato")}
                  width={130}
                  height={30}
                >
                </CustomButton>
                <CustomButton 
                  text="Visualizza CV" 
                  onPress={() => console.log("Visualizza CV cliccato")}
                  width={130}
                  height={30}
                >
                </CustomButton>
              </View>
            </HomeCell>
      
            {/* EVENTS LIST */}
            <HomeCell height={200}>
              <ScrollView style={styles.ScrollContainer}>
                <View>
                  <Text>
                    RIGA 1
                  </Text>
                </View>
                <View>
                  <Text>
                    RIGA 2
                  </Text>
                </View>
                <View>
                  <Text>
                    RIGA 3
                  </Text>
                </View>
                <View>
                  <Text>
                    RIGA 4
                  </Text>
                </View>
                <View>
                  <Text>
                    RIGA 5
                  </Text>
                </View>
                <View>
                  <Text>
                    RIGA 6
                  </Text>
                </View>
                <View>
                  <Text>
                    RIGA 7
                  </Text>
                </View>
                <View>
                  <Text>
                    RIGA 8
                  </Text>
                </View>
                <View>
                  <Text>
                    RIGA 9
                  </Text>
                </View>
                <View>
                  <Text>
                    RIGA 10
                  </Text>
                </View>
                <View>
                  <Text>
                    RIGA 11
                  </Text>
                </View>
                <View>
                  <Text>
                    RIGA 12
                  </Text>
                </View>
                <View>
                  <Text>
                    RIGA 13
                  </Text>
                </View>
              </ScrollView>
            </HomeCell>
            
          </View>

          {/* SECOND ROW: CALENDAR AND ??? */}
          <View style={styles.homeRow}>

            {/* CALENDAR */}
            <HomeCell>
              <AppCalendar
                selectedDate={selectedDate}
                markedDates={markedDates}
                onDayPress={handleDayPress}
              />

              <View style={styles.calendarDetailBox}>
                <Text style={styles.calendarDetailText}>
                  {selectedDate
                    ? `EVENTI DEL ${formatDateForTitle(selectedDate)}`
                    : 'BOX DETTAGLIO DEL GIORNO SELEZIONATO'}
                </Text>

                {selectedDayEvents.map((event) => (
                  <TouchableOpacity
                    key={event.id}
                    style={styles.eventListItem}
                    onPress={() => handleEditEvent(event)}
                  >
                    <View style={[styles.eventListDot, { backgroundColor: event.color }]} />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.eventListName}>{event.name}</Text>
                      <Text style={styles.eventListTime}>
                        {event.allDay ? 'Tutto il giorno' : `${event.startTime} - ${event.endTime}`}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}

                {selectedDate && (
                  <TouchableOpacity style={styles.addEventButton} onPress={handleAddEventPress}>
                    <Text style={styles.addEventButtonText}>+ Aggiungi evento</Text>
                  </TouchableOpacity>
                )}
              </View>
            </HomeCell>

            {/* ??? */}
            <HomeCell>
              
            </HomeCell>
          </View>

          {/* FOOTER */}
          <View style={styles.footerContainer}>

            <Text style={[styles.footerText, { fontWeight: 'bold' }]}>I.T.S. Umbria Made in Italy - Innovazione, Tecnologia e Sviluppo</Text>
            <Text style={styles.footerText}>Sede legale: via Palermo, 80/A 06124 Perugia - C. F. 94134240541</Text>
            <Text style={styles.footerText}>Tel. +39 075582741</Text>
            <Text style={styles.footerText}>Email: info@itsumbria.it</Text>
            <Text style={styles.footerText}>PEC: itsumbria@legalmail.it</Text>
            
          </View>

        </ScrollView>
        
      </View>

      {/* FORM AGGIUNTA/MODIFICA EVENTO */}
      <EventFormModal
        visible={modalVisible}
        date={selectedDate}
        existingEvent={editingEvent}
        onClose={handleCloseModal}
        onSave={handleSaveEvent}
        onDelete={handleDeleteEvent}
      />

    </View>
  );
}