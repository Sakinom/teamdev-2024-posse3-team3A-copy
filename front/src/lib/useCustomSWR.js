import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('データの取得に失敗しました');
  }
  return response.json();
};

const useCustomSWR = (path) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = baseUrl + path;

  const { data, error } = useSWR(url, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useCustomSWR;
