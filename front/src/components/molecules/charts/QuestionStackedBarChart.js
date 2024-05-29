import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import useCustomSWR from '@/lib/useCustomSWR';

export default function QuestionStackedBarChart({
  surveyTermId,
  questionCategoryId,
}) {
  const url = `/charts/question/ratio/${surveyTermId}/${questionCategoryId}`;
  const { data, isLoading, isError } = useCustomSWR(url);

  if (isError) return <div>エラーが発生しました</div>;
  if (isLoading) return <div>読み込み中</div>;

  return (
    <ComposedChart
      id="question_stacked_bar_chart"
      width={800}
      height={300}
      data={data}
    >
      <XAxis dataKey="question" padding={{ right: 50, left: 50 }} />
      <YAxis
        yAxisId={1}
        label={{ value: '回答数', angle: -90, dx: -20 }}
        domain={[0, 'dataMax']}
      />
      <YAxis
        yAxisId={2}
        orientation="right"
        domain={[0, 5]}
        tickCount={6}
        label={{ value: '平均スコア', angle: -90, dx: 20 }}
      />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar
        yAxisId={1}
        dataKey="1. そう思わない"
        stackId="a"
        barSize={50}
        fill="#E08781"
      />
      <Bar
        yAxisId={1}
        dataKey="2. あまりそう思わない"
        stackId="a"
        fill="#E6A373"
      />
      <Bar yAxisId={1} dataKey="3. どちらでもない" stackId="a" fill="#14B8A6" />
      <Bar yAxisId={1} dataKey="4. 少しそう思う" stackId="a" fill="#4A77EB" />
      <Bar yAxisId={1} dataKey="5. そう思う" stackId="a" fill="#BF50E7" />
      <Line yAxisId={2} dataKey="平均スコア" />
    </ComposedChart>
  );
}
