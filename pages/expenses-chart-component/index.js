import Head from 'next/head';
import { useState } from 'react';
import Grafico from './components/Grafico';
import data from './data.json';

const index = () => {
  const [today, setToday] = useState('wed');
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex h-screen w-screen items-center justify-center bg-cream font-dmsans text-dark-brown">
        <div className=" space-y-5">
          <header className="flex justify-between rounded-2xl bg-soft-red p-6 text-very-pale-orange">
            <div className="space-y-1">
              <label className="">My balance</label>
              <h3 className="text-2xl font-bold">$921.48</h3>
            </div>
            <img src="./images/logo.svg" alt="" />
          </header>
          <main className="flex flex-col rounded-2xl bg-very-pale-orange p-6">
            <h2 className="text-2xl font-bold ">Spending - Last 7 days</h2>
            <div className="flex space-x-1">
              {data.map((e, i) => (
                <Grafico key={i} day={e.day} amount={e.amount} today={today} />
              ))}
            </div>
            <div className="my-6 border-b "></div>
            <div className="space-y-1">
              <label className="text-sm text-medium-brown">
                Total this month
              </label>
              <div className="flex items-center justify-between">
                <h3 className="text-4xl font-bold">$478.33</h3>
                <div className="flex flex-col items-end -space-y-1">
                  <h4 className="text-sm font-bold">+2.4%</h4>
                  <label className="text-sm text-medium-brown">
                    from last month
                  </label>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default index;
