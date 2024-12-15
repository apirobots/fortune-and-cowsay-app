'use client';

import { useEffect, useState } from "react";
import { getFortune } from "@/services/api";
import Navigation from "@/components/Navigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import { waitForDebugger } from "inspector";
import LoadingCow from "@/components/LoadingCow";

export default function FortunePage() {
  const [fortune, setFortune] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const fetchFortune = async () => {
    setLoading(true);
    try {
      const data = await getFortune();
      setFortune(data.fortune);
    } catch (error) {
      console.error('Error fetching fortune:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFortune();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8 max-w-xl">
        <Navigation />
        <h1 className="text-3xl font-bold">Fortune Quote</h1>
        
        <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          {loading 
            ? <LoadingCow /> 
            :<p className="text-lg whitespace-pre-wrap">{fortune}</p>}
        </div>

        <button 
          onClick={fetchFortune}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          disabled={loading}
        >
          {loading && <LoadingSpinner />}
          {loading ? 'Loading...' : 'Get Another Quote'}
        </button>
      </main>
    </div>
  );
}