import { Button, Platform, StyleSheet } from 'react-native';
import { Text, View, TextInput } from '@/components/Themed';
import { router } from 'expo-router';
import { useColorScheme } from '@/components/useColorScheme';
import { useState } from 'react';
import { Colors } from '@/constants/Colors';

export default function CreateJobModalScreen() {
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
          <Button title='Done' onPress={() => router.back()} />
          <Button title='Cancel' onPress={() => router.back()} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
  },
  modalContent: {
    marginTop: 60,
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
