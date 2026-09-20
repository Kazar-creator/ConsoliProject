import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import SidebarButton from './components/SidebarButton';
import { Text, View, ScrollView, Image, Pressable, TextInput } from 'react-native';

import styles from './styles/AppStyles.js';

const miurLogo = require("./assets/miurLogo.png");
const itsLogo = require("./assets/itsWideLogo.png");
const profileLogo = require("./assets/profileLogo.png");

export default function Aziende() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [filtroSettore, setFiltroSettore] = useState("Tutti");
  const [ricerca, setRicerca] = useState("");

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

  // Lista settori per i filtri (senza duplicati)
  const settori = [
    "Tutti",
    "Sviluppo Software",
    "Cybersecurity",
    "Sviluppo Mobile",
    "Intelligenza Artificiale",
    "Sviluppo Web",
  ];

  // Funzione per il pulsante contatta
  const handleContatta = (azienda) => {
    console.log(`Contattando ${azienda.nome}`);
  };

  // Funzione per il pulsante visualizza
  const handleVisualizza = (azienda) => {
    console.log(`Visualizza dettagli di ${azienda.nome}`);
  };

  // Funzioni per gestire hover
  const handleHoverIn = (id, tipo) => {
    setHoveredButton(`${id}-${tipo}`);
  };

  const handleHoverOut = () => {
    setHoveredButton(null);
  };

  // Filtro aziende in base a settore e ricerca
  let aziendeFiltrate = aziende.filter((azienda) => {
    const matchSettore = filtroSettore === "Tutti" || azienda.settore === filtroSettore;
    const testoRicerca = ricerca.toLowerCase();
    const matchRicerca =
      azienda.nome.toLowerCase().includes(testoRicerca) ||
      azienda.sede.toLowerCase().includes(testoRicerca);
    return matchSettore && matchRicerca;
  });

  // Raggruppo per settore
  let settoriDaMostrare = [];
  if (filtroSettore === "Tutti") {
    settoriDaMostrare = [
      "Sviluppo Software",
      "Cybersecurity",
      "Sviluppo Mobile",
      "Intelligenza Artificiale",
      "Sviluppo Web",
    ];
  } else {
    settoriDaMostrare = [filtroSettore];
  }

  // Creo gli elementi raggruppati per settore
  let contenutoLista = [];
  for (let s = 0; s < settoriDaMostrare.length; s++) {
    const settoreAttuale = settoriDaMostrare[s];
    const aziendeDelSettore = aziendeFiltrate.filter((a) => a.settore === settoreAttuale);

    if (aziendeDelSettore.length > 0) {
      // Titolo del settore
      contenutoLista.push(
        <Text
          key={`titolo-${settoreAttuale}`}
          style={[styles.listaTitolo, styles.titoloRosso, { marginTop: 15 }]}
        >
          {settoreAttuale}
        </Text>
      );

      // Aziende del settore
      for (let i = 0; i < aziendeDelSettore.length; i++) {
        const azienda = aziendeDelSettore[i];
        const isHoverContatta = hoveredButton === `${azienda.id}-contatta`;
        const isHoverVisualizza = hoveredButton === `${azienda.id}-visualizza`;

        contenutoLista.push(
          <View key={azienda.id} style={styles.itemCard}>
            <View style={styles.itemRow}>
              <View style={styles.itemInfo}>
                <Text style={[styles.itemNome, styles.nomeRosso]}>{azienda.nome}</Text>
                <Text style={styles.itemDettaglio}>Settore: {azienda.settore}</Text>
                <Text style={styles.itemDettaglio}>Sede: {azienda.sede}</Text>
              </View>
              <View style={styles.quadratiniContainer}>
                <Pressable
                  style={[
                    styles.quadratinoContatta,
                    isHoverContatta && styles.quadratinoHoverContatta,
                  ]}
                  onPress={() => handleContatta(azienda)}
                  onHoverIn={() => handleHoverIn(azienda.id, 'contatta')}
                  onHoverOut={handleHoverOut}
                >
                  <Text
                    style={[
                      styles.quadratinoText,
                      isHoverContatta && styles.quadratinoTextHover,
                    ]}
                  >
                    ✉️
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.quadratinoContatta,
                    isHoverVisualizza && styles.quadratinoHoverContatta,
                  ]}
                  onPress={() => handleVisualizza(azienda)}
                  onHoverIn={() => handleHoverIn(azienda.id, 'visualizza')}
                  onHoverOut={handleHoverOut}
                >
                  <Text
                    style={[
                      styles.quadratinoText,
                      isHoverVisualizza && styles.quadratinoTextHover,
                    ]}
                  >
                    👁️
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        );
      }
    }
  }

  // Se non ci sono aziende dopo il filtro
  if (aziendeFiltrate.length === 0) {
    contenutoLista.push(
      <Text key="nessun-risultato" style={{ textAlign: 'center', marginTop: 20 }}>
        Nessuna azienda trovata.
      </Text>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />

      {/* HEADER */}
      <View style={styles.headerContainer}>
        <View style={styles.miurLogo}>
          <Image source={miurLogo} style={styles.miurLogo} resizeMode='contain' />
        </View>

        <View style={styles.itsLogo}>
          <Pressable onPress={() => console.log("Pagina del Profilo")}>
            <Image source={itsLogo} style={styles.itsLogo} resizeMode='contain' />
          </Pressable>
        </View>

        <View style={styles.profileLogo}>
          <Pressable onPress={() => console.log("Pagina del Profilo")}>
            <Image source={profileLogo} style={styles.profileLogo} resizeMode='contain' />
          </Pressable>
        </View>
      </View>

      {/* BODY */}
      <View style={styles.bodyContainer}>

        {/* SIDEBAR */}
        <View style={styles.sideBar}>
          <SidebarButton text="Home" onPress={() => console.log("Visualizza Home!")} />
          <SidebarButton text="Logout" onPress={() => console.log("Visualizza Logout!")} />
          <SidebarButton text="Calendario" onPress={() => console.log("Visualizza Calendario!")} />
          <SidebarButton text="CV" onPress={() => console.log("Visualizza CV!")} />
          <SidebarButton text="Studenti" onPress={() => console.log("Visualizza Studenti!")} />
          <SidebarButton text="Aziende" onPress={() => console.log("Visualizza Aziende!")} />
        </View>

        {/* PAGINA SCROLLABILE */}
        <ScrollView style={styles.scrollView}>
          <View style={styles.listaContainer}>
            <Text style={[styles.listaTitolo, styles.titoloRosso]}>
              Lista Aziende Partner
            </Text>

            {/* BARRA DI RICERCA */}
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 8,
                padding: 10,
                marginBottom: 10,
                backgroundColor: '#fff',
              }}
              placeholder="Cerca per nome o sede..."
              value={ricerca}
              onChangeText={setRicerca}
            />

            {/* FILTRI PER SETTORE */}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
              {settori.map((settore) => (
                <Pressable
                  key={settore}
                  onPress={() => setFiltroSettore(settore)}
                  style={{
                    paddingVertical: 6,
                    paddingHorizontal: 12,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: '#8c1a1a',
                    backgroundColor: filtroSettore === settore ? '#8c1a1a' : '#fff',
                    marginRight: 8,
                    marginBottom: 8,
                  }}
                >
                  <Text
                    style={{
                      color: filtroSettore === settore ? '#fff' : '#8c1a1a',
                      fontWeight: 'bold',
                    }}
                  >
                    {settore}
                  </Text>
                </Pressable>
              ))}
            </View>

            {/* LISTA AZIENDE RAGGRUPPATE PER SETTORE */}
            {contenutoLista}
          </View>

          {/* FOOTER */}
          <View style={styles.footerContainer}>
            <Text style={[styles.footerText, { fontWeight: 'bold' }]}>
              I.T.S. Umbria Made in Italy - Innovazione, Tecnologia e Sviluppo
            </Text>
            <Text style={styles.footerText}>
              Sede legale: via Palermo, 80/A 06124 Perugia - C. F. 94134240541
            </Text>
            <Text style={styles.footerText}>Tel. +39 075582741</Text>
            <Text style={styles.footerText}>Email: info@itsumbria.it</Text>
            <Text style={styles.footerText}>PEC: itsumbria@legalmail.it</Text>
          </View>
        </ScrollView>

      </View>
    </View>
  );
}