import { Container, extendTheme } from '@chakra-ui/react';
import type { ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import "./index.css";
import { cardTheme } from './components/card';

const config: ThemeConfig = {
  initialColorMode: "dark",
  disableTransitionOnChange: false,
};

export const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('#F2F1F6', 'gray.800')(props),
      }
    }),
  },
  fonts: {
    heading: 'LINESeedKR-Bd, regular',
    body: 'LINESeedKR-Rg, regular',
  },
  components: {
    Card: cardTheme,
  },
  colors: {
    customWhite: '#F2F1F6',
  },
  config,
});