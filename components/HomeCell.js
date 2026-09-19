// components/HomeCell.js
import { View } from 'react-native';
import styles from '../styles/AppStyles';

export default function HomeCell({
  children,
  height,
  width,
  justifyContent,
  alignItems,
  flexDirection,
  style,
}) {
  return (
    <View
      style={[
        styles.homeCell,
        {
          ...(height !== undefined && { height, overflow: 'hidden' }),
          ...(width !== undefined && { width }),
          ...(justifyContent !== undefined && { justifyContent }),
          ...(alignItems !== undefined && { alignItems }),
          flexDirection,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}