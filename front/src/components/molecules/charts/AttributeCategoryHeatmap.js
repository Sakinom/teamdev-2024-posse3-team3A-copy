import dynamic from 'next/dynamic';

import useCustomSWR from '@/lib/useCustomSWR';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function AttributeCategoryHeatmap({ dataType, surveyTermId }) {
  const url = `/charts/attribute/heatmap/${surveyTermId}`;
  const { data, isLoading, isError } = useCustomSWR(url); // TODO: survey_term_idを取得する（カルテID）

  if (isError) return <div>エラーが発生しました</div>;
  if (isLoading) return <div>読み込み中</div>;
  const option = {
    chart: {
      height: 350,
      type: 'heatmap',
    },
    dataLabels: {
      enabled: true,
    },
    colors: ['#008FFB'],
    // title: {
    //   text: 'HeatMap Chart (Single color)',
    // },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.1,
        colorScale: {
          ranges: [
            { from: 1, to: 2, color: '#CD363A' },
            { from: 4, to: 5, color: '#52B12C' },
          ],
        },
      },
    },
  };
  const series = data[dataType].data; // 0: 性別、1: 年代、2: 部署、3: 入社歴

  return (
    <>
      <ApexChart type="heatmap" options={option} series={series} height={350} />
    </>
  );
}
