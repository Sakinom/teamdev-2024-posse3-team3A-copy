import LaunchIcon from '@mui/icons-material/Launch';
import React, { useState } from 'react';

import AttributeCategoryHeatmap from '@/components/molecules/charts/AttributeCategoryHeatmap';
import PreviousCompanyComparisonHeatmap from '@/components/molecules/charts/PreviousCompanyComparisonHeatmap';
import QuestionStackedBarChart from '@/components/molecules/charts/QuestionStackedBarChart';
import QuestionTypeTransition from '@/components/molecules/charts/QuestionTypeTransition';

import QuestionCategoryTreemap from '../charts/QuestionCategoryTreemap';

const MainDetail = ({ surveyTermId }) => {
  // 属性別評価点
  const [dataType1, setDataType1] = useState(0);
  // 属性別評価比較
  const [dataType, setDataType] = useState(0);

  const toggleDataType = () => {
    setDataType((prevDataType) => (prevDataType === 0 ? 1 : 0));
  };

  return (
    <>
      <div className="my-4">
        <h2 className="text-xl font-bold text-gray-700">
          項目ごとのヒートマップ（16項目）
        </h2>
        <a href="/admin/help#heatmap">
          <h4 className="text-sm text-gray-500">
            問題32問のうち、Q1とQ2が項目1、Q3とQ4が項目2...と前後で１組の項目となっています。詳しくはヒートマップとは？
            <LaunchIcon
              sx={{
                height: '16px',
              }}
            />
          </h4>
        </a>
        <div className="flex gap-4">
          <QuestionCategoryTreemap surveyTermId={37} />
          <div className="my-5 rounded-md bg-slate-100 px-8 py-4">
            <h5 className="text-lg font-bold">16項目一覧</h5>
            <p className="text-sm text-gray-500">
              16項目それぞれに割り当てられている分野です。
            </p>
            <div className="ml-4 mt-2 gap-y-2">
              <p className="text-xs text-gray-500">項目1：顧客基盤の安定性</p>
              <p className="text-xs text-gray-500">項目2：理念戦略への納得感</p>
              <p className="text-xs text-gray-500">項目3：社会的貢献</p>
              <p className="text-xs text-gray-500">
                項目4：責任と顧客・社会への貢献
              </p>
              <p className="text-xs text-gray-500">項目5：連帯感と相互尊重</p>
              <p className="text-xs text-gray-500">
                項目6： 魅力的な上司・同僚
              </p>
              <p className="text-xs text-gray-500">
                項目7：勤務地や会社設備の魅力
              </p>
              <p className="text-xs text-gray-500">
                項目8：評価・給与と柔軟な働き方
              </p>
              <p className="text-xs text-gray-500">
                項目9：顧客ニーズや事業戦略の伝達
              </p>
              <p className="text-xs text-gray-500">
                項目１0：上司や会社からの理解
              </p>
              <p className="text-xs text-gray-500">項目１1：公平な評価</p>
              <p className="text-xs text-gray-500">
                項目１2：上司からの適切な教育・支援
              </p>
              <p className="text-xs text-gray-500">
                項目１3：顧客の期待を上回る提案
              </p>
              <p className="text-xs text-gray-500">
                項目１4：具体的な目標の共有
              </p>
              <p className="text-xs text-gray-500">項目１5：未来に向けた活動</p>
              <p className="text-xs text-gray-500">項目１6：ナレッジの標準化</p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-xl font-bold text-gray-700">
          各観点平均総合点推移
        </h2>
        <p className="pb-4 pt-2 text-sm text-gray-500">
          各観点平均総合点推移は組織状態、従業員エンゲージメントの平均点が出力されています。
          <br />
          また、組織状態は奇数番号問題、従業員エンゲージメントは偶数番号問題によって構成されています。
        </p>
        <div>
          <QuestionTypeTransition surveyTermId={37} />
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-bold text-gray-700">項目分布グラフ</h2>
        <div className="mt-2 rounded-md bg-slate-100 px-8 py-2">
          <p className="pb-4 pt-2 text-sm text-gray-500">
            項目については 
          <a href='/admin/help#questions'>各項目・設問一覧
            <LaunchIcon
              sx={{
                height: '16px',
              }}
            />
          </a>
            を参照ください
          </p>
          <div>
            <QuestionStackedBarChart
              surveyTermId={surveyTermId}
              questionCategoryId={1}
            />
          </div>
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-xl font-bold text-gray-700">属性別評価点</h2>
        <h4 className="text-sm text-gray-500">
          アンケート結果を従業員の属性別に確認出来ます。
        </h4>
        <div>
          <AttributeCategoryHeatmap dataType={dataType1} surveyTermId={37} />
        </div>
        <div className="flex justify-center gap-10">
          <button
            className="rounded-md bg-teal-400 px-8 py-2 text-sm font-bold text-white"
            onClick={() => setDataType1(0)}
          >
            性別
          </button>
          <button
            className="rounded-md bg-teal-400 px-8 py-2 text-sm font-bold text-white"
            onClick={() => setDataType1(1)}
          >
            入社歴
          </button>
          <button
            className="rounded-md bg-teal-400 px-8 py-2 text-sm font-bold text-white"
            onClick={() => setDataType1(2)}
          >
            年代
          </button>
          <button
            className="rounded-md bg-teal-400 px-8 py-2 text-sm font-bold text-white"
            onClick={() => setDataType1(3)}
          >
            ？？？
          </button>
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-xl font-bold text-gray-700">属性別評価点比較</h2>
        <div className="rounded-md bg-slate-100 p-4">
          <p className="text-sm text-gray-500">
            アンケート結果を前回・他社と比較出来ます。
          </p>
          <div className="flex justify-end">
            <button
              className="rounded-md bg-teal-400 px-8 py-2 text-sm font-bold text-white"
              onClick={toggleDataType}
            >
              偏差値/平均値切り替え
            </button>
          </div>
          <div>
            <PreviousCompanyComparisonHeatmap
              dataType={dataType}
              surveyTermId={37}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDetail;
