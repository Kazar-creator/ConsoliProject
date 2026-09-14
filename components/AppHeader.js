import { useState } from 'react';
import { View, Image, Pressable, Text, Linking } from 'react-native';
import styles from '../styles/AppStyles';

import miurLogo from '../assets/miurLogo.png';
import itsLogo from '../assets/itsWideLogo.png';
import profileLogo from '../assets/profileLogo.png';

const ITS_UMBRIA_HOME_URL = 'https://www.itsumbria.it/';

export default function AppHeader({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={styles.headerContainer}>

      <Image source={miurLogo} style={styles.miurLogo} resizeMode='contain'/>

      <Pressable onPress={() => Linking.openURL(ITS_UMBRIA_HOME_URL)}>
        <Image source={itsLogo} style={styles.itsLogo} resizeMode='contain'/>
      </Pressable>

      <View style={styles.profileWrapper}>
        <Pressable onPress={() => setMenuOpen((open) => !open)}>
          <Image source={profileLogo} style={styles.profileLogo} resizeMode='contain'/>
        </Pressable>

        {menuOpen && (
          <View style={styles.profileMenu}>
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
        )}
      </View>
    </View>
  );
}
