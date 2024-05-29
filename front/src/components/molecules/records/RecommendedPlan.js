import React from 'react';

import useCustomSWR from '@/lib/useCustomSWR';

export default function RecommendedPlan({ surveyTermId }) {
  const url = `/records/plans/${surveyTermId}`;
  const { data, isLoading, isError } = useCustomSWR(url);

  if (isError) return <div>エラーが発生しました</div>;
  if (isLoading) return <div>読み込み中</div>;
  console.log(surveyTermId);
  const jsonString = data.join('');
  const plan = JSON.parse(jsonString);

  return (
    <>
      <div className="mt-4">
        <h2 className="text-4xl font-bold underline">提案する施策</h2>
        {plan.map((item) => (
          <div key={item.id} className="mt-8">
            <h3 className="font-bold">
              施策{item.id}：{item.title}
            </h3>
            <div className="mt-2">
              <p>【対処する問題】</p>
              <p>{item.title}</p>
            </div>
            <div className="mt-2">
              <p>【具体的な施策内容】</p>
              <p>{item.plan}</p>
            </div>
            <div className="mt-2">
              <p>【施策によって見込まれる改善内容】</p>
              <p>{item.improvement}</p>
            </div>
            <div className="mt-2">
              <p>【経過観察の方法】</p>
              <p>{item.observation}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
