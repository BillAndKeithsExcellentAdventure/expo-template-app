/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView, StyleProp, TextStyle, TextInput as DefaultTextInput } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type TextSizeProps = {
  txtSize?: 'small' | 'standard' | 'sub-title' | 'title' | 'screen-header';
};

export type TextInputProps = TextSizeProps & ThemeProps & DefaultTextInput['props'];
export type TextProps = TextSizeProps & ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, txtSize, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  // Default text style
  let txtStyle: TextStyle = {};

  // Set the default fontSize and fontWeight based on txtSize
  if (txtSize) {
    switch (txtSize) {
      case 'small':
        txtStyle.fontSize = 12;
        txtStyle.fontWeight = 'thin';
        break;
      case 'standard':
        txtStyle.fontSize = 14;
        txtStyle.fontWeight = 'regular';
        break;
      case 'sub-title':
        txtStyle.fontSize = 16;
        txtStyle.fontWeight = 'medium';
        break;
        r;
      case 'title':
        txtStyle.fontSize = 18;
        txtStyle.fontWeight = '600';
        break;
      case 'screen-header':
        txtStyle.fontSize = 14;
        txtStyle.fontWeight = '500';
        break;
    }
  }

  // Return the text component with merged styles
  return <DefaultText style={[{ color }, txtStyle, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, txtSize, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const placeHolderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'placeHolder');

  // Default text style
  let txtStyle: TextStyle = {};

  // Set the default fontSize and fontWeight based on txtSize
  if (txtSize) {
    switch (txtSize) {
      case 'small':
        txtStyle.fontSize = 12;
        txtStyle.fontWeight = 'thin';
        break;
      case 'standard':
        txtStyle.fontSize = 14;
        txtStyle.fontWeight = 'regular';
        break;
      case 'sub-title':
        txtStyle.fontSize = 16;
        txtStyle.fontWeight = 'medium';
        break;
        r;
      case 'title':
        txtStyle.fontSize = 18;
        txtStyle.fontWeight = '600';
        break;
      case 'screen-header':
        txtStyle.fontSize = 14;
        txtStyle.fontWeight = '500';
        break;
    }
  }

  // Return the text component with merged styles
  return (
    <DefaultTextInput style={[{ color }, txtStyle, style]} {...otherProps} placeholderTextColor={placeHolderColor} />
  );
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
