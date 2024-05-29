import ConfirmButton from '@/components/atoms/ConfirmButton';
import AdminRegister from '@/components/molecules/register/AdminRegister';
import CSVDownload from '@/components/molecules/register/CSVDownload';
import CSVTemplate from '@/components/molecules/register/CSVTemplate';
import AdminLayout from '@/layouts/AdminLayout';
import { useAuth } from '@/services/hooks/auth';

const Register = () => {
  const { user } = useAuth({ middleware: 'auth' });

  return (
    <>
      <AdminLayout>
        <div className="mt-10">
          <h1 className="text-2xl font-bold">新規登録</h1>
          <p className="mt-4 text-base text-gray-500">
            従業員と人事を新規登録することができます
          </p>
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-green-main">●従業員登録</h2>
            <CSVTemplate />
            <CSVDownload />
          </section>
          <AdminRegister />
          <section className="my-10">
            <h2 className="text-2xl font-bold text-green-main">●部署登録</h2>
            <h3 className="mt-6 text-xl font-bold">新規部署を追加</h3>
            <div className="absolute">
              <input
                type="text"
                className="mr-10 h-8 w-96 rounded-md border border-gray-500"
                placeholder="部署名を入力"
              />
              <ConfirmButton text={'登録する'} bgColor={'bg-orange-main'} />
            </div>
          </section>
        </div>
      </AdminLayout>
    </>
  );
};

export default Register;
