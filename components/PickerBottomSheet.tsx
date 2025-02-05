import React, { useState, useRef, useCallback, forwardRef, Ref, useImperativeHandle, useMemo } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

// Type for the props that the bottom sheet will receive
interface StatePickerBottomSheetProps {
  onSelectValue: (value: string) => void;
  options: { label: string; value: string }[];
}

export interface PickerBottomSheetRef {
  openPicker: () => void;
  closePicker: () => void;
}

export const PickerBottomSheet = forwardRef(function PickerBottomSheet(
  props: StatePickerBottomSheetProps,
  ref: Ref<PickerBottomSheetRef>
) {
  const { onSelectValue, options } = props;
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []); // Customize snap points as needed

  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelectValue = useCallback((value: string) => {
    setSelectedValue(value);
    onSelectValue(value);
    bottomSheetRef.current?.close();
  }, []);

  useImperativeHandle(ref, () => ({ openPicker, closePicker }));

  function openPicker() {
    bottomSheetRef.current?.expand();
  }

  function closePicker() {
    bottomSheetRef.current?.close();
  }

  const renderItem = useCallback(
    ({ item }: { item: { label: string; value: string } }) => (
      <TouchableOpacity onPress={() => handleSelectValue(item.value)} style={styles.item}>
        <Text style={styles.itemText}>{item.label}</Text>
      </TouchableOpacity>
    ),
    []
  );

  return (
      <BottomSheet
        ref={bottomSheetRef}
        index={-1} // Bottom sheet starts closed
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Select a State</Text>
          <FlatList data={options} keyExtractor={(o) => o.value} renderItem={renderItem} />
        </View>
      </BottomSheet>
  );
});

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
});
