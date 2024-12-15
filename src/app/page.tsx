'use client';

import { getFortune } from "@/services/api";
import Navigation from "@/components/Navigation";
import DataFetcher from "@/components/DataFetcher";

export default function FortunePage() {
  return (
      <div className="flex flex-col items-center justify-center p-8">
        <Navigation />
        <DataFetcher fetchData={getFortune} title="Fortune Quote" />
      </div>
  );
}