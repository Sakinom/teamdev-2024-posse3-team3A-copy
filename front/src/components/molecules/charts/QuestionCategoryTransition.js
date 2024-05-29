import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import useCustomSWR from '@/lib/useCustomSWR';

const QuestionCategoryTransition = ({ surveyTermId }) => {
  const url = `/charts/question_category/transition/${surveyTermId}`;
  const { data, isLoading, isError } = useCustomSWR(url);

  if (isError) return <div>エラーが発生しました</div>;
  if (isLoading) return <div>読み込み中</div>;
  return (
    <LineChart
      id="question_category_transition"
      width={800}
      height={300}
      data={data}
      margin={{ top: 10, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="total" stroke="#14b8a6" />
      <CartesianGrid stroke="#ccc" strokeDasharray="1 0" />
      <XAxis
        dataKey="month"
        interval={0}
        tick={{
          fontsize: 16,
          fill: '#000',
        }}
      />
      {/* xのラベルが見切れる */}
      <YAxis dataKey="total" />
      {/* total -> 総合点 にしたい */}
      <Legend iconSize={20} iconType="plainline" />
      <Tooltip />
    </LineChart>
  );
};

export default QuestionCategoryTransition;
