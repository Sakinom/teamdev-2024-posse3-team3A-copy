'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import InputError from '@/components/InputError';
import Label from '@/components/Label';
import { useAuth } from '@/services/hooks/auth';

const Login = () => {
  const router = useRouter();

  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/admin/dashboard',
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldRemember, setShouldRemember] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (
      router.query &&
      router.query.reset &&
      router.query.reset.length > 0 &&
      errors.length === 0
    ) {
      setStatus(atob(router.query.reset));
    } else {
      setStatus(null);
    }
  }, [router.query, errors.length]);

  const submitForm = async (event) => {
    try {
      event.preventDefault();

      login({
        email,
        password,
        remember: shouldRemember,
        setErrors,
        setStatus,
      });
    } catch (error) {
      console.error('ログイン中にエラーが発生しました:', error);
    }
  };

  return (
    <div className="my-12 flex justify-center">
      <form
        onSubmit={submitForm}
        className="h-700 w-440 rounded-lg border-t-4 border-teal-500 bg-white"
      >
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
        {errors.email || errors.password ? (
          <p className="mt-4 text-sm font-normal text-red-500">
            メールアドレスもしくはパスワードに誤りがあります
          </p>
        ) : null}
        {/* Email Address */}
        <div className="flex justify-center">
          <div className="mt-20">
            <Label htmlFor="email" className="text-left">
              メールアドレス
            </Label>

            <Input
              id="email"
              type="email"
              value={email}
              className="mt-1 w-369"
              onChange={(event) => setEmail(event.target.value)}
              required
              autoFocus
              placeholder="メールアドレスを入力"
            />

            <InputError messages={errors.email} className="mt-2" />
          </div>
        </div>
        {/* Password */}
        <div className="flex justify-center">
          <div className="mt-12">
            <Label htmlFor="password" className="text-left">
              パスワード
            </Label>

            <Input
              id="password"
              type="password"
              value={password}
              className="mt-1 w-369"
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
              placeholder="パスワードを入力"
            />

            <InputError messages={errors.password} className="mt-2" />
          </div>
        </div>

        {/* Remember Me */}
        <div className="mt-16 flex justify-center">
          <label htmlFor="remember_me" className="inline-flex items-center">
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
          </label>
        </div>

        <div className="flex-col justify-center">
          <div className="flex justify-center">
            <Button className="text-baseline mt-4 w-60 rounded-full border border-transparent bg-teal-500 py-2 font-bold text-white">
              ログイン
            </Button>
          </div>
          <div className="flex justify-center">
            <Link
              href="/forgot-password"
              className="mt-4 text-sm text-gray-600 underline hover:text-gray-900"
            >
              パスワードを忘れた方はこちらから
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
