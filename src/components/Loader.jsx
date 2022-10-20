import * as React from 'react';
import { Box, Spinner } from '@chakra-ui/react';

function Loader() {
  const spinnerColor = '#67E8F9';

  return (
    <Box
      className="loading-spinner"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      minHeight="100vh"
    >
      <Spinner
        size="xl"
        thickness="4px"
        speed="0.65s"
        label="loading"
        color={spinnerColor}
      />
    </Box>
  );
}

export default Loader;
