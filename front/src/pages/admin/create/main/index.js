import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import ConfirmButton from '@/components/atoms/ConfirmButton';
import AdminLayout from '@/layouts/AdminLayout';
import axios from '@/lib/axios';

const CreateMainSurvey = () => {
  const router = useRouter();

  const [start, setStart] = useState('');
  const [deadline, setDeadline] = useState('');
  const [name, setName] = useState('');

  // todo あとで取得する！
  const survey_category_id = 24;
  const company_id = 1;
  const count = 1;

  const { handleSubmit } = useForm();

  const onSubmit = async (e) => {
    const frequency = document.getElementById('frequency');

    try {
      // フォームデータをサーバーに送信するPOSTリクエスト
      const response = await axios.post('/api/survey_categories', {
        company_id,
        name,
        frequency: frequency.value,
      });
      console.log('SurveyCategory created:', response.data);
      // フォーム送信後の処理を記述（例えば、リダイレクトなど）
    } catch (error) {
      console.error('Error creating SurveyCategory:', error);
      // エラーが発生した場合の処理を記述
    }

    try {
      // フォームデータをサーバーに送信するPOSTリクエスト
      const response = await axios.post('/api/survey_terms', {
        survey_category_id,
        start_date: start,
        deadline,
        count,
      });
      console.log('SurveyTerm created:', response.data);
      // フォーム送信後の処理を記述（例えば、リダイレクトなど）
    } catch (error) {
      console.error('Error creating SurveyTerm:', error);
      // エラーが発生した場合の処理を記述
    }

    router.push({
      // リダイレクト先のページ
      pathname: `/admin/dashboard`,
    });
  };
  return (
    <AdminLayout>
      <div className="mx-8 my-12">
        <h1 className="text-black-900 text-2xl font-bold">
          メインアンケート作成
        </h1>
        <h3 className="text-gray-500">メインアンケートを作成できます。</h3>
        <section className="mt-4">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <h2 className="text-2xl font-bold text-green-main">
              アンケート設定
            </h2>
            <label htmlFor="start" className="mt-2 text-base text-gray-500">
              アンケート開始日
            </label>
            <input
              type="date"
              id="start"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="required mb-2 mr-10 h-8 w-96 rounded-md border border-2 border-gray-500"
            />
            <label htmlFor="deadline" className="mt-2 text-base text-gray-500">
              アンケート回答期間(日)
            </label>
            <input
              type="number"
              id="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="required mb-2 mr-10 h-8 w-96 rounded-md border border-2 border-gray-500"
            />
            <label htmlFor="name" className="mt-2 text-base text-gray-500">
              アンケート名
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="required mb-2 mr-10 h-8 w-96 rounded-md border border-2 border-gray-500"
            />
            <label htmlFor="frequency" className="mt-2 text-base text-gray-500">
              回答頻度（月）
            </label>
            <select
              id="frequency"
              className="required mb-2 mr-10 h-8 w-96 rounded-md border border-2 border-gray-500"
            >
              <option value="3" onChange={(e) => setFrequency(e.target.value)}>
                3
              </option>
              <option value="6" onChange={(e) => setFrequency(e.target.value)}>
                6
              </option>
            </select>
            <ConfirmButton
              text={'送信'}
              type="submit"
              bgColor={'bg-orange-main'}
              className="cursor-pointer"
            />
          </form>
        </section>
      </div>
    </AdminLayout>
  );
};

export default CreateMainSurvey;
