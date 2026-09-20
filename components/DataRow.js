import { View, Text } from 'react-native';
import styles from '../styles/AppStyles.js';

export default function DataRow({ label, value }) {
    return (
        <View style={styles.datiUtenteWrapper}>
            <Text style={styles.sottotitolo}>{label}</Text>
            <Text style={styles.testo}>{value}</Text>
        </View>
    );
}