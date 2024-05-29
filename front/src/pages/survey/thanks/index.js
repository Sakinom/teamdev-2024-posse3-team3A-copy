'use client';

import Head from 'next/head';
import Image from 'next/image';

const Thanks = () => {
  return (
    <>
      <Head>アンケート回答完了</Head>
      <div className="flex h-screen items-center justify-center bg-green-main">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <Image src="/Icon/check.svg" alt="check" width={50} height={50} />
          </div>
          <div className="mx-auto w-3/4 text-center text-white">
            <h2 className="mb-4 text-lg font-bold">
              アンケートの回答にご協力いただきありがとうございました。
            </h2>
            <p>
              アンケートの結果内容は集計後社員の皆様へ共有され、組織改革のためのデータとして有効活用されます。
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-8">
            <div>
              <Image
                src="/img/Logo-Gajup!.png"
                alt="logo Gajup!"
                width={60}
                height={60}
              />
            </div>
            <h2 className="text-4xl font-bold text-teal-500 text-white">
              Gajup!
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thanks;
