import { extendTheme } from '@chakra-ui/react';
import colors from '@chakra-ui/theme/foundations/colors';
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

export default extendTheme({
  config: { initialColorMode: 'light' },
  styles: {
    global: () => ({
      body: {
        color: 'text',
        bg: 'bg',
      },
    }),
  },
  fonts: {
    heading: "Poppins, 'sans-serif'",
    body: "Inter, 'sans-serif'",
  },
  colors: {
    primary: colors.green,
    secondary: colors.yellow,
  },
  semanticTokens: {
    colors: {
      primary: {
        default: 'primary.500',
        _dark: 'primary.300',
      },
      secondary: {
        default: 'secondary.500',
        _dark: 'secondary.300',
      },
      bg: {
        default: 'white',
        _dark: 'gray.800',
      },
      fg: {
        default: 'gray.100',
        _dark: 'gray.900',
      },
      text: {
        default: 'gray.800',
        _dark: 'white',
      },
    },
  },
});
