import { Box, Button, List, ListItem } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { SidebarLink } from '@/layouts/AdminLayout/LeftSidebar/Link';
import { useAuth } from '@/services/hooks/auth';
import theme from '@/theme/scheme';

const LeftSidebar = () => {
  const router = useRouter();

  const { logout } = useAuth();

  const links = [
    {
      href: 'http://localhost:3000/admin/record/list',
      src: '/icon/box.svg',
      title: 'カルテ閲覧',
      textColor: 'text-white',
    },
    {
      href: 'http://localhost:3000/admin/create/monthly',
      src: '/icon/additional_survey.svg',
      title: 'マンスリーアンケート',
      textColor: 'text-white',
    },
    {
      href: 'http://localhost:3000/admin/register',
      src: '/icon/register_employee.svg',
      title: '従業員管理',
      textColor: 'text-white',
    },
    {
      href: 'http://localhost:3000/admin/help',
      src: '/icon/question_mark.svg',
      title: 'ヘルプページ',
      textColor: 'text-white',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        width: '238px',
        height: '100vh',
        paddingY: '32px',
        position: 'fixed',
      }}
    >
      <a href="http://localhost:3000/admin/dashboard">
        <Box>
          <div className="mt-10 flex items-center justify-center gap-3">
            <div>
              <Image
                src="/img/Logo-Gajup!-white.png"
                alt="logo Gajup!-white"
                width={60}
                height={60}
              />
            </div>
            <h2 className="text-4xl font-bold text-teal-500 text-white">
              Gajup!
            </h2>
          </div>
        </Box>
      </a>
      <List
        component="nav"
        sx={{
          marginTop: '64px',
          marginX: 'auto',
          width: 'fit-content',
        }}
      >
        {links.map((link) => (
          <ListItem key={link.title}>
            <SidebarLink {...link} />
          </ListItem>
        ))}
      </List>
      <Button
        sx={{
          color: 'white',
          cursor: 'pointer',
          position: 'absolute',
          bottom: '32px',
          left: '32px',
        }}
        onClick={logout}
      >
        ログアウト
      </Button>
    </Box>
  );
};

export default LeftSidebar;
