'use client';

import { useEffect, useState } from "react";
import { getFortune } from "@/services/api";
import Navigation from "@/components/Navigation";

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
        <h1 className="text-3xl font-bold">Fortune Cookie</h1>
        
        <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          {loading ? (
            <div className="animate-pulse h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
          ) : (
            <p className="text-lg whitespace-pre-wrap">{fortune}</p>
          )}
        </div>

        <button 
          onClick={fetchFortune}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Another Fortune'}
        </button>
      </main>
    </div>
  );
}