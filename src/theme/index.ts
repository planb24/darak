import { extendTheme } from '@chakra-ui/react';
import type { ThemeConfig } from '@chakra-ui/react';

import "./index.css";

const config: ThemeConfig = {
  disableTransitionOnChange: false,
};

export const theme = extendTheme({
  fonts: {
    heading: 'LINESeedKR-Bd, regular',
    body: 'LINESeedKR-Rg, regular',
  },
  components: {
    // Button: {
    // }
  },
  colors: {
    customWhite: '#F2F1F6'
  },
  config,
});