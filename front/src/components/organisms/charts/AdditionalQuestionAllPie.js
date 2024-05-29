import AdditionalQuestionPie from '@/components/molecules/charts/AdditionalQuestionPie';
import useCustomSWR from '@/lib/useCustomSWR';

const AdditionalQuestionAllPie = ({ surveyTermId }) => {
  const url = `/charts/additional-question/pie/${surveyTermId}`;
  const { data, isLoading, isError } = useCustomSWR(url);

  if (isError) return <div>エラーが発生しました</div>;
  if (isLoading) return <div>読み込み中</div>;

  return (
    <>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.month}>
              <h2>{item.month}</h2>
              {item.data.map((data, index) => (
                <div key={data.question}>
                  <p>設問：{data.question}</p>
                  <AdditionalQuestionPie key={index} data={data.data} />
                </div>
              ))}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default AdditionalQuestionAllPie;
