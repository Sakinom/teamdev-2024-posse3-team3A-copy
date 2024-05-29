import RecordButton from '@/components/atoms/RecordButton';
import AdminLayout from '@/layouts/AdminLayout';
import useCustomSWR from '@/lib/useCustomSWR';
import { useAuth } from '@/services/hooks/auth';

const RecordList = () => {
  const { user } = useAuth({ middleware: 'auth' });

  const { data, isLoading, isError, } = useCustomSWR('/records/1'); // TODO: company_idを取得する

  if (isError) return <div>エラーが発生しました</div>;
  if (isLoading) return <div>読み込み中</div>;
  return (
    <>
      <AdminLayout>
        <div className="mt-10">
          <h1 className="text-2xl font-bold">カルテ</h1>
          <p className="mt-2 text-base text-gray-500">
            これまでのアンケート結果の閲覧、分析ができます。
          </p>
          <section className="mt-10">
            <h2 className="text-xl font-bold text-green-main">
              カルテ使い方ガイド
            </h2>
            <p className="mt-2 text-base text-gray-500">
              アンケートの集計が締め切られた後は、１タブから５タブの順番でアンケートの分析をしていきましょう。各タブから得られた社内状況を基に次の施策を決定し、社内報で共有しましょう！
            </p>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-bold text-green-main">カルテ一覧</h2>
            <p className="mt-2 text-base text-gray-500">過去のカルテです</p>
            <div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {data[1].map((record) => (
                  <RecordButton
                    key={record.survey_term_id}
                    surveyTermId={record.survey_term_id}
                    yearMonth={record.year_month}
                  />
                ))}
              </div>
            </div>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-bold text-green-main">社内報</h2>
            <p className="mt-2 text-base text-gray-500">
              カルテを閲覧したら、社員に対して社内報を配布しましょう！
            </p>
            <div className="text-l mt-4 flex h-12 w-72 items-center justify-center rounded-lg bg-orange-main font-bold text-white">
              社内報管理画面へ
            </div>
          </section>
        </div>
      </AdminLayout>
    </>
  );
};

export default RecordList;
