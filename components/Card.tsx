import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useColorScheme } from '@/components/useColorScheme';

// Define types for the props
interface CardWithButtonsProps {
  imageUri?: string;
  title: string;
  lines?: string[];
  buttons?: string[];
}
export function Card({ title, imageUri, lines, buttons }: CardWithButtonsProps) {
  const maxLines = lines?lines.slice(0, 2):[];
  const colorScheme = useColorScheme() ?? 'light';

  // Define colors based on the color scheme (dark or light)
  const colors =
    colorScheme === 'dark'
      ? {
          background: '#333',
          title: '#fff',
          subtitle: '#bbb',
          itemBackground: '#444',
        }
      : {
          background: '#fff',
          title: '#000',
          subtitle: '#555',
          itemBackground: '#f9f9f9',
        };

  return (
    <View style={[styles.card, { backgroundColor: colors.itemBackground }]}>
      <View style={styles.cardContent}>
        {/* Left Image */}
        {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
        ):<></>}

        {/* Card Text Content */}
        <View style={styles.textContent}>
            <Text txtSize='title'>
              {title}
            </Text>
          {maxLines.map((line, index) => (
            <Text key={index} txtSize='standard'>
              {line}
            </Text>
          ))}
        </View>
      </View>

      {/* Buttons Row */}
        {buttons && buttons.length > 0 ? (
      <View style={styles.buttonsRow}>
          {buttons.map((buttonLabel, index) => (
            <TouchableOpacity key={index}>
              <Text>{buttonLabel}</Text>
            </TouchableOpacity>
          ))}
      </View>
        ) : (
            <></>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: '#eee',
    shadowOpacity: 0.1,
    shadowOffset: { width: 8, height: 8 },
    shadowRadius: 6,
    elevation: 10,
    margin: 10,
    width: '100%',
  },
  cardContent: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContent: {
    flex: 1,
    justifyContent: 'center',
  },
  textLine: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
  },
});

