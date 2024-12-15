import { useEffect, useState } from "react";
import LoadingCow from "@/components/LoadingCow";
import LoadingSpinner from "@/components/LoadingSpinner";

interface DataFetcherProps {
    fetchData: () => Promise<{ fortune: string }>;
    title: string;
}

export default function DataFetcher({ fetchData, title }: DataFetcherProps) {
    const [data, setData] = useState<string>('');
    const [loading, setLoading] = useState(true);

    const fetchDataHandler = async () => {
        setLoading(true);
        try {
            const result = await fetchData();
            setData(result.fortune);
        } catch (error) {
            console.error(`Error fetching ${title.toLowerCase()}:`, error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchDataHandler();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <main className="flex flex-col items-center gap-8 max-w-3xl"> {/* Increased max-width */}
                <h1 className="text-3xl font-bold">{title}</h1>

                <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    {loading ? (
                        <LoadingCow />
                    ) : (
                        <pre className="font-mono text-sm whitespace-pre-wrap">{data}</pre>
                    )}
                </div>

                <button
                    onClick={fetchDataHandler}
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