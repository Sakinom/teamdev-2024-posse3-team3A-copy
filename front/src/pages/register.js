import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import AuthCard from '@/components/auth/AuthCard';
import InputError from '@/components/auth/InputError';
import GuestLayout from '@/components/auth/Layouts/GuestLayout';
import Input from '@/components/Input';
import Label from '@/components/Label';
import { useAuth } from '@/services/hooks/auth';

const Register = () => {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/admin/dashboard',
  });
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState('');
  const [company_id, setCompanyId] = useState('');

  useEffect(() => {
    // URLからtoken, email, company_idを取得する
    const { token, email, company_id } = router.query;
    if (token) {
      setToken(token);
    }
    if (email) {
      setEmail(email);
    }
    if (company_id) {
      setCompanyId(company_id);
    }
  }, [router.query]);

  const submitForm = async (event) => {
    event.preventDefault();

    const response = await register({
      email,
      password,
      password_confirmation: passwordConfirmation,
      company_id,
      token,
      setErrors,
    });

    if (response && response.data && response.data.token) {
      const { token, company_id, email } = response.data;
      setToken(token);
      setCompanyId(company_id);
      setEmail(email);
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
              <p className="mt-10 text-lg text-gray-500">Gajup!にログイン</p>
            </div>
            <form onSubmit={submitForm}>
              {/* Email Address */}
              <div className="mt-4">
                <Label htmlFor="email">メールアドレス</Label>

                <Input
                  id="email"
                  type="email"
                  value={email}
                  className="mt-1 block w-full"
                  required
                  disabled
                  placeholder="メールアドレスを入力"
                />

                <InputError messages={errors.email} className="mt-2" />
              </div>

              {/* Password */}
              <div className="mt-4">
                <Label htmlFor="password">パスワード</Label>

                <Input
                  id="password"
                  type="password"
                  value={password}
                  className="mt-1 block w-full"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoComplete="new-password"
                  placeholder="パスワードを入力"
                />

                <InputError messages={errors.password} className="mt-2" />
              </div>

              {/* Confirm Password */}
              <div className="mt-4">
                <Label htmlFor="passwordConfirmation">パスワード（確認）</Label>

                <Input
                  id="passwordConfirmation"
                  type="password"
                  value={passwordConfirmation}
                  className="mt-1 block w-full"
                  onChange={(event) =>
                    setPasswordConfirmation(event.target.value)
                  }
                  required
                  placeholder="パスワードを入力（確認）"
                />

                <InputError
                  messages={errors.password_confirmation}
                  className="mt-2"
                />
              </div>
              <div className="flex-col justify-center">
                <div className="mt-5 flex justify-center">
                  {/* <label htmlFor="remember_me" className="inline-flex items-center">
                    <input
                      id="remember_me"
                      type="checkbox"
                      name="remember"
                      className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      onChange={(event) => setShouldRemember(event.target.checked)}
                    />

                    <span className="ml-2 text-sm text-gray-600">
                      次回以降ログインを省略する
                    </span>
                  </label> */}
                </div>
                <div className="flex justify-center">
                  <button className="text-baseline mt-4 w-60 rounded-full border border-transparent bg-teal-500 py-2 font-bold text-white">
                    ログイン
                  </button>
                </div>
                <div className="flex justify-center">
                  <Link
                    href="/forgot-password"
                    className="mt-5 text-sm text-gray-600 underline hover:text-gray-900"
                  >
                    パスワードを忘れた方はこちらから
                  </Link>
                </div>
              </div>
            </form>
          </section>
        </div>
      </AuthCard>
    </GuestLayout>
  );
};

export default Register;
