import { useState } from 'react';

import ConfirmButton from '@/components/atoms/ConfirmButton';
import axios from '@/lib/axios';
import { useAuth } from '@/services/hooks/auth';

const AdminRegister = () => {
  const { user } = useAuth({ middleware: 'auth' });
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const company_id = user?.company_id;

  const sendInvitationEmail = async () => {
    try {
      setLoading(true);
      // メール送信リクエストを作成し、メールアドレスを含める
      const response = await axios.post('/api/send-invitation-email', {
        email,
        company_id,
      });
      // メール送信が成功した場合の処理
      console.log('招待メールが送信されました:', response.data);
      setLoading(false);
    } catch (error) {
      // エラーが発生した場合の処理
      console.error('エラーが発生しました:', error);
      setLoading(false);
    }
  };

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-green-main">●人事登録</h2>
      <h3 className="mt-6 text-xl font-bold">招待メールを送信</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendInvitationEmail();
        }}
      >
        <div>
          <input
            type="text"
            className="mr-10 h-8 w-96 rounded-md border border-gray-500"
            placeholder="メールアドレスを入力"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <ConfirmButton
            text={loading ? '送信中...' : '送信する'}
            bgColor={'bg-orange-main'}
            disabled={loading}
          />
          <p className="mt-2 text-gray-500">最終変更日：2023/02/05</p>
        </div>
      </form>
    </section>
  );
};

export default AdminRegister;
