import React from 'react';

import ConfirmButton from '@/components/atoms/ConfirmButton';
import axios from '@/lib/axios';

export default function CSVTemplate() {
  const downloadTemplate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('/api/csv-template', {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'template.csv');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading CSV template:', error);
    }
  };

  return (
    <>
      <form onSubmit={downloadTemplate}>
        <div className="mt-6">
          <h3 className="text-xl font-bold">ファイルのテンプレート</h3>
          <p className="mt-2 text-base text-gray-500">
            「メールアドレス」が羅列されたファイルのテンプレートを以下からダウンロードしてください
          </p>
          <ConfirmButton text={'CSVダウンロード'} bgColor={'bg-green-main'} />
        </div>
      </form>
    </>
  );
}
