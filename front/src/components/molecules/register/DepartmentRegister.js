import React from 'react';

import ConfirmButton from '@/components/atoms/ConfirmButton';
import Input from '@/components/atoms/Input';
import InputError from '@/components/atoms/InputError';
import axios from '@/lib/axios';
import { useAuth } from '@/services/hooks/auth';

export default function DepartmentRegister() {
  const [department, setDepartment] = React.useState('');
  const [total, setTotal] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const { user } = useAuth();

  const company_id = user?.company_id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/departments', {
        department,
        company_id,
        total,
      });

      if (response.status === 200) {
        console.log('部署が登録されました');
      } else {
        console.error('部署の登録中にエラーが発生しました');
      }
    } catch (error) {
      console.error('通信エラー:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-green-main">●部署登録</h2>
      <h3 className="mt-6 text-xl font-bold">新規部署を追加</h3>
      <form onSubmit={handleSubmit}>
        <div className="absolute">
          <div>
            <Input
              id="department"
              type="text"
              value={department}
              className="mr-10 h-8 w-96 rounded-md border border-gray-500"
              onChange={(event) => setDepartment(event.target.value)}
              placeholder="部署名を入力"
              required
            />
            <InputError messages={errors.department} className="mt-2" />
          </div>
          <div>
            <Input
              id="total"
              type="integer"
              value={total}
              className="mr-10 mt-4 h-8 w-96 rounded-md border border-gray-500"
              onChange={(event) => setTotal(event.target.value)}
              placeholder="部署人数を入力（数字）"
              required
            />
            <InputError messages={errors.total} className="mt-2" />
          </div>
          {loading ? (
            <div>処理中...</div>
          ) : (
            <ConfirmButton text={'登録する'} bgColor={'bg-orange-main'} />
          )}
        </div>
      </form>
    </section>
  );
}
