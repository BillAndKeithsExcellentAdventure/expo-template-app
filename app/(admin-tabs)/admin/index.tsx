import { Button, StyleSheet } from 'react-native';
import React from 'react';

import { Text, View } from '@/components/Themed';
import { Link, router, Stack } from 'expo-router';

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: 'Admin Screen Title' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Admin Screen</Text>
        <Button title='Go To Home' onPress={() => router.replace('(tabs)/home')} />
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
});
