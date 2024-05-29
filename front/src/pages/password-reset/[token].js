import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Button from '@/components/auth/Button';
import Input from '@/components/auth/Input';
import InputError from '@/components/auth/InputError';
import { useAuth } from '@/services/hooks/auth';

const PasswordReset = () => {
  const router = useRouter();

  const { resetPassword } = useAuth({ middleware: 'guest' });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const submitForm = (event) => {
    try {
      event.preventDefault();

      resetPassword({
        email,
        password,
        password_confirmation: passwordConfirmation,
        setErrors,
        setStatus,
      });
    } catch (error) {
      console.error(
        'パスワードリセットのリクエスト中にエラーが発生しました:',
        error,
      );
    }
  };

  useEffect(() => {
    setEmail(router.query.email || '');
  }, [router.query.email]);

  return (
    <>
      <Head>
        <title>パスワードを変更する</title>
      </Head>

      <article className="mx-80 my-14 max-w-full">
        <h1 className="text-4xl font-bold text-green-main">Gajup!</h1>

        <div className="mt-8 text-3xl font-bold text-green-main">
          パスワード変更
        </div>

        <form onSubmit={submitForm}>
          {/* メールアドレス */}
          <section className="my-16">
            <div>
              <div className="text-2xl text-green-main">メールアドレス</div>
              <Input
                id="email"
                type="email"
                value={email}
                className="mt-6 w-full"
                onChange={(event) => setEmail(event.target.value)}
                required
                autoFocus
              />
              <InputError messages={errors.email} className="mt-2" />
            </div>
          </section>
          <section className="my-16">
            <div>
              <div className="text-2xl text-green-main">新しいパスワード</div>
              <Input
                id="password"
                type="password"
                value={password}
                className="mt-6 w-full"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <InputError messages={errors.password} className="mt-2" />
            </div>
            <div>
              <div className="text-2xl text-green-main">
                新しいパスワード(確認用)
              </div>
              <Input
                id="passwordConfirmation"
                type="password"
                value={passwordConfirmation}
                className="mt-6 w-full"
                onChange={(event) =>
                  setPasswordConfirmation(event.target.value)
                }
                required
              />
              <InputError
                messages={errors.password_confirmation}
                className="mt-2"
              />
            </div>
          </section>
          <section>
            <div className="flex">
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                className="bg-color-green-main mx-auto w-4/12"
              >
                変更する
              </Button>
            </div>
          </section>
        </form>
      </article>
    </>
  );
};

export default PasswordReset;
