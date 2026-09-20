import { useEffect, useState } from 'react';
import { Modal, View, Text, TextInput, Switch, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/AppStyles';

const COLORS = ['#154f78', '#008DC9', '#34C759', '#FF9500', '#DC3545', '#8E44AD', '#FF2D55', '#6c757d'];

const REMINDER_OPTIONS = [
  { label: 'Nessuno', value: 'none' },
  { label: '5 min prima', value: '5' },
  { label: '15 min prima', value: '15' },
  { label: '30 min prima', value: '30' },
  { label: '1 ora prima', value: '60' },
  { label: '1 giorno prima', value: '1440' },
];

function formatDateLabel(dateString) {
  if (!dateString) return '';
  const d = new Date(`${dateString}T00:00:00`);
  const label = d.toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

// visible: booleano che controlla la visibilità del modale
// date: stringa 'YYYY-MM-DD' del giorno per cui si sta creando/modificando l'evento
// existingEvent: se presente, il form si apre in modalità modifica precompilato
// onSave(eventObject) / onDelete(eventId) / onClose()
export default function EventFormModal({ visible, date, existingEvent, onClose, onSave, onDelete }) {
  const [name, setName] = useState('');
  const [allDay, setAllDay] = useState(false);
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('10:00');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState(COLORS[0]);
  const [reminder, setReminder] = useState('none');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!visible) return;

    if (existingEvent) {
      setName(existingEvent.name || '');
      setAllDay(!!existingEvent.allDay);
      setStartTime(existingEvent.startTime || '09:00');
      setEndTime(existingEvent.endTime || '10:00');
      setDescription(existingEvent.description || '');
      setColor(existingEvent.color || COLORS[0]);
      setReminder(existingEvent.reminder || 'none');
    } else {
      setName('');
      setAllDay(false);
      setStartTime('09:00');
      setEndTime('10:00');
      setDescription('');
      setColor(COLORS[0]);
      setReminder('none');
    }
    setError('');
  }, [visible, existingEvent]);

  const isValidTime = (value) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);

  const handleSave = () => {
    if (!name.trim()) {
      setError("Inserisci il nome dell'evento.");
      return;
    }
    if (!allDay && (!isValidTime(startTime) || !isValidTime(endTime))) {
      setError('Inserisci orari validi nel formato HH:MM.');
      return;
    }

    onSave({
      id: existingEvent ? existingEvent.id : `${date}-${Date.now()}`,
      date,
      name: name.trim(),
      allDay,
      startTime: allDay ? null : startTime,
      endTime: allDay ? null : endTime,
      description: description.trim(),
      color,
      reminder,
    });
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.eventModalOverlay}>
        <View style={styles.eventModalBox}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <Text style={styles.eventModalTitle}>
              {existingEvent ? 'Modifica evento' : 'Nuovo evento'}
            </Text>
            <Text style={styles.eventModalDate}>{formatDateLabel(date)}</Text>

            {/* NOME */}
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Nome evento"
            />

            {/* TUTTO IL GIORNO */}
            <View style={styles.eventModalRow}>
              <Text style={styles.label}>Tutto il giorno</Text>
              <Switch
                value={allDay}
                onValueChange={setAllDay}
                trackColor={{ false: '#dee2e6', true: '#008DC9' }}
              />
            </View>

            {/* ORARI */}
            {!allDay && (
              <View style={styles.eventModalRow}>
                <View style={{ flex: 1, marginRight: 10 }}>
                  <Text style={styles.label}>Ora inizio</Text>
                  <TextInput
                    style={styles.input}
                    value={startTime}
                    onChangeText={setStartTime}
                    placeholder="HH:MM"
                    maxLength={5}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.label}>Ora fine</Text>
                  <TextInput
                    style={styles.input}
                    value={endTime}
                    onChangeText={setEndTime}
                    placeholder="HH:MM"
                    maxLength={5}
                  />
                </View>
              </View>
            )}

            {/* DESCRIZIONE */}
            <Text style={styles.label}>Descrizione</Text>
            <TextInput
              style={[styles.input, styles.eventModalTextArea]}
              value={description}
              onChangeText={setDescription}
              placeholder="Descrizione (opzionale)"
              multiline
              numberOfLines={3}
            />

            {/* COLORE */}
            <Text style={styles.label}>Colore</Text>
            <View style={styles.eventModalColorRow}>
              {COLORS.map((c) => (
                <TouchableOpacity
                  key={c}
                  onPress={() => setColor(c)}
                  style={[
                    styles.eventModalColorDot,
                    { backgroundColor: c },
                    color === c && styles.eventModalColorDotSelected,
                  ]}
                />
              ))}
            </View>

            {/* PROMEMORIA */}
            <Text style={styles.label}>Promemoria</Text>
            <View style={styles.eventModalChipRow}>
              {REMINDER_OPTIONS.map((opt) => (
                <TouchableOpacity
                  key={opt.value}
                  onPress={() => setReminder(opt.value)}
                  style={[
                    styles.eventModalChip,
                    reminder === opt.value && styles.eventModalChipSelected,
                  ]}
                >
                  <Text
                    style={[
                      styles.eventModalChipText,
                      reminder === opt.value && styles.eventModalChipTextSelected,
                    ]}
                  >
                    {opt.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {!!error && <Text style={styles.errorText}>{error}</Text>}

            {/* AZIONI */}
            <View style={styles.eventModalActions}>
              {existingEvent && (
                <TouchableOpacity
                  style={[styles.eventModalButton, styles.eventModalDeleteButton]}
                  onPress={() => onDelete(existingEvent.id)}
                >
                  <Text style={styles.eventModalDeleteButtonText}>Elimina</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={[styles.eventModalButton, styles.eventModalCancelButton]}
                onPress={onClose}
              >
                <Text style={styles.eventModalCancelButtonText}>Annulla</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.eventModalButton, styles.eventModalSaveButton]}
                onPress={handleSave}
              >
                <Text style={styles.eventModalSaveButtonText}>Salva</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}