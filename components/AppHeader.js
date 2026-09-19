import { useState, useRef } from 'react';
import { View, Image, Pressable, Text, Linking, Modal } from 'react-native';
import styles from '../styles/AppStyles';

import miurLogo from '../assets/miurLogo.png';
import itsLogo from '../assets/itsWideLogo.png';
import profileLogo from '../assets/profileLogo.png';

const ITS_UMBRIA_HOME_URL = 'https://www.itsumbria.it/';

export default function AppHeader({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });
  const profileRef = useRef(null);

  const openMenu = () => {
    
    profileRef.current.measureInWindow((x, y, width, height) => {
      setMenuPosition({ top: y + height + 5, right: 80 });
      setMenuOpen(true);
    });
  };

  return (
    <View style={styles.headerContainer}>

      <Image source={miurLogo} style={styles.miurLogo} resizeMode='contain'/>

      <Pressable onPress={() => Linking.openURL(ITS_UMBRIA_HOME_URL)}>
        <Image source={itsLogo} style={styles.itsLogo} resizeMode='contain'/>
      </Pressable>

      <View ref={profileRef} style={styles.profileWrapper}>
        <Pressable onPress={openMenu}>
          <Image source={profileLogo} style={styles.profileLogo} resizeMode='contain'/>
        </Pressable>
      </View>

      {/* MODAL: si apre sopra tutta l'app */}
      <Modal
        visible={menuOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setMenuOpen(false)}
      >
        {/* Overlay che copre tutto lo schermo: click ovunque chiude il menu */}
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setMenuOpen(false)}
        >
          {/* Il menu vero e proprio: il Pressable interno ferma la propagazione,
              così cliccare sulle voci non chiude subito il menu prima di navigare */}
          <View
            style={[
              styles.profileMenu,
              { position: 'absolute', top: menuPosition.top, right: menuPosition.right },
            ]}
          >
            <Pressable
              style={styles.profileMenuItem}
              onPress={() => { setMenuOpen(false); navigation.navigate('Profile'); }}
            >
              <Text style={styles.profileMenuText}>Profilo</Text>
            </Pressable>

            <Pressable
              style={styles.profileMenuItem}
              onPress={() => { setMenuOpen(false); console.log('Impostazioni cliccato'); }}
            >
              <Text style={styles.profileMenuText}>Impostazioni</Text>
            </Pressable>

            <Pressable
              style={[styles.profileMenuItem, styles.profileMenuItemLast]}
              onPress={() => { setMenuOpen(false); navigation.navigate('Login'); }}
            >
              <Text style={styles.profileMenuText}>Logout</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}