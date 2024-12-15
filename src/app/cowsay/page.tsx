'use client';

import { useEffect, useState } from "react";
import { getCowsay } from "@/services/api";
import Navigation from "@/components/Navigation";

export default function CowsayPage() {
  const [cowsay, setCowsay] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const fetchCowsay = async () => {
    setLoading(true);
    try {
      const data = await getCowsay();
      setCowsay(data.cow);
    } catch (error) {
      console.error('Error fetching cowsay:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCowsay();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8 max-w-xl">
        <Navigation />
        <h1 className="text-3xl font-bold">Cowsay</h1>
        
        <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          {loading ? (
            <div className="animate-pulse h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
          ) : (
            <pre className="font-mono text-sm whitespace-pre-wrap">{cowsay}</pre>
          )}
        </div>

        <button 
          onClick={fetchCowsay}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Another Cowsay'}
        </button>
      </main>
    </div>
  );
}