import Head from 'next/head';
import App from '../App';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Santosh Raghuwanshi | Infrastructure Engineer</title>
        <meta
          name="description"
          content="Santosh Raghuwanshi portfolio. Infrastructure engineer specializing in cloud, migrations, and security."
        />
      </Head>
      <App />
    </>
  );
}

