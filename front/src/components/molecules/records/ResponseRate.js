import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import React from 'react';

import useCustomSWR from '@/lib/useCustomSWR';

// 前回比で上がってたらTrendingUpIcon, 下がってたらTrendingDownIcon, 変わらなかったらTrendingFlatIconを表示したい！

const ResponseRate = () => {
  const { data, isLoading, isError } = useCustomSWR('/records/info/40'); // TODO: survey_term_idを取得する（メインカルテID）
  if (isError) return <div>エラーが発生しました</div>;
  if (isLoading) return <div>読み込み中</div>;

  return (
    <>
      <div className="mx-16 my-4 flex h-28 w-96 items-center justify-around bg-stone-100">
        <div className="size-20 rounded-full bg-white"></div>
        <div className="text-4xl font-bold">{data}%</div>
        <div className="flex">
          <div className="mr-2 text-xl font-bold text-blue-500">+5%</div>
          <TrendingUpIcon />
        </div>
      </div>
    </>
  );
};

export default ResponseRate;
