import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

export const PaperThemeDefault = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#1A73E8',
    header: '#fff',
  },
};

export const PaperThemeDark = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    primary: '#1A73E8',
    header: '#303030',
  },
};

// export const CombinedDefaultTheme = {
//   ...PaperDefaultTheme,
//   ...NavigationDefaultTheme,
// };

// export const CombinedDarkTheme = {
//   ...PaperDarkTheme,
//   ...NavigationDarkTheme,
//   colors: {
//     ...NavigationDarkTheme.colors,
//     background: '#303030',
//     card: '#222222',
//     text: '#fff',
//   },
// };

export const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};
export const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};
