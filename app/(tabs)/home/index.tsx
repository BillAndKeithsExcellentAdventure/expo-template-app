import { Platform, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import MaterialDesign from '@expo/vector-icons/MaterialCommunityIcons';
import { Text, View } from '@/components/Themed';
import { Link, Stack, router } from 'expo-router';
import { useColorScheme } from '@/components/useColorScheme';
import { TwoColumnListEntry, TwoColumnList } from '@/components/TwoColumnList';
import { FontAwesome } from '@expo/vector-icons';
import { ActionButtonProps } from '@/components/ButtonBar';
import { Colors } from '@/constants/Colors';
import { ScreenHeader } from '@/components/ScreenHeader';

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

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  // Define colors based on the color scheme (dark or light)
  const colors =
    colorScheme === 'dark'
      ? {
          screenBackground: Colors.dark.background,
          listBackground: Colors.dark.listBackground,
          itemBackground: Colors.dark.itemBackground,
          iconColor: Colors.dark.iconColor,
          shadowColor: Colors.dark.shadowColor,
        }
      : {
          screenBackground: Colors.light.background,
          listBackground: Colors.light.listBackground,
          itemBackground: Colors.light.itemBackground,
          iconColor: Colors.light.iconColor,
          shadowColor: Colors.light.shadowColor,
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
                  <>
                    <Pressable
                      onPress={() => {
                        router.replace('/(admin-tabs)/admin');
                        console.log('going to route /(admin-tabs)/admin');
                      }}
                    >
                      {({ pressed }) => (
                        <MaterialDesignTabBarIcon
                          name='cog'
                          size={24}
                          color={colorScheme === 'light' ? 'black' : 'white'}
                          style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                        />
                      )}
                    </Pressable>
                  </>
                )}
              />
            ),
          }}
        />
        <View style={[styles.screenContainer, { backgroundColor: colors.screenBackground }]}>
          <Text txtSize='title'>Home Screen</Text>
          <Link style={styles.link} href={'(tabs)/home/detail'}>
            <Text>Go to Details</Text>
          </Link>
          <View style={[styles.twoColListContainer, { backgroundColor: colors.screenBackground }]}>
            <TwoColumnList
              data={listData}
              onPress={(i) => console.log(`Hello from item ${i.primaryTitle}`)}
              buttons={buttons}
            />
          </View>
        </View>
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
            <>
              <Pressable
                onPress={() => {
                  router.replace('/(admin-tabs)/admin');
                  console.log('going to route /(admin-tabs)/admin');
                }}
              >
                {({ pressed }) => (
                  <MaterialDesignTabBarIcon
                    name='cog'
                    size={24}
                    color={colorScheme === 'light' ? 'black' : 'white'}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </>
          ),
        }}
      />
      <View style={[styles.screenContainer, { backgroundColor: colors.screenBackground }]}>
        <Text txtSize='title'>Home Screen</Text>
        <Link style={styles.link} href={'(tabs)/home/detail'}>
          <Text>Go to Details</Text>
        </Link>
        <View style={[styles.twoColListContainer, { backgroundColor: colors.screenBackground }]}>
          <TwoColumnList
            data={listData}
            onPress={(i) => console.log(`Hello from item ${i.primaryTitle}`)}
            buttons={buttons}
          />
        </View>
      </View>
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
});
