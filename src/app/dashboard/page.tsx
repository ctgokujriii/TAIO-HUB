'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import QuoteEstimator from '../components/QuoteEstimator';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem('loggedIn');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white flex flex-col items-center py-10">
      <h1 className="text-5xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <p className="mb-10 text-lg text-gray-300">Here you can estimate quotes and manage your services.</p>
      <QuoteEstimator />
      <button
        onClick={logout}
        className="mt-10 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold"
      >
        Logout
      </button>
    </div>
  );
}
