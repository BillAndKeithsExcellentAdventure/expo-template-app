import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function ItemPage() {
  const { itemId } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: `${itemId} Item` }} />
      <View style={styles.container}>
        <Text style={styles.title}>{itemId} Item-Page</Text>
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
