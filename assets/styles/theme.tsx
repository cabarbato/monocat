import * as React from 'react';
import { DefaultTheme } from 'react-native-paper';

const colors = {
    white: '#F3F3F1',
    light: '#EDEEED',
    dark: '#D3D4D0',
    black: '#272822',
    red: '#F92672',
    purple: '#AE81FF',
    blue: '#66D9EF',
    green: '#A6E22E',
    yellow: '#E6DB74',
    orange: '#FD971F',
  },
  theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      ...colors,
      primary: colors.red,
      accent: colors.blue,
      background:colors.light,
      surface: colors.white,
      text: colors.black,
      disabled: colors.dark,
      placeholder: colors.dark,
      backdrop: colors.black,
      onSurface: colors.dark,
      notification: colors.yellow
    },
  };

export default theme;
