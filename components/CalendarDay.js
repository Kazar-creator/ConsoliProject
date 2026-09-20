import { View, Text, TouchableOpacity } from 'react-native';

// Componente personalizzato per il singolo giorno del calendario.
// - Il giorno odierno viene evidenziato con un cerchio (bordo) intorno al numero.
// - Il giorno selezionato viene evidenziato con uno sfondo pieno.
// - Sotto al numero vengono mostrati fino a 3 pallini colorati, uno per evento presente in quel giorno.

export default function CalendarDay({ date, state, marking, onPress }) {
  const isToday = state === 'today';
  const isDisabled = state === 'disabled';
  const isSelected = !!marking?.selected;
  const dots = marking?.dots || [];

  return (
    <TouchableOpacity
      onPress={() => onPress(date)}
      activeOpacity={0.7}
      style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 2 }}
    >
      <View
        style={{
          width: 28,
          height: 28,
          borderRadius: 14,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isSelected ? '#154f78' : 'transparent',
          borderWidth: isToday ? 2 : 0,
          borderColor: '#154f78',
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: isToday ? 'bold' : '600',
            color: isSelected ? '#ffffff' : isDisabled ? '#c0c0c0' : '#000000',
          }}
        >
          {date.day}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', height: 7, marginTop: 2 }}>
        {dots.slice(0, 3).map((dot, index) => (
          <View
            key={index}
            style={{
              width: 5,
              height: 5,
              borderRadius: 2.5,
              backgroundColor: dot.color,
              marginHorizontal: 1,
            }}
          />
        ))}
      </View>
    </TouchableOpacity>
  );
}