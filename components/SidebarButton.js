import { useState } from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../styles/AppStyles.js';

export default function SidebarButton({ text, onPress, disabled }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            onHoverIn={() => !disabled && setHovered(true)}
            onHoverOut={() => !disabled && setHovered(false)}
            style={({ pressed }) => [
                styles.buttonStyle, 
                styles.buttonShadow,
                pressed && styles.buttonPressed,
                hovered && styles.buttonHover,
                disabled && { opacity: 0.5}
            ]}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
}