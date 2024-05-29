import Head from 'next/head';

import AdminLayout from '@/layouts/AdminLayout'

const Help = () => {
    return (
        <AdminLayout>
            <Head>
                <title>ヘルプページ</title>
            </Head>
            <article className='mx-8 my-12 max-w-4xl'>
                <h1 className="text-black-900 text-2xl font-bold">ヘルプページ</h1>
                <h3 className="text-gray-500">プロダクトについてのFAQです。疑問点が記載のない場合はカスタマーサポートまでご連絡ください。</h3>
                <section id="questions">
                    <h2 className="text-black-900 text-2xl font-bold mt-8">
                        Q.16の項目とその設問が知りたい
                    </h2>
                    <h4 className="text-gray-500">
                        設問は以下のとおりです
                    </h4>
                    <div className='bg-gray-100 rounded-2xl px-8 py-4 overflow-scroll h-60'>
                        <p>Q１ 顧客基盤の安定性<br></br>
                            顧客基盤とは「企業の製品やサービスを何度も繰り返し購入してくれる人たち」を表します。<br></br>
                            質問：①自社は顧客基盤を安定させるための努力をしている。<br></br>
                            ② 自分は顧客の声に基づいてサービスや製品を改善し続けている。
                        </p>
                        <p>
                            Q２理念戦略への納得感<br></br>
                            ビジョンとは「企業・組織の理想像、中長期的な目標」を表します。<br></br>
                            質問：①自社の経営方針や戦略に共感している。<br></br>
                            ② 自分は企業のビジョンや戦略を他人に説明できる。
                        </p>
                        <p>
                            Q３社会的貢献<br></br>
                            社会的貢献活動とは「個人や企業がより良い社会のために行動すること」を表します。<br></br>
                            質問：①自社は地域社会や社会全体への貢献を重要視している。<br></br>
                            ②自社の社会的貢献活動は自分のモチベーションや満足度の向上につながる。
                        </p>
                        <p>
                            Q４責任と顧客・社会への貢献<br></br>
                            質問：①自社は顧客や社会に対して透明性や誠実さを維持している。<br></br>
                            ②自分の仕事は顧客や社会に対してポジティブな影響を与えている。
                        </p>
                        <p>
                            Q５連帯感と相互尊重<br></br>
                            質問：①自社のチームワークや協力体制に満足している。<br></br>
                            ②自分の意見やアイデアを提案しやすい。
                        </p>
                        <p>
                            Q６ 魅力的な上司・同僚<br></br>
                            人格的な人とは「部下を気にかける人」「責任感がある人」「真面目な人」などを表します。<br></br>
                            質問：①自分の職場には人格的な人が多い。<br></br>
                            ②職場における尊敬できる上司や同僚の存在は、自分のキャリアの発展や成長に良い影響を与える。
                        </p>
                        <p>
                            Q７ 勤務地や会社設備の魅力<br></br>
                            周辺環境や会社設備とは休憩室、会議室、トイレなどを表します。<br></br>
                            質問：①自社は働きやすい環境づくりのために周辺環境や会社設備を改善している。<br></br>
                            ②自社による周辺環境や会社設備は自分のモチベーションや満足度の向上につながる。
                        </p>
                        <p>
                            Q８評価・給与と柔軟な働き方<br></br>
                            質問：①自社は従業員に対する公正な評価制度のもと、適切な評価や給与の支払いが行われている。<br></br>
                            ②自分のワークライフバランスが尊重され、柔軟な勤務体制が提供されている。
                        </p>
                        <p>
                            Q９顧客ニーズや事業戦略の伝達<br></br>
                            ミッションとは「企業・組織が果たすべき使命や存在意義」を表します。<br></br>
                            ビジョンとは「企業・組織の理想像、中長期的な目標」を表します。<br></br>
                            質問：①自社は従業員に対して、事業戦略や目標を明確に伝えている。<br></br>
                            ②自分は自社のビジョンやミッションを理解している。
                        </p>
                        <p>
                            Q１０上司や会社からの理解<br></br>
                            質問：①自社は従業員の立場や状況を理解し、柔軟な対応をしている。<br></br>
                            ②自分の上司は、自分が直面している問題や課題に理解を示している。
                        </p>
                        <p>
                            Q１１公平な評価<br></br>
                            透明性とは「リーダーと社員の間に誠実なコミュニケーションを確立すること」を表します。<br></br>
                            質問：①自社は評価結果を従業員と共有し、透明性を保っている。<br></br>
                            ②自社の評価基準は、自分の行動を適切に評価に反映している。
                        </p>
                        <p>
                            Q１２上司からの適切な教育・支援<br></br>
                            質問：①自分の上司は自分が新しいプロジェクトや課題に取り組む際に適切な支援を提供してくれている。<br></br>
                            ②自分の上司が行っている支援は自分の成長につながる。
                        </p>
                        <p>
                            Q１３顧客の期待を上回る提案<br></br>
                            質問：①自社は顧客の要望の上を行くことが出来ている。<br></br>
                            ②自分の行動や成果が自社サービスの顧客満足度に影響する
                        </p>
                        <p>
                            Q１４具体的な目標の共有<br></br>
                            質問：①自社は、具体的な目標を定め、従業員と共有している。<br></br>
                            ②自社の目標が明確で、それを理解することは仕事に良い影響を与える。
                        </p>
                        <p>
                            Q１５未来に向けた活動<br></br>
                            質問：①企業の将来に向けた戦略的活動について、従業員への情報共有が適切に行われている。<br></br>
                            ② 自分は企業の将来に向けた戦略的な活動について、積極的に意見や提案を行っている。
                        </p>
                        <p>
                            Q１６ナレッジの標準化<br></br>
                            質問：①自社の知識や情報が効率的に整理されている。<br></br>
                            ② 知識の標準化を行うことは、組織全体の成果や競争力の向上ににつながる。
                        </p>
                    </div>
                </section>
                <section id="create_survey">
                    <h2 className="text-black-900 text-2xl font-bold mt-8">
                        Q.アンケートを作成したい
                    </h2>
                    <h4 className="text-gray-500">
                        アンケートの作成方法は以下のとおりです
                    </h4>
                    <div className='bg-gray-100 rounded-2xl px-8 py-4'>
                        <p>①メインアンケートの作成<br/>左バーのGajap!のロゴをクリックし、ダッシュボード画面に移動します。ダッシュボード画面右側の「アンケートを設定する」ボタンからアンケートを作成します。マンスリーアンケートの作成も同時に行なわれます。</p>
                        <br/>
                        <p>②マンスリーアンケートの編集<br/>メインアンケート作成後、サイドバーの「マンスリーアンケート」から行って下さい。</p>
                    </div>
                </section>
                <section id="enps">
                    <h2 className="text-black-900 text-2xl font-bold mt-8">
                        Q.eNPSとはなにか知りたい
                    </h2>
                    <div className='bg-gray-100 rounded-2xl px-8 py-4'>
                        <p>eNPSとは「Employee Net Promoter Score(エンプロイー・ネット・プロモーター・スコア)」の略称であり、「親しい知人や友人にあなたの職場をどれくらい勧めたいか」を尋ね、「職場の推奨度」を数値化したものです。</p>
                        <p>eNPSを計算する際は、職場の推奨度を0~10の11段階で尋ね、9~10点を推奨者、7~8点を中立者、0~6点を批判者と分類します。そして、推奨者の割合から批判者の割合を引いた数値がeNPSとなります。</p>
                        <p> 日本のeNPS平均スコアは「-61.1」です。</p>
                    </div>
                </section>
                <section id="heatmap">
                    <h2 className="text-black-900 text-2xl font-bold mt-8">
                        Q.ヒートマップとはなにか知りたい
                    </h2>
                    <div className='bg-gray-100 rounded-2xl px-8 py-4'>
                        <p>ヒートマップとは、「大量の多次元データを、一目で関係を指し示すために色を利用し、可視化する」ための手法です。</p>
                    </div>
                </section>
                <section id="personal">
                    <h2 className="text-black-900 text-2xl font-bold mt-8">
                        Q.個人情報はなにを集めているか知りたい
                    </h2>
                    <div className='bg-gray-100 rounded-2xl px-8 py-4'>
                        <p>性別、年代、入社歴を収集しています。</p>
                        <p>性別は男性、女性、その他</p>
                        <p>年代は20代、30代、40代、50代、60代、70代以上</p>
                        <p>入社歴は1年目、2～4年目、5～9年目、10～14年目、15～19年目、20～24年目、25～29年目、30～40年目、40年目以上</p>
                        <p>という区分です。</p>
                    </div>
                </section>
                {/* ↓テンプレ↓ */}
                {/* <section id="">
                    <h2 className="text-black-900 text-2xl font-bold mt-8">
                        Q.
                    </h2>
                    <div className='bg-gray-100 rounded-2xl px-8 py-4'>
                        <p></p>
                    </div>
                </section> */}
            </article>
        </AdminLayout>
    );
}

export default Help;