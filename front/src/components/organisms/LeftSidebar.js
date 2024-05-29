import { Box } from '@mui/material';
import React from 'react';

import theme from '@/theme/scheme';

const LeftSidebar = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        width: '238px',
        height: '100vh',
      }}
    >
      <h1>LeftSidebar</h1>
    </Box>
  );
};
export default LeftSidebar;
