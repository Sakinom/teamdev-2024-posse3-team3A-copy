import useCustomSWR from '@/lib/useCustomSWR';

const Sample = () => {
  const { data, isLoading, isError } = useCustomSWR('/companies');

  if (isError) return <div>エラーが発生しました</div>;
  if (isLoading) return <div>読み込み中</div>;
  return (
    <div>
      <h1>ようこそ, next.js</h1>
      <hr />
      {data.data.map((company) => (
        <div key={company.id}>
          <h2>name: {company.name}</h2>
          <p>industry: {company.industry}</p>
          <p>valid: {company.valid}</p>
        </div>
      ))}
    </div>
  );
};

export default Sample;
