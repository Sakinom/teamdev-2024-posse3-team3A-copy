import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Head from 'next/head';

import { useAuth } from '@/services/hooks/auth';

export default function Send() {
  const { user } = useAuth({ middleware: 'guest' });

  return (
    <>
      <Head>
        <title>パスワードを変更する</title>
      </Head>

      <article className="mx-80 my-14 max-w-full">
        <h1 className="text-4xl font-bold text-green-main">Gajup!</h1>

        <div className="text-1xl mt-4 font-bold text-green-main">
          パスワード変更案内を送るためご登録されているメールアドレスを入力してください
        </div>
        <form action={'/'}>
          {/* actionは後で */}
          <section className="my-16">
            <div>
              <div className="text-2xl text-green-main">メールアドレス</div>
              <TextField
                required
                id="outlined-required"
                label="Mail address"
                className="mt-6 w-full"
              />
            </div>
          </section>
          <section>
            <div className="flex">
              <Button
                variant="contained"
                className="bg-color-white ml-auto mr-8 w-4/12 text-green-main"
              >
                戻る
              </Button>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                className="bg-color-green-main ml-8 mr-auto w-4/12"
              >
                送信する
              </Button>
            </div>
          </section>
        </form>
      </article>
    </>
  );
}
