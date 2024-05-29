import { Cell, Pie, PieChart, Tooltip } from 'recharts';

import useCustomSWR from '@/lib/useCustomSWR';

const EnpsPie = ({ surveyTermId }) => {
  const url = `/charts/enps/pie/${surveyTermId}`;
  const { data, isLoading, isError } = useCustomSWR(url);
  const colors = ['#6D64D3', '#808080', '#4AA3C9'];

  if (isError) return <div>エラーが発生しました</div>;
  if (isLoading) return <div>読み込み中</div>;

  // データ整形
  if (data) {
    const dataLabel = data.map((item) => item.label);
    const dataValue = data.map((item) => item.value);

    dataLabel.map((dataLabel, index) => <li key={index}>{dataLabel}</li>);
    dataValue.map((dataValue, index) => <li key={index}>{dataValue}</li>);
  }

  return (
    <PieChart id="enps_pie" width={730} height={500}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="label"
        cx="25%"
        cy="40%"
        innerRadius="25%"
        outerRadius="50%"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default EnpsPie;
