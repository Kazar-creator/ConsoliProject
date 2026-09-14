import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, ScrollView, Image, Pressable, FlatList } from 'react-native';

import SidebarButton from '../components/SidebarButton';
import AppHeader from '../components/AppHeader';
import styles from '../styles/AppStyles';

//Import delle Immagini
import miurLogo from '../assets/miurLogo.png';
import itsLogo from '../assets/itsWideLogo.png';
import profileLogo from '../assets/profileLogo.png';

export default function Students({navigation}) {

  const [hoveredButton, setHoveredButton] = useState(null);

  // Dati di esempio per studenti
  const studenti = [
    { id: 1, nome: "Mario", cognome: "Rossi", corso: "Sviluppo Web" },
    { id: 2, nome: "Laura", cognome: "Bianchi", corso: "Cybersecurity" },
    { id: 3, nome: "Marco", cognome: "Verdi", corso: "Sviluppo Mobile" },
    { id: 4, nome: "Anna", cognome: "Neri", corso: "Intelligenza Artificiale" },
    { id: 5, nome: "Giuseppe", cognome: "Russo", corso: "Sviluppo Web" },
    { id: 6, nome: "Francesca", cognome: "Ferrari", corso: "Cybersecurity" },
    { id: 7, nome: "Alessandro", cognome: "Esposito", corso: "Sviluppo Mobile" },
    { id: 8, nome: "Chiara", cognome: "Romano", corso: "Intelligenza Artificiale" },
    { id: 9, nome: "Simone", cognome: "Gallo", corso: "Sviluppo Web" },
    { id: 10, nome: "Valentina", cognome: "Conti", corso: "Cybersecurity" },
    { id: 11, nome: "Luca", cognome: "Mancini", corso: "Sviluppo Mobile" },
    { id: 12, nome: "Elena", cognome: "Ricci", corso: "Intelligenza Artificiale" },
    { id: 13, nome: "Davide", cognome: "Greco", corso: "Sviluppo Web" },
    { id: 14, nome: "Sara", cognome: "Palmieri", corso: "Cybersecurity" },
    { id: 15, nome: "Federico", cognome: "Marino", corso: "Sviluppo Mobile" },
    { id: 16, nome: "Alessia", cognome: "Santoro", corso: "Intelligenza Artificiale" },
  ];

  // Funzioni per i pulsanti
  const handleChiamata = (studente) => {
    console.log(`Chiamata in corso per ${studente.nome} ${studente.cognome}`);
  };
  const handlePrenotaColloquio = (studente) => {
    console.log(`Prenota colloquio per ${studente.nome} ${studente.cognome}`);
  };

  // Funzioni per gestire hover
  const handleHoverIn = (id, tipo) => {
    setHoveredButton(`${id}-${tipo}`);
  };
  const handleHoverOut = () => {
    setHoveredButton(null);
  };

  // Creo array per studenti con pulsanti alla fine di ogni riga
  let studentiElements = [];
  for (let i = 0; i < studenti.length; i++) {
    const studente = studenti[i];
    const isHoverChiamata = hoveredButton === `${studente.id}-chiamata`;
    const isHoverColloquio = hoveredButton === `${studente.id}-colloquio`;

    studentiElements[i] = (
      <View key={studente.id} style={styles.itemCard}>
        <View style={styles.itemRow}>
          <View style={styles.itemInfo}>
            <Text style={[styles.itemName, styles.blueName]}>{studente.nome} {studente.cognome}</Text>
            <Text style={styles.itemDetail}>Corso: {studente.corso}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable 
              style={[
                styles.callButton,
                isHoverChiamata && styles.callButtonHover
              ]}
              onPress={() => handleChiamata(studente)}
              onHoverIn={() => handleHoverIn(studente.id, 'chiamata')}
              onHoverOut={handleHoverOut}
            >
              <Text style={[
                styles.listButtonText,
                isHoverChiamata && styles.listButtonTextHover
              ]}>📞</Text>
            </Pressable>
            <Pressable 
              style={[
                styles.interviewButton,
                isHoverColloquio && styles.interviewButtonHover
              ]}
              onPress={() => handlePrenotaColloquio(studente)}
              onHoverIn={() => handleHoverIn(studente.id, 'colloquio')}
              onHoverOut={handleHoverOut}
            >
              <Text style={[
                styles.listButtonText,
                isHoverColloquio && styles.listButtonTextHover
              ]}>📅</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }

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
            onPress={() => navigation.navigate('Home')}>
          </SidebarButton>

          <SidebarButton 
            text="Studenti" 
            onPress={() => navigation.navigate('Students')}
            disabled>
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
          
          {/* LISTA STUDENTI */}
          <View style={styles.listContainer}>
            <Text style={[styles.listTitle, styles.blueTitle]}>Lista Studenti</Text>
            {studentiElements}
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