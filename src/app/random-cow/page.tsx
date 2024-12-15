'use client';

import { getRandomCow } from "@/services/api";
import Navigation from "@/components/Navigation";
import DataFetcher from "@/components/DataFetcher";

export default function RandomCowPage() {
    return (
        <div className="flex flex-col items-center justify-center p-8">
            <Navigation />
            <DataFetcher fetchData={getRandomCow} title='Random "Cow"' />
        </div>
    );
}