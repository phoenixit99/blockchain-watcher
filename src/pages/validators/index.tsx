import React from 'react';
import Head from 'next/head';
import ValidatorList from '@/features/validators/components/ValidatorList';

const ValidatorsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Cosmos Hub Validators</title>
        <meta name="description" content="List of Cosmos Hub Validators" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Cosmos Hub Validators</h1>
        <ValidatorList />
      </div>
    </>
  );
};

export default ValidatorsPage; 