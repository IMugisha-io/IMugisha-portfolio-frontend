import Sidebar from "../components/sidebar";
import TopNavbar from "../components/TopNavbar";

export default function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      <TopNavbar/>
      <div className="max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Software designer, founder, and amateur astronaut.</h1>

      </div>

       

      
    </div>
  );
}
