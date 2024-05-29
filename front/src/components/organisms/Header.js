import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import HeaderNav from '@/components/molecules/HeaderNav';

const Header = () => {
  return (
    <>
      <div className="fixed mb-5 flex h-12 w-full items-center justify-between bg-white">
        <div className="bg-logo-blue w-auto rounded-r-md py-1 pl-4 pr-8">
          <Link href="/top">
            <Image src={'/logo.svg'} alt="Logo" width={100} height={40} />
          </Link>
        </div>
        <HeaderNav />
      </div>
    </>
  );
};
export default Header;
