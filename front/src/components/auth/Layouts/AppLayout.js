import Navigation from '@/components/auth/Layouts/Navigation';
import { useAuth } from '@/services/hooks/auth';

const AppLayout = ({ header, children }) => {
  const { user } = useAuth({ middleware: 'auth' });

  return (
    <div className="min-h-screen">
      <Navigation user={user} />

      {/* Page Heading */}
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {header}
        </div>
      </header>

      {/* Page Content */}
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
