import { Box, Container, Tab, Tabs } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect, useState } from 'react';

import Description from '@/components/organisms/records/Description';
import MainDetail from '@/components/organisms/records/MainDetail';
import MainOverview from '@/components/organisms/records/MainOverview';
import MonthlyOverview from '@/components/organisms/records/MonthlyOverview';
import Plan from '@/components/organisms/records/Plan';
import AdminLayout from '@/layouts/AdminLayout';
import { useAuth } from '@/services/hooks/auth';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container>
          <Box>{children}</Box>
        </Container>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function TabProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Record() {
  const router = useRouter();
  const { user } = useAuth({ middleware: 'auth' });

  const [value, setValue] = React.useState(0);
  const [surveyTermId, setSurveyTermId] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // survey_term_id が取得された後に処理を実行する useEffect
  useEffect(() => {
    const { survey_term_id } = router.query;
    if (survey_term_id) {
      setSurveyTermId(survey_term_id);
    }
  }, [router.query.survey_term_id]);

  // surveyTermId が取得されるまで表示を待機
  if (surveyTermId === null) {
    return <div>読み込み中...</div>;
  }

  return (
    <>
      <AdminLayout>
        <Head>
          <title>Records</title>
        </Head>
        <main className="flex">
          <article className="m-8">
            <div className="my-4">
              <div>
                <h1 className="text-black-900 text-2xl font-bold">カルテ</h1>
                <h3 className="text-gray-500">
                  これまでのアンケートの結果の閲覧、分析ができます
                </h3>
              </div>
              <h2 className="text-2xl font-bold text-green-main">
                [2024.03.01]
              </h2>
              {/* あとでapiから持ってくる */}
              <div>
                <Box sx={{ width: '100%' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="メインアンケート概要" {...TabProps(0)} />
                      <Tab label="施策入力" {...TabProps(1)} />
                      <Tab label="メインアンケート詳細" {...TabProps(2)} />
                      <Tab label="マンスリーアンケート" {...TabProps(3)} />
                      <Tab label="記述回答" {...TabProps(4)} />
                    </Tabs>
                  </Box>
                  {/* 第一タブ */}
                  <CustomTabPanel value={value} index={0}>
                    <MainOverview surveyTermId={surveyTermId} />
                  </CustomTabPanel>
                  {/* 第二タブ */}
                  <CustomTabPanel value={value} index={1}>
                    <Plan />
                  </CustomTabPanel>
                  {/* 第三タブ */}
                  <CustomTabPanel value={value} index={2}>
                    <MainDetail surveyTermId={surveyTermId} />
                  </CustomTabPanel>
                  {/* 第四タブ */}
                  <CustomTabPanel value={value} index={3}>
                    <MonthlyOverview surveyTermId={surveyTermId} />
                  </CustomTabPanel>
                  {/* 第五タブ */}
                  <CustomTabPanel value={value} index={4}>
                    <Description />
                  </CustomTabPanel>
                </Box>
              </div>
            </div>
          </article>
        </main>
      </AdminLayout>
    </>
  );
}
