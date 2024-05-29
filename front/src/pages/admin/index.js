import { Box } from '@mui/material';

import AdminLayout from '@/layouts/AdminLayout';
import { useAuth } from '@/services/hooks/auth';

const Dashboard = () => {
  const { user } = useAuth({ middleware: 'auth' });

  return (
    <>
      <AdminLayout>
        <Box>
          <h1>Dashboard</h1>
        </Box>
      </AdminLayout>
    </>
  );
};

export default Dashboard;
