import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';

import { useAuth } from '@/services/hooks/auth';

const HeaderNav = () => {
  const router = useRouter();
  const isAdminPath = router.pathname.includes('admin');
  const { user, logout } = useAuth();

  return (
    <>
      <div className="mx-2 flex gap-3 text-gray-700">
        <div className="flex flex-col">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <button className="text-10 cursor-pointer font-bold" onClick={logout}>
            logout
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
