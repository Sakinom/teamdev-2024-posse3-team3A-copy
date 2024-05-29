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

const EnpsTransition = ({ surveyTermId }) => {
  const url = `/charts/enps/transition/${surveyTermId}`;
  const { data, isLoading, isError } = useCustomSWR(url);

  if (isError) return <div>エラーが発生しました</div>;
  if (isLoading) return <div>読み込み中</div>;
  return (
    <LineChart
      id="enps_transition"
      width={800}
      height={300}
      data={data}
      margin={{ top: 10, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="enps" stroke="#14b8a6" />
      <CartesianGrid stroke="#ccc" strokeDasharray="1 0" />
      <XAxis
        dataKey="month"
        interval={4}
        tick={{
          fontSize: 16,
          fill: '#000',
        }}
      />
      <YAxis dataKey="enps" domain={[-100, 100]} />
      <Legend iconSize={20} iconType="plainline" />
      <Tooltip />
    </LineChart>
  );
};

export default EnpsTransition;
