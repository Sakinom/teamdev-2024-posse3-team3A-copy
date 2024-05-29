import LaunchIcon from '@mui/icons-material/Launch';

import EnpsPie from '@/components/molecules/charts/EnpsPie';
import DisplayTree from '@/components/molecules/dashboard/DisplayTree';
import AdminLayout from '@/layouts/AdminLayout';
import { useAuth } from '@/services/hooks/auth';

export default function Dashboard() {
  const { user } = useAuth({ middleware: 'auth' });

  return (
    <>
      <AdminLayout>
        <main className="mx-8 my-12">
          <h1 className="text-2xl font-bold">ダッシュボード</h1>
          {/* <div>集計が終わりました</div> */}
          {/* //todo ↑状況によって変える！↑ */}
          <article className="my-8 flex h-auto w-full overflow-hidden">
            <section className="w-6/12 border-r-2 px-4">
              <div className="mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-green-main">
                    企業の成長
                  </h2>
                  <h4 className="mb-4 text-sm text-gray-500">
                    総合スコアの値と比例して苗木が成長します。たくさんの果実を実らせましょう。
                  </h4>
                </div>
                <div className="flex rounded-2xl bg-gray-100 p-4">
                  <div className="text-xl text-gray-600">基準</div>
                  <ul className="mx-16">
                    <li className="text-gray-600">16~32: 双葉</li>
                    <li className="text-gray-600">33~48: 苗木</li>
                    <li className="text-gray-600">49~64: 低木</li>
                    <li className="text-gray-600">65~72: 樹木</li>
                    <li className="text-gray-600">73~80: 果実</li>
                    {/* 16~80だと分かりづらいから、0~100とかにしたい */}
                  </ul>
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <h2 className="flex text-2xl font-bold text-green-main">
                    最近の総合点数: <div>70</div>
                  </h2>
                  <div>
                    <DisplayTree treeNumber={5} />
                  </div>
                </div>
              </div>
              <div className="mb-4 bg-gray-100 py-4">
                {/* <h2 className="text-2xl font-bold text-green-main">目標</h2> */}
                <div className="flex h-32 justify-around">
                  <div className="w-5/12 bg-white">
                    <h3 className="my-2 text-center text-xl font-bold text-green-main">
                      目標値
                    </h3>
                    <div className="my-4 text-center text-5xl font-bold">
                      4.2
                    </div>
                  </div>
                  <div className="w-5/12 bg-white">
                    <h3 className="my-2 text-center text-xl font-bold text-green-main">
                      現状値
                    </h3>
                    <div className="my-4 text-center text-5xl font-bold">
                      3.5
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-6/12 px-4">
              <div className="mb-4">
                <h2 className="mb-4 text-2xl font-bold text-green-main">
                  メインアンケート
                </h2>
                <h4 className="mb-4 text-sm text-gray-500">
                  <div className="flex text-sm text-gray-500">
                    ステータス:
                    <div className="font-bold text-orange-500">実施中</div>
                  </div>
                  <div className="flex text-sm text-gray-500">
                    回答率: <div className="font-bold">56.4%</div>
                  </div>
                  <div className="flex text-sm text-gray-500">
                    次回のアンケート配布予定日:
                    <div className="font-bold">2024/03/01</div>
                  </div>
                </h4>
                <div className="grid w-10/12">
                  <a href="http://localhost:3000/admin/create/main">
                    <div className="mb-4 w-60 cursor-pointer rounded-xl bg-green-main py-2 text-center font-bold text-white">
                      アンケートの設定をする
                    </div>
                  </a>
                  {/* <div className="mb-4 w-60 cursor-pointer rounded-xl bg-orange-500 py-2 text-center font-bold text-white">
                    アンケートの強制終了
                  </div>
                  <div className="mb-4 w-60 cursor-pointer rounded-xl bg-red-500 py-2 text-center font-bold text-white">
                    アンケートループ中断
                  </div> */}
                </div>
              </div>
              <div className="mb-4">
                <h2 className="mb-4 text-2xl font-bold text-green-main">
                  先月のeNPS
                </h2>
                <h4 className="mb-4 text-sm text-gray-500">
                  推奨者の割合が増えるように努めましょう！ 
                  <a href='/admin/help#enps'>eNPSとは
                  <LaunchIcon
                    sx={{
                      height: '16px',
                    }}
                  />
                  </a>
                </h4>
                <EnpsPie surveyTermId={40} />
              </div>
            </section>
          </article>
        </main>
      </AdminLayout>
    </>
  );
}
