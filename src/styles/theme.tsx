import { DefaultTheme } from 'react-native-paper';
import { StyleType } from '../typings';
import { Theme } from 'react-native-paper/lib/typescript/types';

const colors: StyleType = {
  white: '#FFFFFF',
  light: '#F3F3F1',
  dark: '#D3D4D0',
  black: '#272822',
  red: '#F92672',
  purple: '#AE81FF',
  blue: '#66D9EF',
  green: '#A6E22E',
  yellow: '#E6DB74',
  orange: '#FD971F',
},
  theme: Theme = {
    ...DefaultTheme,
    roundness: 100,
    dark: false,
    colors: {
      ...colors,
      ...DefaultTheme.colors,
      primary: colors.red,
      accent: colors.blue,
      background: colors.white,
      surface: colors.white,
      text: colors.purple,
      disabled: colors.light,
      placeholder: colors.dark,
      backdrop: colors.black,
      onSurface: colors.green,
      notification: colors.yellow
    },
  };

export { colors };
export default theme;
