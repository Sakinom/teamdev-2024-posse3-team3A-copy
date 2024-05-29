import PlanForm from '@/components/molecules/records/PlanForm';
import RecommendedPlan from '@/components/molecules/records/RecommendedPlan';

const Plan = ({ surveyTermId }) => {
  return (
    <>
      <section>
        <div className="my-4">
          <h2 className="text-xl font-bold text-gray-700">AIによる施策立案</h2>
          <p className="mb-4 text-sm text-gray-500">
            AIによりアンケート結果を分析、施策を立案します。
          </p>
          <div>
            <RecommendedPlan surveyTermId={surveyTermId} />
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-700">施策の決定</h2>
          <div className="w-1000 rounded-md bg-slate-100 px-12 py-8">
            <p className="mb-4 text-sm text-gray-500">
              AIから提案された施策を基に、実施する施策を決定しましょう。
            </p>
            <div>
              <PlanForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plan;
