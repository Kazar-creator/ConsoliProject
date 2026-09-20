import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';

import AppSidebar from '../components/AppSidebar';
import AppHeader from '../components/AppHeader';
import DataRow from '../components/DataRow';
import styles from '../styles/AppStyles';

export default function Profile({navigation}) {

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />

      {/* HEADER */}
      <AppHeader navigation={navigation} />

      {/* BODY */}
      <View style={styles.bodyContainer}>

        {/* SIDEBAR */}
        <AppSidebar navigation={navigation} activeRoute="Profile" />

        {/* PAGINA SCROLLABILE */}
        <ScrollView style={styles.scrollContainer}>

          <View style={styles.datiUtente}>
            <Text style={styles.titolo}>DATI STUDENTE</Text>
            <DataRow label="Nome" value="Nome" />
            <DataRow label="Cognome" value="Cognome" />
            <DataRow label="Corso" value="Corso" />
            <DataRow label="Anno Scolastico" value="Anno Scolastico" />
            <DataRow label="Email" value="Email" />
          </View>

          <View style={styles.datiUtente}>
            <Text style={styles.titolo}>DATI AZIENDA</Text>
            <DataRow label="Nome" value="Nome" />
            <DataRow label="P.IVA" value="P.IVA" />
            <DataRow label="Codice ATECO" value="Codice ATECO" />
            <DataRow label="Email" value="Email" />
            <DataRow label="Indirizzo" value="Indirizzo" />
            <DataRow label="CAP" value="CAP" />
          </View>

          <View style={styles.datiUtente}>
            <Text style={styles.titolo}>DATI ADMIN</Text>
            <DataRow label="Nome" value="Nome" />
            <DataRow label="Cognome" value="Cognome" />
            <DataRow label="Email" value="Email" />
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