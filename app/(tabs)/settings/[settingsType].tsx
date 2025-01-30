import { Text, View } from '@/components/Themed';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function SettingTypePage() {
  const { settingsType } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: `${settingsType} Setting Page Title` }} />
      <View>
        <Text>{settingsType} Setting Page</Text>
      </View>
    </>
  );
}
