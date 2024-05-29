import dynamic from 'next/dynamic';

import useCustomSWR from '@/lib/useCustomSWR';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function QuestionCategoryTreemap({ surveyTermId }) {
  const url = `/charts/question_category/treemap/${surveyTermId}`;
  const { data, isLoading, isError } = useCustomSWR(url); // TODO: survey_term_idを取得する（カルテID）

  if (isError) return <div>エラーが発生しました</div>;
  if (isLoading) return <div>読み込み中</div>;

  const option = {
    legend: { show: false },
    chart: { height: 350, type: 'treemap' },
    // title: { text: 'Treemap with Color scale' },
    dataLabels: {
      enabled: true,
      style: { fontSize: '12px' },
      formatter: function (text, op) {
        return [text, op.value];
      },
      offsetY: -4,
    },
    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.1,
        reverseNegativeShade: true,
        colorScale: {
          ranges: [
            { from: 0, to: 2, color: '#CD363A' },
            { from: 3, to: 5, color: '#52B12C' },
          ],
        },
      },
    },
  };

  const series = [
    {
      data: data.data,
    },
  ];

  return (
    <>
      <div id="chart">
        <ApexChart
          options={option}
          series={series}
          type="treemap"
          height={350}
          width={500}
        />
      </div>
      <div id="html-dist"></div>
    </>
  );
}
