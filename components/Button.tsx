import { Colors } from '@/constants/Colors';
import { ComponentType } from 'react';
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  TextStyle,
  useColorScheme,
  ViewStyle,
  StyleSheet,
  TextProps,
  Text,
} from 'react-native';
import React from 'react';

type Presets = 'default' | 'filled' | 'reversed';

export interface ButtonAccessoryProps {
  style: StyleProp<any>;
  pressableState: PressableStateCallbackType;
  disabled?: boolean;
}

export interface ButtonProps extends PressableProps {
  /**
   * The text to display.
   */
  text?: string;
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * An optional style override for the "pressed" state.
   */
  pressedStyle?: StyleProp<ViewStyle>;
  /**
   * An optional style override for the button text.
   */
  textStyle?: StyleProp<TextStyle>;
  /**
   * An optional style override for the button text when in the "pressed" state.
   */
  pressedTextStyle?: StyleProp<TextStyle>;
  /**
   * An optional style override for the button text when in the "disabled" state.
   */
  disabledTextStyle?: StyleProp<TextStyle>;
  /**
   * One of the different types of button presets.
   */
  preset?: Presets;
  /**
   * An optional component to render on the right side of the text.
   * Example: `RightAccessory={(props) => <View {...props} />}`
   */
  RightAccessory?: ComponentType<ButtonAccessoryProps>;
  /**
   * An optional component to render on the left side of the text.
   * Example: `LeftAccessory={(props) => <View {...props} />}`
   */
  LeftAccessory?: ComponentType<ButtonAccessoryProps>;
  /**
   * Children components.
   */
  children?: React.ReactNode;
  /**
   * disabled prop, accessed directly for declarative styling reasons.
   * https://reactnative.dev/docs/pressable#disabled
   */
  disabled?: boolean;
  /**
   * An optional style override for the disabled state
   */
  disabledStyle?: StyleProp<ViewStyle>;
}

/**
 * A component that allows users to take actions and make choices.
 * Wraps the Text component with a Pressable component.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/app/components/Button/}
 * @param {ButtonProps} props - The props for the `Button` component.
 * @returns {JSX.Element} The rendered `Button` component.
 * @example
 * <Button
 *   text="Ok"
 *   style={styles.button}
 *   textStyle={styles.buttonText}
 *   onPress={handleButtonPress}
 * />
 */
export function Button(props: ButtonProps) {
  const {
    text,
    style: $viewStyleOverride,
    pressedStyle: $pressedViewStyleOverride,
    textStyle: $textStyleOverride,
    pressedTextStyle: $pressedTextStyleOverride,
    disabledTextStyle: $disabledTextStyleOverride,
    children,
    RightAccessory,
    LeftAccessory,
    disabled,
    disabledStyle: $disabledViewStyleOverride,
    ...rest
  } = props;

  const colorScheme = useColorScheme();

  // Define colors based on the color scheme (dark or light)
  const colors =
    colorScheme === 'dark'
      ? {
          text: Colors.dark.text,
          listBackground: Colors.dark.listBackground,
          itemBackground: Colors.dark.itemBackground,
          iconColor: Colors.dark.iconColor,
          shadowColor: Colors.dark.shadowColor,
          borderColor: Colors.dark.borderColor,
          neutral100: Colors.dark.neutral100,
          neutral200: Colors.dark.neutral200,
          neutral300: Colors.dark.neutral300,
          neutral400: Colors.dark.neutral400,
          neutral700: Colors.dark.neutral700,
          neutral800: Colors.dark.neutral800,
        }
      : {
          text: Colors.light.text,
          listBackground: Colors.light.listBackground,
          itemBackground: Colors.light.itemBackground,
          iconColor: Colors.light.iconColor,
          shadowColor: Colors.light.shadowColor,
          borderColor: Colors.light.borderColor,
          neutral100: Colors.light.neutral100,
          neutral200: Colors.light.neutral200,
          neutral300: Colors.light.neutral300,
          neutral400: Colors.light.neutral400,
          neutral700: Colors.light.neutral700,
          neutral800: Colors.light.neutral800,
        };

  const preset: Presets = props.preset ?? 'default';
  let viewStyles: StyleProp<ViewStyle> = {};
  if (preset === 'default') {
    viewStyles = {
      borderWidth: 1,
      borderColor: colors.neutral400,
      backgroundColor: colors.neutral100,
    };
  } else if (preset === 'filled') {
    viewStyles = {
      backgroundColor: colors.neutral300,
    };
  } else if (preset === 'reversed') {
    viewStyles = {
      backgroundColor: colors.neutral800,
    };
  }

  let textStyles: StyleProp<TextStyle> = {};
  if (preset === 'default') {
    textStyles = {
      color: colors.text,
    };
  } else if (preset === 'filled') {
    textStyles = {
      color: colors.text,
    };
  } else if (preset === 'reversed') {
    textStyles = {
      color: colors.neutral100,
    };
  }

  const content = text || children;

  return (
    <Pressable
      style={[styles.baseViewStyle, viewStyles]}
      accessibilityRole='button'
      accessibilityState={{ disabled: !!disabled }}
      {...rest}
      disabled={disabled}
    >
      {(state) => (
        <>
          {!!LeftAccessory && <LeftAccessory style={[styles.leftAccessoryStyle]} pressableState={state} disabled={disabled} />}
          <Text style={[styles.baseTextStyle, textStyles]}>{content}</Text>
          {!!RightAccessory && (
            <RightAccessory style={styles.rightAccessoryStyle} pressableState={state} disabled={disabled} />
          )}
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  baseViewStyle: {
    minHeight: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 10,
    overflow: 'hidden',
  },
  baseTextStyle: {
    fontSize: 16,
    fontWeight: 'medium',
    lineHeight: 20,
    textAlign: 'center',
    flexShrink: 1,
    flexGrow: 0,
    zIndex: 2,
  },
  rightAccessoryStyle: {
    marginStart: 8,
    zIndex: 1,
  },
  leftAccessoryStyle: {
    marginEnd: 8,
    zIndex: 1,
  },
});
