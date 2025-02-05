import React, { useCallback, useRef, useMemo, useState } from 'react';
import { StyleSheet, Button, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { View, Text } from '@/components/Themed';
import { TextField } from '@/components/TextField';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

export interface PickerItem {
  label: string;
  value: string;
}

function FAIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={24} style={{ marginBottom: 0 }} {...props} />;
}

export const ValuePicker = () => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const data = useMemo<PickerItem[]>(() => {
    const result: PickerItem[] = [];

    for (let i = 0; i < 50; i++) {
      result.push({
        label: `label-${i}`,
        value: `value-${i}`,
      });
    }
    return result;
  }, []);

  const snapPoints = useMemo(() => ['50%'], []);
  const [selectedValue, setSelectedValue] = useState<string | undefined>();
  const isSheetOpenRef = useRef<boolean>(false);

  const handleTogglePicker = useCallback(() => {
    if (isSheetOpenRef.current) {
      isSheetOpenRef.current = false;
      sheetRef.current?.close();
    } else {
      isSheetOpenRef.current = true;
      sheetRef.current?.snapToIndex(0);
    }
  }, []);

  const handleSelection = useCallback((item: string) => {
    console.log('Selected Item = ', item);
    isSheetOpenRef.current = false;
    sheetRef.current?.close();
    setSelectedValue(item);
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: PickerItem }) => (
      <TouchableOpacity onPress={() => handleSelection(item.value)} style={styles.item}>
        <Text style={styles.itemText}>{item.label}</Text>
      </TouchableOpacity>
    ),
    []
  );
  const colorScheme = useColorScheme();

  // Define colors based on the color scheme (dark or light)
  const colors =
    colorScheme === 'dark'
      ? {
          iconColor: Colors.dark.iconColor,
        }
      : {
          iconColor: Colors.light.iconColor,
        };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} onPress={() => handleTogglePicker()} style={{ width: '50%' }}>
        <View pointerEvents='none'>
          <TextField
            placeholder='Item'
            value={selectedValue}
            readOnly
            RightAccessory={(props) => <FAIcon name='caret-right' color={colors.iconColor} />}
          />
        </View>
      </TouchableOpacity>

      <BottomSheet ref={sheetRef} snapPoints={snapPoints} enableDynamicSizing={false} index={-1}>
        <Text txtSize='title' text='Select Value' style={{ alignSelf: 'center' }} />
        <BottomSheetFlatList
          data={data}
          keyExtractor={(i) => i.value}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
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
