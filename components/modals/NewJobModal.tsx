import React, { useState } from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';
import { Colors } from '@/constants/Colors';
import { Text, View } from '@/components/Themed';

interface NewJobModalProps {
  onDone: (data: { name: string; location: string }) => void; // Callback to pass data back to HomeScreen
  onCancel: () => void; // Function to close the modal
}

export default function NewJobModal({ onDone, onCancel }: NewJobModalProps) {
  const [name, setName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const colorScheme = useColorScheme();

  // Define colors based on the color scheme (dark or light)

  const colors =
    colorScheme === 'dark'
      ? {
          background: Colors.dark.background,
          borderColor: Colors.dark.inputBorder,
          modalOverlayBackgroundColor: Colors.dark.modalOverlayBackgroundColor,
        }
      : {
          background: Colors.light.background,
          borderColor: Colors.light.inputBorder,
          modalOverlayBackgroundColor: Colors.light.modalOverlayBackgroundColor,
        };

  const handleSubmit = () => {
    // Ensure both fields are filled out before passing data
    if (name && location) {
      onDone({ name, location });
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <View style={[styles.modalContainer, { backgroundColor: colors.modalOverlayBackgroundColor }]}>
      <View style={[styles.modalContent, { backgroundColor: colors.background }]}>
        <Text style={styles.headerText}>New Job Details</Text>

        <TextInput
          style={[styles.input, { borderColor: colors.borderColor }]}
          placeholder='Job Name'
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={[styles.input, { borderColor: colors.borderColor }]}
          placeholder='Location'
          value={location}
          onChangeText={setLocation}
        />

        <View style={styles.buttonContainer}>
          <Button title='Done' onPress={handleSubmit} />
          <Button title='Cancel' onPress={onCancel} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    padding: 10,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
