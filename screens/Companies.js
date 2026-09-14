import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, ScrollView, Image, Pressable } from 'react-native';

import SidebarButton from '../components/SidebarButton';
import AppHeader from '../components/AppHeader';
import styles from '../styles/AppStyles';

//Import delle Immagini
import miurLogo from '../assets/miurLogo.png';
import itsLogo from '../assets/itsWideLogo.png';
import profileLogo from '../assets/profileLogo.png';

export default function Companies({navigation}) {

  const [hoveredButton, setHoveredButton] = useState(null);

  // Dati di esempio per aziende
  const aziende = [
    { id: 1, nome: "Tech Solutions Srl", settore: "Sviluppo Software", sede: "Perugia" },
    { id: 2, nome: "CyberSecurity Italia", settore: "Cybersecurity", sede: "Roma" },
    { id: 3, nome: "MobileDev Lab", settore: "Sviluppo Mobile", sede: "Milano" },
    { id: 4, nome: "AI Research Center", settore: "Intelligenza Artificiale", sede: "Torino" },
    { id: 5, nome: "Web Innovators", settore: "Sviluppo Web", sede: "Firenze" },
    { id: 6, nome: "Data Security Group", settore: "Cybersecurity", sede: "Napoli" },
    { id: 7, nome: "App Factory", settore: "Sviluppo Mobile", sede: "Bologna" },
    { id: 8, nome: "Neural Networks Srl", settore: "Intelligenza Artificiale", sede: "Pisa" },
    { id: 9, nome: "Cloud Solutions", settore: "Sviluppo Web", sede: "Venezia" },
    { id: 10, nome: "SecureNet Italia", settore: "Cybersecurity", sede: "Genova" },
    { id: 11, nome: "Mobile First", settore: "Sviluppo Mobile", sede: "Palermo" },
    { id: 12, nome: "Deep Learning Lab", settore: "Intelligenza Artificiale", sede: "Bari" },
  ];

  // Funzione per il pulsante contatta
  const handleContatta = (azienda) => {
    console.log(`Contattando ${azienda.nome}`);
  };

  // Funzioni per gestire hover
  const handleHoverIn = (id, tipo) => {
    setHoveredButton(`${id}-${tipo}`);
  };
  const handleHoverOut = () => {
    setHoveredButton(null);
  };

  // Creo array per aziende con un solo pulsante alla fine di ogni riga
  let aziendeElements = [];
  for (let i = 0; i < aziende.length; i++) {
    const azienda = aziende[i];
    const isHoverContatta = hoveredButton === `${azienda.id}-contatta`;

    aziendeElements[i] = (
      <View key={azienda.id} style={styles.itemCard}>
        <View style={styles.itemRow}>
          <View style={styles.itemInfo}>
            <Text style={[styles.itemName, styles.redName]}>{azienda.nome}</Text>
            <Text style={styles.itemDetail}>Settore: {azienda.settore}</Text>
            <Text style={styles.itemDetail}>Sede: {azienda.sede}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable 
              style={[
                styles.contactButton,
                isHoverContatta && styles.contatButtonHover
              ]}
              onPress={() => handleContatta(azienda)}
              onHoverIn={() => handleHoverIn(azienda.id, 'contatta')}
              onHoverOut={handleHoverOut}
            >
              <Text style={[
                styles.listButtonText,
                isHoverContatta && styles.listButtonTextHover
              ]}>✉️</Text>
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
            onPress={() => navigation.navigate('Students')}>
          </SidebarButton>

          <SidebarButton 
            text="Aziende" 
            onPress={() => navigation.navigate('Companies')}
            disabled>
          </SidebarButton>

          <SidebarButton 
            text="Logout" 
            onPress={() => navigation.navigate('Login')}>
          </SidebarButton>
        </View>

        {/* PAGINA SCROLLABILE */}
        <ScrollView style={styles.scrollContainer}>

          {/* LISTA AZIENDE */}
          <View style={styles.listContainer}>
            <Text style={[styles.listTitle, styles.redTitle]}>Lista Aziende Partner</Text>
            {aziendeElements}
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