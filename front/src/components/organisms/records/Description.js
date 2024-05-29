import useCustomSWR from '@/lib/useCustomSWR';

const Description = () => {
  const { data, isLoading, isError } = useCustomSWR('/comments/40'); // TODO: survey_term_idを取得する（カルテID）

  if (isError) return <div>エラーが発生しました</div>;
  if (isLoading) return <div>読み込み中</div>;

  return (
    <>
      <h2 className="mb-4 text-xl font-bold text-gray-700">
        過去のコメント
      </h2>
      <p className="mb-4 text-sm text-gray-500">
        半年間で寄せられた任意記述回答の一覧です。
      </p>
      <article className="my-4 flex h-550 w-full">
        <section className="overflow-scroll px-4">
          <div className="mb-4">
            <div className='grid grid-cols-2 gap-2'>
            {data.map((comment) => (
                <div className="mb-2 rounded-xl border-2 border-slate-500">

                  <div className="rounded-t-xl border-b-2 border-slate-300 bg-green-100 px-4 py-1 font-bold">
                    {comment.department} {comment.age}
                  </div>
                  <div className="px-4 py-2">{comment.comment}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="mb-4 text-sm text-gray-500">
            もう任意記述回答はありません。
          </p>
        </section>
      </article>
    </>
  );
};

export default Description;
