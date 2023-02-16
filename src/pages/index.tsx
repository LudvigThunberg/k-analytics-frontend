import { useSession } from 'next-auth/react';
import Head from 'next/head';
// eslint-disable-next-line import/extensions
import { Login } from '../components/Login';
import { AnalyticsForm } from '../components/AnalyticsForm';

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>K-Analytics</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>
          <Login />
        </header>
        {session && <AnalyticsForm />}
      </div>
    </>
  );
}
