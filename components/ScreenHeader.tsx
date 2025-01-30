// components/ScreenHeader.tsx

import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useColorScheme } from '@/components/useColorScheme';
import { Colors } from '@/constants/Colors';

// Define the type for the props
export interface ScreenHeaderProps {
  headerLeft?: () => JSX.Element | null; // Optional component for the left side
  headerRight?: () => JSX.Element | null; // Optional component for the right side
  title: string; // Title for the header
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({ headerLeft, headerRight, title }) => {
  const colorScheme = useColorScheme();

  // Define colors based on the color scheme (dark or light)
  const colors =
    colorScheme === 'dark'
      ? {
          screenBackground: Colors.dark.background,
          shadowColor: Colors.dark.shadowColor,
        }
      : {
          screenBackground: Colors.light.background,
          shadowColor: Colors.light.shadowColor,
        };

  return (
    <View
      style={[styles.headerContainer, { shadowColor: colors.shadowColor, backgroundColor: colors.screenBackground }]}
    >
      {/* Left Header Component */}
      <View style={styles.headerLeft}>{headerLeft ? headerLeft() : null}</View>

      {/* Title */}
      <View style={styles.headerTitleContainer}>
        <Text txtSize='sub-title'>{title}</Text>
      </View>

      {/* Right Header Component */}
      <View style={styles.headerRight}>{headerRight ? headerRight() : null}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    elevation: 3, // Adds a little shadow for Android
    shadowOpacity: 0.4,
    shadowRadius: 4,
  } as ViewStyle, // Type for the header container style
  headerLeft: {
    flex: 1,
    justifyContent: 'center',
  } as ViewStyle,
  headerTitleContainer: {
    flex: 2,
    alignItems: 'center',
  } as ViewStyle,

  headerRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  } as ViewStyle,
});
