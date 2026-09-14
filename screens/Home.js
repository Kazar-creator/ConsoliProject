import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, ScrollView, Image, Pressable } from 'react-native';

import SidebarButton from '../components/SidebarButton';
import CustomButton from '../components/CustomButton';
import AppCalendar from '../components/AppCalendar';
import AppHeader from '../components/AppHeader';
import styles from '../styles/AppStyles';

//Import delle Immagini
import miurLogo from '../assets/miurLogo.png';
import itsLogo from '../assets/itsWideLogo.png';
import profileLogo from '../assets/profileLogo.png';

export default function Home({navigation}) {

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />

      {/* HEADER */}
      <AppHeader navigation={navigation} />

      {/* BODY */}
      <View style={styles.bodyContainer}>

        {/* SIDEBAR */}
        <View style={styles.sideBar}>
          <SidebarButton 
            text="Home" 
            onPress={() => navigation.navigate('Home')}
            disabled>
          </SidebarButton>

          <SidebarButton 
            text="Studenti" 
            onPress={() => navigation.navigate('Students')}>
          </SidebarButton>

          <SidebarButton 
            text="Aziende" 
            onPress={() => navigation.navigate('Companies')}>
          </SidebarButton>

          <SidebarButton 
            text="Logout" 
            onPress={() => navigation.navigate('Login')}>
          </SidebarButton>
        </View>

        {/* PAGINA SCROLLABILE */}
        <ScrollView style={styles.scrollContainer}>

          {/* FIRST ROW: WELCOME AND CALENDAR */}
          <View style={styles.homeRow}>

            {/* WELCOME */}
            <View style={styles.homeCell}>

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
            </View>
      
            {/* CALENDAR */}
            <View style={[styles.homeCell, {flexDirection: 'column'}]}>

              <AppCalendar onDayPress={(day) => console.log('Giorno selezionato:', day.dateString)}/>

              <View style={styles.calendarDetailBox}>
                <Text style={styles.calendarDetailText}>BOX DETTAGLIO DEL GIORNO SELEZIONATO</Text>
              </View>
            </View>
            
          </View>

          {/* SECOND ROW: ??? AND ??? */}
          <View style={styles.homeRow}>
            <View style={styles.homeCell}>

            </View>

            <View style={styles.homeCell}>
              
            </View>
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

    </View>
  );
}