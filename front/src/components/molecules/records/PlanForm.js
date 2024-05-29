import React, { useState } from 'react';

import axios from '@/lib/axios';

export default function PlanForm() {
  const [plan, setPlan] = useState(''); // 施策を格納する状態

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // フォームデータをサーバーに送信するPOSTリクエスト
      const response = await axios.post('/api/plans', {
        text: plan,
        survey_term_id: 1,
      });
      console.log('Plan created:', response.data);
      // フォーム送信後の処理を記述（例えば、リダイレクトなど）
    } catch (error) {
      console.error('Error creating plan:', error);
      // エラーが発生した場合の処理を記述
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <label htmlFor="plan" className="font-bold text-gray-700">
            施策を入力
          </label>
          <input
            className="w-full rounded-md border p-2"
            type="text"
            id="plan"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          />
          <input id="survey_term_id" type="hidden" value="1" />
          {/* survey_term_idは取得！ */}
          {/* <input type="submit" className="cursor-pointer" /> */}
          <div className="flex justify-end">
            <button className="w-44 rounded-lg border-2 border-teal-400 px-12 py-1 font-bold text-teal-400 hover:border-opacity-70 hover:text-opacity-70">
              確定する
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
