import { DefaultTheme, configureFonts } from 'react-native-paper';
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
  _fontConfig = {
    regular: {
      fontFamily: 'Courier Prime',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Courier Prime Bold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Courier Prime',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Courier Prime',
      fontWeight: 'normal',
    },
  }, fontConfig = {
    web: _fontConfig,
    ios: _fontConfig,
    android: _fontConfig,
  },
  root_size = 10,
  theme: Theme = {
    ...DefaultTheme,
    roundness: root_size * 10,
    dark: false,
    fonts: configureFonts(fontConfig),
    colors: {
      ...colors,
      ...DefaultTheme.colors,
      primary: colors.red,
      accent: colors.blue,
      background: 'transparent',
      surface: colors.white,
      text: colors.purple,
      disabled: colors.light,
      placeholder: colors.dark,
      backdrop: colors.black,
      onSurface: colors.green,
      notification: colors.yellow
    },
  };

export { colors, root_size };
export default theme;
