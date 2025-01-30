import { StyleSheet, Button } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link, Stack, useLocalSearchParams, router } from 'expo-router';
import React from 'react';

export default function CategoryIdPage() {
  const { categoryId } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: 'Mechanical Detail Title' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Mechanical Detail Page</Text>
        <Button title='Go To Mechanical Items' onPress={() => router.push('/(tabs)/home/detail/Mechanical/Plumbing')} />
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
    fontSize: 16,
    marginTop: 20,
  },
});
