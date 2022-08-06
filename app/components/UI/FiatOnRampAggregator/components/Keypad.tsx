import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import KeypadComponent from '../../../Base/Keypad';
import { useTheme } from '../../../../util/theme';
import { colors as importedColors } from '../../../../styles/common';
import { Colors } from '../../../../util/theme/models';

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    keypad: {
      paddingHorizontal: 24,
      backgroundColor: colors.background.alternative,
    },
    digitButton: {
      borderRadius: 8,
      backgroundColor: colors.background.default,
      paddingVertical: 5,
      margin: 3.5,
      shadowColor: importedColors.shadow,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.0,

      elevation: 1,
    },
    digitText: {
      fontSize: 20,
      color: colors.text.default,
      padding: 0,
    },
    periodButton: {
      borderRadius: 8,
      backgroundColor: importedColors.transparent,
      paddingVertical: 0,
      margin: 3.5,
    },
  });

interface Props {
  /**
   * Custom style for container
   */
  style?: ViewStyle;
}

const Keypad = ({
  style,
  ...props
}: Props &
  Omit<
    React.ComponentProps<typeof KeypadComponent>,
    | 'digitButtonStyle'
    | 'digitTextStyle'
    | 'periodButtonStyle'
    | 'periodTextStyle'
    | 'deleteButtonStyle'
    | 'deleteIcon'
    | 'style'
  >) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <KeypadComponent
      {...props}
      style={[styles.keypad, style]}
      digitButtonStyle={styles.digitButton}
      digitTextStyle={styles.digitText}
      periodButtonStyle={styles.periodButton}
      periodTextStyle={styles.digitText}
      deleteButtonStyle={styles.periodButton}
      deleteIcon={
        <Feather name="delete" size={24} color={colors.icon.default} />
      }
    />
  );
};

export default Keypad;
