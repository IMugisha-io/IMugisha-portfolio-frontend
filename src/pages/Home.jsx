import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <TopNavbar />
      
      <div className="ml-22 mt-8 p-8 h-[calc(100vh-2rem)] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
