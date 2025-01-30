import React from 'react';
import { Redirect } from 'expo-router';

export default function GoHome() {
  return <Redirect href={'/(tabs)/home'} />;
}
