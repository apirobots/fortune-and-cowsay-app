import { LoadingSpinner } from 'LoadingSpinner';

type CowsayCardProps = {
  cowsay: string;
  isLoading: boolean;
};

export default function CowsayCard({ cowsay, isLoading }: CowsayCardProps) {
  return (
    <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <pre className="font-mono text-sm whitespace-pre-wrap">{cowsay}</pre>
      )}
    </div>
  );
}