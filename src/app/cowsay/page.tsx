'use client';

import { getCowsay } from "@/services/api";
import Navigation from "@/components/Navigation";
import DataFetcher from "@/components/DataFetcher";

export default function CowsayPage() {
  return (
      <div className="flex flex-col items-center justify-center p-8">
        <Navigation />
        <DataFetcher fetchData={getCowsay} title="Cowsay" />
      </div>
  );
}