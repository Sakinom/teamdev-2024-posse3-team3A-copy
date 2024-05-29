import LaunchIcon from '@mui/icons-material/Launch';

import EnpsPie from '@/components/molecules/charts/EnpsPie';
import EnpsTransition from '@/components/molecules/charts/EnpsTransition';
import QuestionCategoryTransition from '@/components/molecules/charts/QuestionCategoryTransition';
import DisplayTree from '@/components/molecules/dashboard/DisplayTree';
import ResponseRate from '@/components/molecules/records/ResponseRate';
import Summary from '@/components/molecules/records/Summary';

const MainOverview = ({ surveyTermId }) => {
  return (
    <>
      {/* <div className="my-4">
        <h2 className="text-xl font-bold text-gray-700">要約</h2>
        <div>
          <Summary surveyTermId={surveyTermId} />
        </div>
      </div> */}

      <div className="mt-4 flex h-96">
        <div>
          <h2 className="text-xl font-bold text-gray-700">今回の全体評価</h2>
          <div className="w-40">
            <DisplayTree treeNumber={5} />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-700">回答率</h2>
          <div>
            <ResponseRate surveyTermId={surveyTermId} />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-700">
            2024.03.01分eNPS割合
          </h2>
          <div className="w-40">
            <EnpsPie surveyTermId={surveyTermId} />
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="text-xl font-bold text-gray-700">アンケート結果要約</h2>
        <p className="text-sm text-gray-400">
          アンケートから企業の良い点、悪い点をそれぞれ分析しました。
        </p>
        <div>
          <Summary surveyTermId={surveyTermId} />
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-xl font-bold text-gray-700">総合点推移</h2>
        <div>
          <QuestionCategoryTransition surveyTermId={surveyTermId} />
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-xl font-bold text-gray-700">eNPS推移</h2>
        <a href="https://emotion-tech.co.jp/column/2019/what_is_enps_with_case/">
          <h4 className="text-sm text-gray-500">
            <a href='/admin/help#enps'>
            eNPSとは？
            <LaunchIcon
              sx={{
                height: '16px',
              }}
            />
            </a>
          </h4>
        </a>
        {/* 外部サイトおいてます。変えたい。 muiとtailwind共存してます。tailwindで矢印を作りたい。 */}
        <EnpsTransition surveyTermId={surveyTermId} />
      </div>
    </>
  );
};

export default MainOverview;
