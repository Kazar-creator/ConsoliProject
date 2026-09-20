import { View } from 'react-native';

import SidebarButton from './SidebarButton';
import styles from '../styles/AppStyles';

export default function AppSidebar({ navigation, activeRoute }) {

  return (
    <View style={styles.sideBar}>
      <SidebarButton
        text="Home"
        onPress={() => navigation.navigate('Home')}
        disabled={activeRoute === 'Home'}
      >
      </SidebarButton>

      <SidebarButton
        text="Studenti"
        onPress={() => navigation.navigate('Students')}
        disabled={activeRoute === 'Students'}
      >
      </SidebarButton>

      <SidebarButton
        text="Aziende"
        onPress={() => navigation.navigate('Companies')}
        disabled={activeRoute === 'Companies'}
      >
      </SidebarButton>

      <SidebarButton
        text="Logout"
        onPress={() => navigation.navigate('Login')}
        disabled={activeRoute === 'Login'}
      >
      </SidebarButton>
    </View>
  );
}