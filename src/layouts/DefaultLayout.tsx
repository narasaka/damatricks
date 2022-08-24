import Head from 'next/head';
import Link from 'next/link';
import { ComponentPropsWithRef } from 'react';

interface IDefaultLayoutProps extends ComponentPropsWithRef<'div'> {
  title: string;
}

const DefaultLayout: React.FC<IDefaultLayoutProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col w-screen items-center bg-neutral-200">
      <Head>
        <title>{'damatricks - ' + title}</title>
        <meta name="title" content="damatricks" />
        <meta
          name="description"
          content="A utility app for Kendama competitions. Say goodbye to random number generators and hand-written tricklists!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.damatricks.com/" />
        <meta property="og:title" content="damatricks" />
        <meta
          property="og:description"
          content="A utility app for Kendama competitions. Say goodbye to random number generators and hand-written tricklists!"
        />
        <meta property="og:image" content="/damatricks_preview.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.damatricks.com/" />
        <meta property="twitter:title" content="damatricks" />
        <meta
          property="twitter:description"
          content="A utility app for Kendama competitions. Say goodbye to random number generators and hand-written tricklists!"
        />
        <meta property="twitter:image" content="/damatricks_preview.png" />
      </Head>
      <main className="w-screen max-w-4xl relative">
        {children}
        <div className="absolute bottom-4 w-full flex justify-center gap-2 font-mono text-xs">
          <Link href="https://github.com/narasaka/damatricks">
            <a
              className="hover:text-gray-500 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute
            </a>
          </Link>
          <p>&bull;</p>
          <Link href="https://github.com/narasaka/damatricks/issues/new">
            <a
              className="hover:text-gray-500 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Report a bug
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
