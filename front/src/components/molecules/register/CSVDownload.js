import React, { useState } from 'react';

import ConfirmButton from '@/components/atoms/ConfirmButton';
import axios from '@/lib/axios';
import { useAuth } from '@/services/hooks/auth';

export default function CSVDownload() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!uploadedFile) {
      console.error('ファイルが選択されていません');
      return;
    }

    const formData = new FormData();
    formData.append('csv_file', uploadedFile);
    formData.append('company_id', user.company_id);

    try {
      const response = await axios.post('/api/csv-import', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        console.log('ファイルが送信されました');
      } else {
        console.error('ファイルの送信中にエラーが発生しました');
      }
    } catch (error) {
      console.error('通信エラー:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-6">
          <h3 className="text-xl font-bold">従業員データのインポート</h3>
          <p className="mt-2 text-base text-gray-500">
            「メールアドレス」が羅列されたファイルのテンプレートを以下からインポートしてください
          </p>
          <input
            name="csv_file"
            type="file"
            className="mr-10 h-8 w-96 rounded-md border border-gray-500
                  file:mr-4 file:border-0 file:bg-green-50 file:px-4
                  file:py-2 file:text-sm
                  file:font-semibold file:text-green-main
                  hover:file:bg-violet-100"
            onChange={handleFileChange}
          />
          <ConfirmButton text={'読み込む'} bgColor={'bg-green-main'} />
        </div>
      </form>
    </>
  );
}
