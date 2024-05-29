import Image from 'next/image';
import { useState } from 'react';

import AuthCard from '@/components/auth/AuthCard';
import AuthSessionStatus from '@/components/auth/AuthSessionStatus';
import InputError from '@/components/auth/InputError';
import GuestLayout from '@/components/auth/Layouts/GuestLayout';
import Input from '@/components/Input';
import Label from '@/components/Label';
import { useAuth } from '@/services/hooks/auth';

const ForgotPassword = () => {
  const { forgotPassword } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/admin/dashboard',
  });

  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const submitForm = (event) => {
    try {
      event.preventDefault();
      forgotPassword({ email, setErrors, setStatus });
    } catch (error) {
      console.error(
        'パスワードリセットのリクエスト中にエラーが発生しました:',
        error,
      );
    }
  };

  return (
    <GuestLayout>
      <AuthCard>
        <div className="my-12 flex justify-center">
          <section className="h-700 w-440 rounded-lg border-t-4 border-teal-500 bg-white">
            <div className="mt-10 flex items-center justify-center gap-8">
              <div>
                <Image
                  src="/img/Logo-Gajup!.png"
                  alt="logo Gajup!"
                  width={60}
                  height={60}
                />
              </div>
              <h2 className="text-4xl font-bold text-teal-500">Gajup!</h2>
            </div>
            <div className="flex justify-center">
              <p className="mt-10 text-lg text-gray-500">パスワード再設定</p>
            </div>
            <div className="mt-2 flex justify-center">
              <p className="mb-4 text-sm text-gray-600">
                {/* Forgot your password? No problem. Just let us know your email address
          and we will email you a password reset link that will allow you to
          choose a new one. */}
                指定のメールアドレスに、再設定用のメールをお送りします。
              </p>
            </div>
            {/* Session Status */}
            <AuthSessionStatus className="mb-4" status={status} />
            <form onSubmit={submitForm}>
              {/* Email Address */}
              <div>
                <Label htmlFor="email">メールアドレス</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  className="mt-1 block w-full"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  autoFocus
                  placeholder="メールアドレスを入力"
                />

                <InputError messages={errors.email} className="mt-2" />
              </div>

              <div className="mt-4 flex items-center justify-end"></div>
              <div className="flex-col justify-center">
                <div className="flex justify-center">
                  <button className="text-baseline mt-4 w-60 rounded-full border border-transparent bg-teal-500 py-2 font-bold text-white">
                    送信
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </AuthCard>
    </GuestLayout>
  );
};

export default ForgotPassword;
