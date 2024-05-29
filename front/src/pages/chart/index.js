import Head from 'next/head';

import AttributeCategoryHeatmap from '@/components/molecules/charts/AttributeCategoryHeatmap';
import EnpsPie from '@/components/molecules/charts/EnpsPie';
import EnpsTransition from '@/components/molecules/charts/EnpsTransition';
import PreviousCompanyComparisonHeatmap from '@/components/molecules/charts/PreviousCompanyComparisonHeatmap';
import QuestionCategoryTransition from '@/components/molecules/charts/QuestionCategoryTransition';
import QuestionStackedBarChart from '@/components/molecules/charts/QuestionStackedBarChart';
import QuestionTypeTransition from '@/components/molecules/charts/QuestionTypeTransition';
import AdditionalQuestionAllPie from '@/components/organisms/charts/AdditionalQuestionAllPie';
import MonthlyQuestionTypeTransition from '@/components/organisms/charts/MonthlyQuestionTypeTransition';
import QuestionCategoryTreemap from '@/components/organisms/charts/QuestionCategoryTreemap';

export default function Chart() {
  return (
    <>
      <Head>
        <title>rechartsのお試し</title>
      </Head>
      <EnpsTransition surveyTermId={37} />
      <EnpsPie surveyTermId={37} />
      <QuestionCategoryTransition surveyTermId={37} />
      <QuestionStackedBarChart surveyTermId={37} question_category_id={1} />
      <QuestionStackedBarChart surveyTermId={37} question_category_id={0} />
      <QuestionTypeTransition surveyTermId={37} />
      <AttributeCategoryHeatmap dataType={0} surveyTermId={37} />
      <AttributeCategoryHeatmap dataType={1} surveyTermId={37} />
      <AttributeCategoryHeatmap dataType={2} surveyTermId={37} />
      <AttributeCategoryHeatmap dataType={3} surveyTermId={37} />
      <PreviousCompanyComparisonHeatmap dataType={0} surveyTermId={37} />
      <PreviousCompanyComparisonHeatmap dataType={1} surveyTermId={37} />
      <AdditionalQuestionAllPie surveyTermId={37} />
      <QuestionCategoryTreemap surveyTermId={37} />
      <MonthlyQuestionTypeTransition surveyTermId={37} />
    </>
  );
}
