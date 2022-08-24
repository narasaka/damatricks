import DefaultLayout from '@/layouts/DefaultLayout';
import type { NextPage } from 'next';
import { trpc } from '@/utils/trpc';
import Pulsing from '@/components/loaders/Pulsing';

const TricklistPage: NextPage = () => {
  const { data: tricklists } = trpc.useQuery(['tricklist.list']);
  return (
    <DefaultLayout title="tricklists">
      <section className="border border-red-400 h-screen flex flex-col justify-center items-center relative">
        {tricklists ? (
          <>
            <div className="border border-gray-400 p-4 rounded font-black text-2xl text-center absolute top-10">
              {tricklists[0]!.title}
            </div>
          </>
        ) : (
          <Pulsing />
        )}
      </section>
    </DefaultLayout>
  );
};

export default TricklistPage;
