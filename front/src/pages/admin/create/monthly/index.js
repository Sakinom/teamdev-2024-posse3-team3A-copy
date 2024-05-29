import React, { useEffect, useState } from 'react';

import ConfirmButton from '@/components/atoms/ConfirmButton';
import AdminLayout from '@/layouts/AdminLayout';
import axios from '@/lib/axios';
import useCustomSWR from '@/lib/useCustomSWR';
import { useAuth } from '@/services/hooks/auth';

const CreateMonthlySurvey = () => {
  const [surveyTermId, setSurveyTermId] = useState('');
  const [department, setDepartment] = useState('');
  const [question_1, setQuestion_1] = useState('');
  const [question_2, setQuestion_2] = useState('');
  const [question_3, setQuestion_3] = useState('');
  const [question_4, setQuestion_4] = useState('');
  const [question_5, setQuestion_5] = useState('');
  const [company_id, setCompany_id] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    if (user?.company_id) {
      setCompany_id(user.company_id);
    }
  }, [user?.company_id]);

  const url = `/monthly_date/${company_id}`;
  const {
    data: customData,
    isLoading: customIsLoading,
    isError: customIsError,
  } = useCustomSWR(url);

  const department_url = `/companies/${company_id}/departments`;
  const {
    data: departmentData,
    isLoading: departmentIsLoading,
    isError: departmentIsError,
  } = useCustomSWR(department_url);

  if (customIsError) return <div>エラーが発生しました</div>;
  if (customIsLoading) return <div>読み込み中</div>;

  if (departmentIsError) return <div>エラーが発生しました</div>;
  if (departmentIsLoading) return <div>読み込み中</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const questions = [
      question_1,
      question_2,
      question_3,
      question_4,
      question_5,
    ];

    try {
      // フォームデータをサーバーに送信するPOSTリクエスト
      const response = await axios.post('/api/create_monthly_survey/', {
        survey_term_id: surveyTermId,
        company_id,
        department_id: department,
        name: 'マンスリーアンケート',
        frequency: 1,
        category: 1,
        status: 0,
        count: 1,
        text: questions,
      });
      console.log('CreateMonthlySurvey created:', response.data);
      // フォーム送信後の処理を記述（例えば、リダイレクトなど）
    } catch (error) {
      console.error('Error creating CreateMonthlySurvey:', error);
      // エラーが発生した場合の処理を記述
    }
  };

  return (
    <AdminLayout>
      <div className="mx-8 my-12">
        <h1 className="text-black-900 text-2xl font-bold">
          マンスリーアンケート作成
        </h1>
        <h3 className="text-gray-500">マンスリーアンケートを作成できます。</h3>
        <section className="mt-5">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-green-main">
              アンケート設定
            </h2>
            <div className="mt-2 flex flex-col gap-1">
              <label htmlFor="start_date" className="text-base text-gray-500">
                アンケート開始日
              </label>
              <select
                id="start_date"
                className="required mb-2 mr-10 h-8 w-96 rounded-md border border-2 border-gray-500"
                onChange={(e) => setSurveyTermId(e.target.value)}
                value={surveyTermId}
              >
                {customData.data.map((d) => {
                  return (
                    <option key={d.survey_term_id} value={d.survey_term_id}>
                      {d.start_date}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mt-2 flex flex-col gap-1">
              <label htmlFor="department" className="text-base text-gray-500">
                配布部署
              </label>
              <select
                id="department"
                className="required mb-2 mr-10 h-8 w-96 rounded-md border border-2 border-gray-500"
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
              >
                <option value="null">すべて</option>
                {departmentData.data.map((d) => (
                  <option key={d.department_id} value={d.department_id}>
                    {d.department_name}
                  </option>
                ))}
              </select>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-green-main">
              アンケート設問
            </h2>
            <h3 className="text-gray-500">
              最低でも一つ以上の設問が必須です。
            </h3>
            <div className="mt-2 flex flex-col gap-1 ">
              <label htmlFor="question_1" className="text-base text-gray-500">
                第一問
              </label>
              <input
                type="text"
                id="question_1"
                value={question_1}
                onChange={(e) => setQuestion_1(e.target.value)}
                className="required mr-10 h-8 w-96 rounded-md border border-2 border-gray-500"
              />
            </div>
            <div className="mt-2 flex flex-col gap-1">
              <label htmlFor="question_2" className="text-base text-gray-500">
                第二問
              </label>
              <input
                type="text"
                id="question_2"
                value={question_2}
                onChange={(e) => setQuestion_2(e.target.value)}
                className="mr-10 h-8 w-96 rounded-md border border-2 border-gray-500"
              />
            </div>
            <div className="mt-2 flex flex-col gap-1">
              <label htmlFor="question_3" className="text-base text-gray-500">
                第三問
              </label>
              <input
                type="text"
                id="question_3"
                value={question_3}
                onChange={(e) => setQuestion_3(e.target.value)}
                className="mr-10 h-8 w-96 rounded-md border border-2 border-gray-500"
              />
            </div>
            <div className="mt-2 flex flex-col gap-1">
              <label htmlFor="question_4" className="text-base text-gray-500">
                第四問
              </label>
              <input
                type="text"
                id="question_4"
                value={question_4}
                onChange={(e) => setQuestion_4(e.target.value)}
                className="mr-10 h-8 w-96 rounded-md border border-2 border-gray-500"
              />
            </div>
            <div className="mt-2 flex flex-col gap-1">
              <label htmlFor="question_5" className="text-base text-gray-500">
                第五問
              </label>
              <input
                type="text"
                id="question_5"
                value={question_5}
                onChange={(e) => setQuestion_5(e.target.value)}
                className="mr-10 h-8 w-96 rounded-md border border-2 border-gray-500"
              />
            </div>
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

export default CreateMonthlySurvey;
