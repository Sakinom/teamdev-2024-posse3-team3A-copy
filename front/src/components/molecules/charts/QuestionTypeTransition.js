import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';

import useCustomSWR from '@/lib/useCustomSWR';

const QuestionTypeTransition = ({ surveyTermId }) => {
  const url = `/charts/question-type/transition/${surveyTermId}`;
  const { data, isLoading, isError } = useCustomSWR(url);

  if (isError) return <div>エラーが発生しました</div>;
  if (isLoading) return <div>読み込み中</div>;

  return (
    <LineChart
      id="question_type_transition"
      width={800}
      height={300}
      data={data}
    >
      <Line type="monotone" dataKey="組織状態" stroke="#14b8a6" />
      <Line type="monotone" dataKey="従業員エンゲージメント" stroke="#7070dc" />
      <CartesianGrid stroke="#ccc" strokeDasharray="1 0" />
      <XAxis
        dataKey="month"
        interval={0}
        tick={{
          fontsize: 16,
          fill: '#000',
        }}
      />
      <YAxis />
      <Legend iconSize={20} iconType="plainline" />
    </LineChart>
  );
};

export default QuestionTypeTransition;
