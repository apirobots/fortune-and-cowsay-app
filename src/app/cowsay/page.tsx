'use client';

import { useEffect, useState } from "react";
import { getCowsay } from "@/services/api";
import Navigation from "@/components/Navigation";
import LoadingCow from "@/components/LoadingCow";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function CowsayPage() {
  const [cowsay, setCowsay] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const fetchCowsay = async () => {
    setLoading(true);
    try {
      const data = await getCowsay();
      setCowsay(data.fortune);
    } catch (error) {
      console.error('Error fetching cowsay:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCowsay();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8 max-w-xl">
        <Navigation />
        <h1 className="text-3xl font-bold">Cowsay</h1>
        
        <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          {loading ? (
            <LoadingCow />
          ) : (
            <pre className="font-mono text-sm whitespace-pre-wrap">{cowsay}</pre>
          )}
        </div>

        <button 
                  onClick={fetchCowsay}
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