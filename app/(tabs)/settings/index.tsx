import { StyleSheet } from 'react-native';
import React from 'react';

import { Text, View } from '@/components/Themed';
import { Link, Stack } from 'expo-router';

export default function SettingsScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: 'Settings Title' }} />
      <View style={styles.container}>
        <Text style={styles.title}>SettingsScreen</Text>
        <Link style={styles.link} href={'/(tabs)/settings/Account'}>
          <Text style={styles.link}>Go To Account Setting</Text>
        </Link>
        <Link style={styles.link} href={'/(tabs)/settings/Network'}>
          <Text>Go To Network Setting</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    color: '#0066cc', // A common blue color for links
    fontSize: 16, // A standard font size
    fontWeight: 'bold', // Bold text for better visibility
    textDecorationLine: 'underline', // To give it the traditional link look
    paddingVertical: 8, // Provides space above and below the link
  },
});
