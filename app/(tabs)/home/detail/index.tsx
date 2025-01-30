import { StyleSheet, Button } from 'react-native';
import { Text, View } from '@/components/Themed';

import React from 'react';
import { Link, Stack, router } from 'expo-router';

export default function DetailPage() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: 'Detail Page Title' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Details-Page</Text>
        <Button title='Go To Mechanical Category' onPress={() => router.push('/(tabs)/home/detail/Mechanical')} />
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
