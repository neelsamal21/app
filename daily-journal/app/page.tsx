import DailyThought from "./Components/DailyThought";

export default function Home() {
  return (
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-32 px-16 bg-white dark:bg-black sm:items-start">
          <h1 className = "mb-3 text-3xl font-bold text-[#ff0000]">Welcome to My Journal App</h1>
          <DailyThought />
      </main> 
          
    
  );
}
