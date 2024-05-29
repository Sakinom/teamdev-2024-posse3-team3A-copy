import AdminLayout from '@/layouts/AdminLayout';
import useCustomSWR from '@/lib/useCustomSWR';

const Register = () => {
  const { data, error } = useCustomSWR('/monthly-surveys/1'); // データ取得用のカスタムフック

  if (error) return <div>エラーが発生しました。</div>;
  if (!data) return <div>データを取得中...</div>;

  return (
    <AdminLayout>
      <div className="mt-10">
        <h1 className="text-2xl font-bold">マンスリーアンケート一覧・追加</h1>
        <p className="mt-4 text-base text-gray-500">
          マンスリーアンケートの一覧と追加をすることができます
        </p>
      </div>
      <section className="mt-8">
        <h2 className="text-l mb-3 font-bold text-gray-500">
          追加アンケート作成・閲覧
        </h2>
        <div className="flex gap-3">
          <button className="h-14 w-52 rounded-lg bg-green-main text-white">
            追加アンケート作成
          </button>
          <a
            href={`/admin/record?survey_term_id=${data.data.main_survey_term_id}`}
          >
            <button className="h-14 w-52 rounded-lg bg-orange-main text-white">
              アンケート結果閲覧
            </button>
          </a>
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-l font-bold text-gray-500">
          現在公開中のアンケート
        </h2>
        <div className="container mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto divide-y divide-green-main">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-2 text-left text-xs text-gray-500">
                    配布日
                  </th>
                  <th className="px-6 py-2 text-left text-xs text-gray-500">
                    配布先
                  </th>
                  <th className="px-6 py-2 text-left text-xs text-gray-500">
                    回答率
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 bg-white">
                {data.data.present.map((survey, index) => (
                  <tr key={index} className="whitespace-nowrap">
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {survey.start_date}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {survey.target}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {survey.response_ratio}%
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-l font-bold text-gray-500">公開予定のアンケート</h2>
        <div className="container mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto divide-y divide-green-main">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-2 text-left text-xs text-gray-500">
                    配布日
                  </th>
                  <th className="px-6 py-2 text-left text-xs text-gray-500">
                    配布先
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 bg-white">
                {data.data.next.map((survey, index) => (
                  <tr key={index} className="whitespace-nowrap">
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {survey.start_date}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {survey.target}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default Register;
