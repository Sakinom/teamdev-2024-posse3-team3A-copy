import { Box, Stack } from '@mui/material';

import LeftSidebar from '@/layouts/AdminLayout/LeftSidebar';

const AdminLayout = ({ children }) => {
  return (
    <Stack direction="row">
      <LeftSidebar />
      <Box
        sx={{
          px: 6,
          maxHeight: `100vh`,
          width: '100%',
          maxWidth: 'calc(100% - 238px)',
          marginLeft: '238px',
        }}
      >
        {children}
      </Box>
    </Stack>
  );
};

export default AdminLayout;
