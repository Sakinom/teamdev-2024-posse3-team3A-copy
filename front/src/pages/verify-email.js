import Link from 'next/link';
import { useState } from 'react';

import ApplicationLogo from '@/components/atoms/ApplicationLogo';
import AuthCard from '@/components/atoms/AuthCard';
import Button from '@/components/atoms/Button';
import GuestLayout from '@/layouts/GuestLayout';
import { useAuth } from '@/services/hooks/auth';

const VerifyEmail = () => {
  const { logout, resendEmailVerification } = useAuth({
    middleware: 'auth',
    redirectIfAuthenticated: '/admin/dashboard',
  });

  const [status, setStatus] = useState(null);

  return (
    <GuestLayout>
      <AuthCard
        logo={
          <Link href="/">
            <ApplicationLogo className="size-20 fill-current text-gray-500" />
          </Link>
        }
      >
        <div className="mb-4 text-sm text-gray-600">
          Thanks for signing up! Before getting started, could you verify your
          email address by clicking on the link we just emailed to you? If you
          didn't receive the email, we will gladly send you another.
        </div>

        {status === 'verification-link-sent' && (
          <div className="mb-4 text-sm font-medium text-green-600">
            A new verification link has been sent to the email address you
            provided during registration.
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <Button onClick={() => resendEmailVerification({ setStatus })}>
            Resend Verification Email
          </Button>

          <button
            type="button"
            className="text-sm text-gray-600 underline hover:text-gray-900"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </AuthCard>
    </GuestLayout>
  );
};

export default VerifyEmail;
