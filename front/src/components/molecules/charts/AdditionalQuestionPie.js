import { Cell, Pie, PieChart, Tooltip } from 'recharts';

const AdditionalQuestionPie = ({ data }) => {
  const colors = ['#6D64D3', '#808080'];
  return (
    <PieChart id="enps_pie" width={730} height={500}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="answer"
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

export default AdditionalQuestionPie;
