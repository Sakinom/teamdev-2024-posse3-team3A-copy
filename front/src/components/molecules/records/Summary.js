import React from 'react';

import useCustomSWR from '@/lib/useCustomSWR';

const Summary = ({ surveyTermId }) => {
  const url = `/summaries/${surveyTermId}`;
  const { data, isLoading, isError } = useCustomSWR(url);
  if (isError) return <div>エラーが発生しました</div>;
  if (isLoading) return <div>読み込み中</div>;

  const jsonString = data.join('');
  const summary = JSON.parse(jsonString);

  return (
    <>
      <div className="mt-4">
        <div className="mt-2">
          <p>【良い点】</p>
          <p>{summary.positive}</p>
        </div>
        <div className="mt-2">
          <p>【改善点】</p>
          <p>{summary.negative}</p>
        </div>
      </div>
    </>
  );
};

export default Summary;
