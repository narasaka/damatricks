import type { NextPage } from 'next';
import DefaultLayout from '@/layouts/DefaultLayout';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <DefaultLayout title="home">
        <section className="h-screen flex flex-col justify-center items-center">
          <h1 className="font-hero text-7xl -mb-2">damatricks</h1>
          <h2 className="text-xl text-gray-600">a kendama utility app</h2>
          <div className="p-4" />
          <button
            className="bg-violet-300 text-violet-900 rounded-full px-4 py-2"
            onClick={() => router.push('/tricklists')}
          >
            Go to tricklists &rarr;
          </button>
        </section>
      </DefaultLayout>
    </>
  );
};

export default Home;
