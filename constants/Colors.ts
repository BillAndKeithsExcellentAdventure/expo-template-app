const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    borderColor: '#DDDDDD',
    headerBackgroundColor: '#F8F8F8',
    listBackground: '#fefefe',
    itemBackground: '#fff',
    iconColor: '#000',
    pressedIconColor: '#111',
    shadowColor: '#000',
    separatorColor: '#DDDDDD',
    inputBorder: '#777',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.8)', // ...(Platform.OS === 'web'
    placeHolder: 'rgba(0, 0, 0, 0.4)',
    modalOverlayBackgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    borderColor: '#666',
    headerBackgroundColor: '#1F1F1F',
    listBackground: '#222',
    itemBackground: '#000',
    iconColor: '#fff',
    pressedIconColor: '#eee',
    shadowColor: '#fff',
    separatorColor: '#666',
    inputBorder: '#777',
    boxShadow: '0px 2px 5px rgba(255, 255, 255, 0.8)', // ...(Platform.OS === 'web'
    placeHolder: 'rgba(255, 255, 255, 0.4)',
    modalOverlayBackgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
};
