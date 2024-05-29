import LaunchIcon from '@mui/icons-material/Launch';

import EnpsPie from '@/components/molecules/charts/EnpsPie';
import QuestionTypeTransition from '@/components/molecules/charts/QuestionTypeTransition';

const MonthlyOverview = ({ surveyTermId }) => {
  // 第四タブ
  return (
    <>
      <div className="my-4">
        <h2 className="text-xl font-bold text-gray-700">常設2問のデータ推移</h2>
        <h3 className="mb-8 text-sm text-gray-500">
          項目については 
          <a href='/admin/help#questions'>
          各項目・設問一覧
          <LaunchIcon
            sx={{
              height: '16px',
            }}
          />
          </a>
          を参照ください
        </h3>
        <div className="w-10/12 rounded-lg bg-slate-100 p-4">
          <div className="my-4 mb-2 ml-10 font-bold">
            <p className="mb-2 text-sm text-gray-500">
              Q2.
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <p className="text-sm  text-gray-500">
              Q3.
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
          <div>
            <QuestionTypeTransition surveyTermId={surveyTermId} />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-700">追加設問のデータ</h2>
        <div className="flex">
          <EnpsPie surveyTermId={surveyTermId} />
          <EnpsPie surveyTermId={surveyTermId} />
          <EnpsPie surveyTermId={surveyTermId} />
        </div>
      </div>
    </>
  );
};

export default MonthlyOverview;
