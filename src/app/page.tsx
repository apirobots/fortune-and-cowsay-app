import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8 max-w-xl">
        <Navigation />
        <h1 className="text-3xl font-bold">Welcome to Fortune App</h1>
        <p className="text-lg text-center">Click on the links above to get your fortune or see what the cow says!</p>
      </main>
    </div>
  );
}