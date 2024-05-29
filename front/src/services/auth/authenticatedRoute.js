import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '@/services/hooks/auth';

const AuthenticatedRoute = ({ children }) => {
  const router = useRouter();
  const { user, error } = useAuth({ middleware: 'auth' });

  useEffect(() => {
    if (error || !user) {
      router.push('/login');
    }
  }, [user, error]);

  if (!user || error) {
    return null;
  }

  return children;
};

export default AuthenticatedRoute;
