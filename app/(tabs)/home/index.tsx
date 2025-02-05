import {
  LayoutChangeEvent,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import MaterialDesign from '@expo/vector-icons/MaterialCommunityIcons';
import { Text, View } from '@/components/Themed';
import { Link, Stack, router } from 'expo-router';
import { useColorScheme } from '@/components/useColorScheme';
import { TwoColumnListEntry, TwoColumnList } from '@/components/TwoColumnList';
import { FontAwesome } from '@expo/vector-icons';
import { ActionButtonProps } from '@/components/ButtonBar';
import { Colors } from '@/constants/Colors';
import { ScreenHeader } from '@/components/ScreenHeader';
import { PickerItem } from '@/components/ValuePicker';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { TextField } from '@/components/TextField';

interface ThemedColors {
  screenBackground: string;
  listBackground: string;
  itemBackground: string;
  iconColor: string;
  shadowColor: string;
  text: string;
  bottomSheetBackground: string;
}

function FAIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={24} style={{ marginBottom: 0 }} {...props} />;
}

const listData: TwoColumnListEntry[] = [
  {
    imageUri: 'x',
    primaryTitle: 'Title1',
    secondaryTitle: 'title-right',
    lines: [
      { left: 'left1', right: 'right1' },
      { left: 'left2', right: 'right2' },
    ],
  },
  {
    imageUri: 'x',
    primaryTitle: 'Title2',
    secondaryTitle: 'title-right',
    lines: [
      { left: 'left1', right: 'right1' },
      { left: 'left2', right: 'right2' },
      { left: 'left3', right: 'right3' },
    ],
  },
  {
    imageUri: 'x',
    primaryTitle: 'Title3',
    secondaryTitle: 'title-right',
    lines: [
      { left: 'left1', right: 'right1' },
      { left: 'left2', right: 'right2' },
      { left: 'left3', right: 'right3' },
      { left: 'left4', right: 'right4' },
    ],
  },
  {
    imageUri: 'x',
    primaryTitle: 'Title4',
    secondaryTitle: 'title-right',
    lines: [{ left: 'left1', right: 'right1' }],
  },
  {
    imageUri: 'x',
    primaryTitle: 'Title5',
    secondaryTitle: 'title-right',
    lines: [
      { left: 'left1', right: 'right1' },
      { left: 'left2', right: 'right2' },
    ],
  },
  {
    imageUri: 'x',
    primaryTitle: 'Title6',
    secondaryTitle: 'title-right',
    lines: [
      { left: 'left1', right: 'right1' },
      { left: 'left2', right: 'right2' },
      { left: 'left3', right: 'right3' },
    ],
  },
  {
    imageUri: 'x',
    primaryTitle: 'Title7',
    secondaryTitle: 'title-right',
    lines: [
      { left: 'left1', right: 'right1' },
      { left: 'left2', right: 'right2' },
      { left: 'left3', right: 'right3' },
    ],
  },
  {
    imageUri: 'x',
    primaryTitle: 'Title8',
    secondaryTitle: 'title-right',
    lines: [
      { left: 'left1', right: 'right1' },
      { left: 'left2', right: 'right2' },
      { left: 'left3', right: 'right3' },
    ],
  },
  {
    imageUri: 'x',
    primaryTitle: 'Title9',
    secondaryTitle: 'title-right',
    lines: [
      { left: 'left1', right: 'right1' },
      { left: 'left2', right: 'right2' },
      { left: 'left3', right: 'right3' },
    ],
  },
  {
    imageUri: 'x',
    primaryTitle: 'Title10',
    secondaryTitle: 'title-right',
    lines: [
      { left: 'left1', right: 'right1' },
      { left: 'left2', right: 'right2' },
      { left: 'left3', right: 'right3' },
    ],
  },
  {
    imageUri: 'x',
    primaryTitle: 'Title11',
    secondaryTitle: 'title-right',
    lines: [
      { left: 'left1', right: 'right1' },
      { left: 'left2', right: 'right2' },
      { left: 'left3', right: 'right3' },
    ],
  },
];

function MaterialDesignTabBarIcon(props: { name: React.ComponentProps<typeof MaterialDesign>['name']; color: string }) {
  return <MaterialDesign size={28} style={{ marginBottom: -3 }} {...props} />;
}

function HomeScreenModalMenu({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: (val: boolean) => void;
}) {
  const handleGoToAdminItemPress = (): void => {
    router.replace('/(admin-tabs)/admin');
    setModalVisible(false);
  };

  const handleMenuItemPress = (item: string): void => {
    console.log(`${item} pressed`);
    setModalVisible(false); // Close the modal after selecting an item
  };

  const colorScheme = useColorScheme();
  const colors =
    colorScheme === 'dark'
      ? {
          screenBackground: Colors.dark.background,
          separatorColor: Colors.dark.separatorColor,
          modalOverlayBackgroundColor: Colors.dark.modalOverlayBackgroundColor,
        }
      : {
          screenBackground: Colors.light.background,
          separatorColor: Colors.light.separatorColor,
          modalOverlayBackgroundColor: Colors.light.modalOverlayBackgroundColor,
        };

  const topMargin = Platform.OS === 'ios' ? 110 : 50;

  return (
    <SafeAreaView>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Close on back press
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={[styles.modalOverlay, { backgroundColor: colors.modalOverlayBackgroundColor }]}>
            <View style={[styles.modalContent, { backgroundColor: colors.screenBackground, marginTop: topMargin }]}>
              <TouchableOpacity
                onPress={() => handleGoToAdminItemPress()}
                style={[styles.menuItem, { borderBottomColor: colors.separatorColor }]}
              >
                <Text style={styles.menuText}>Go to Admin</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleMenuItemPress('Option 2')}
                style={[styles.menuItem, { borderBottomColor: colors.separatorColor }]}
              >
                <Text style={styles.menuText}>Option 2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleMenuItemPress('Option 3')}
                style={[styles.menuItem, { borderBottomColor: colors.separatorColor }]}
              >
                <Text style={styles.menuText}>Option 3</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
}

function HomeScreenContent({ buttons, colors }: { buttons: ActionButtonProps[]; colors: ThemedColors }) {
  const sheetRef = useRef<BottomSheet>(null);
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

  const renderItem = useCallback(
    ({ item }: { item: PickerItem }) => (
      <TouchableOpacity onPress={() => handleSelection(item.value)} style={styles.item}>
        <Text style={styles.itemText}>{item.label}</Text>
      </TouchableOpacity>
    ),
    []
  );
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.screenContainer, { backgroundColor: colors.screenBackground }]}>
      <Text txtSize='title'>Home Screen</Text>
      <Link style={styles.link} href={'/(tabs)/home/detail'}>
        <Text>Go to Details</Text>
      </Link>
      <TouchableOpacity activeOpacity={1} onPress={() => handleTogglePicker()} style={{ width: '50%' }}>
        <View pointerEvents='none'>
          <TextField
            label='Template'
            placeholder='Item'
            value={selectedValue}
            readOnly
            RightAccessory={(props) => <FAIcon name='caret-right' color={colors.iconColor} />}
          />
        </View>
      </TouchableOpacity>

      <View style={[styles.twoColListContainer, { backgroundColor: colors.screenBackground }]}>
        <TwoColumnList
          data={listData}
          onPress={(i) => console.log(`Hello from item ${i.primaryTitle}`)}
          buttons={buttons}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        handleIndicatorStyle={{ backgroundColor: colors.text }}
        backgroundStyle={{ backgroundColor: colors.bottomSheetBackground }}
        index={-1}
        style={{ backgroundColor: colors.bottomSheetBackground }}
      >
        <View style={{ backgroundColor: colors.bottomSheetBackground }}>
          <Text
            txtSize='title'
            text='Select Template'
            style={{ alignSelf: 'center', backgroundColor: colors.bottomSheetBackground }}
          />
          <BottomSheetFlatList
            style={{ paddingHorizontal: 30 }}
            data={data}
            keyExtractor={(i) => i.value}
            renderItem={renderItem}
            contentContainerStyle={[styles.contentContainer, { backgroundColor: colors.screenBackground }]}
          />
        </View>
      </BottomSheet>
    </View>
  );
}

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // Define colors based on the color scheme (dark or light)
  const colors =
    colorScheme === 'dark'
      ? {
          screenBackground: Colors.dark.background,
          listBackground: Colors.dark.listBackground,
          itemBackground: Colors.dark.itemBackground,
          iconColor: Colors.dark.iconColor,
          shadowColor: Colors.dark.shadowColor,
          bottomSheetBackground: Colors.dark.bottomSheetBackground,
          text: Colors.dark.text,
        }
      : {
          screenBackground: Colors.light.background,
          listBackground: Colors.light.listBackground,
          itemBackground: Colors.light.itemBackground,
          iconColor: Colors.light.iconColor,
          shadowColor: Colors.light.shadowColor,
          bottomSheetBackground: Colors.light.bottomSheetBackground,
          text: Colors.light.text,
        };

  if (Platform.OS === 'web') {
    colors.screenBackground = '#efefef';
  }

  const isEntry = (obj: any): obj is TwoColumnListEntry => {
    return typeof obj.primaryTitle === 'string' && typeof obj.secondaryTitle === 'string';
  };

  const buttons: ActionButtonProps[] = [
    {
      icon: <FontAwesome name='heart-o' size={16} color={colors.iconColor} />,
      label: 'Like',
      onPress: (e, actionContext) => {
        if (isEntry(actionContext)) {
          console.log('Like pressed - ', actionContext.primaryTitle);
        } else {
          console.log('Like pressed - ', actionContext);
        }
      },
    },
    {
      icon: <FontAwesome name='comment-o' size={16} color={colors.iconColor} />,
      label: 'Comment',
      onPress: (e, actionContext) => {
        if (isEntry(actionContext)) {
          console.log('Comment pressed - ', actionContext.primaryTitle);
        } else {
          console.log('Comment pressed - ', actionContext);
        }
      },
    },
    {
      icon: <FontAwesome name='share' size={16} color={colors.iconColor} />,
      label: 'Share',
      onPress: (e, actionContext) => {
        if (isEntry(actionContext)) {
          console.log('Share pressed - ', actionContext.primaryTitle);
        } else {
          console.log('Share pressed - ', actionContext);
        }
      },
    },
  ];

  // Androids render buttons on right but then are unable to activate a onPress so the current solutions is to replace the entire header.
  if (Platform.OS === 'android') {
    return (
      <>
        <Stack.Screen
          options={{
            headerShown: true,
            header: () => (
              <ScreenHeader
                title='Android Home Screen'
                headerRight={() => (
                  <Pressable
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    {({ pressed }) => (
                      <MaterialDesignTabBarIcon
                        name='cog'
                        size={24}
                        color={colors.iconColor}
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    )}
                  </Pressable>
                )}
              />
            ),
          }}
        />
        <HomeScreenContent buttons={buttons} colors={colors} />
        <HomeScreenModalMenu modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </>
    );
  }

  // Not Android
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Std Home Screen',
          headerRight: () => (
            <Pressable
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              {({ pressed }) => (
                <MaterialDesignTabBarIcon
                  name='cog'
                  size={24}
                  color={colors.iconColor}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          ),
        }}
      />
      <HomeScreenContent buttons={buttons} colors={colors} />
      <HomeScreenModalMenu modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
  },
  twoColListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 10,
  },
  link: {
    color: '#0066cc', // A common blue color for links
    fontSize: 16, // A standard font size
    fontWeight: 'bold', // Bold text for better visibility
    textDecorationLine: 'underline', // To give it the traditional link look
    paddingVertical: 8, // Provides space above and below the link
  },
  modalOverlay: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  modalContent: {
    marginRight: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: 150,
    elevation: 5, // To give the modal a slight shadow
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  menuText: {
    fontSize: 16,
  },
  contentContainer: {
    backgroundColor: 'white',
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
