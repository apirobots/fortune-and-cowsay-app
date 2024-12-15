import { LoadingSpinner } from 'LoadingSpinner';

type FortuneCardProps = {
  fortune: string;
  isLoading: boolean;
};

export default function FortuneCard({ fortune, isLoading }: FortuneCardProps) {
  return (
    <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <p className="text-lg whitespace-pre-wrap">{fortune}</p>
      )}
    </div>
  );
}