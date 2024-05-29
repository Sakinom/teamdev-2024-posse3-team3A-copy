import dynamic from 'next/dynamic';

import useCustomSWR from '@/lib/useCustomSWR';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function PreviousCompanyComparisonHeatmap({
  dataType,
  surveyTermId,
}) {
  const url = `/charts/previous-category/comparison/${surveyTermId}`;
  const { data, isLoading, isError } = useCustomSWR(url); // TODO: survey_term_idを取得する（カルテID）

  if (isError) return <div>エラーが発生しました</div>;
  if (isLoading) return <div>読み込み中</div>;
  const option = {
    chart: {
      height: 350,
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#008FFB'],
    // title: {
    //   text: 'HeatMap Chart (Single color)',
    // },
  };

  const series = data[dataType].data; // 0: 平均値、1: 偏差値

  return (
    <>
      <ApexChart type="heatmap" options={option} series={series} height={350} />
    </>
  );
}
