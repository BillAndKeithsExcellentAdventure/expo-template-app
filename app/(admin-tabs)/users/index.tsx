import { StyleSheet } from 'react-native';
import React from 'react';

import { Text, View } from '@/components/Themed';
import { Link, Stack } from 'expo-router';

export default function UsersScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: 'Users Screen Title' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Users Screen</Text>
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
