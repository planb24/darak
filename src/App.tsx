import React from "react";
import { ReactElement } from "react";
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';

import { theme } from "./theme/index";

export const App = (): ReactElement => {
  return (
    <ChakraProvider theme={theme}>
      <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
        <Flex wrap="wrap" margin="8" minHeight="90vh">
          <Box width="full" as="main" marginY={22}>
            <RouterProvider router={router} />
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};