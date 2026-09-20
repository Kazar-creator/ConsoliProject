import { useState } from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../styles/AppStyles.js';

export default function SidebarButton({ text, width = 100, height = 45, onPress }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Pressable
            onPress={onPress}
            onHoverIn={() => setHovered(true)}
            onHoverOut={() => setHovered(false)}
           
            style={({ pressed }) => [
                styles.customButtonStyle, 
                styles.buttonShadow,
                pressed && styles.buttonPressed,
                hovered && styles.buttonHover,
                {width, height}
            ]}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
}