import { useState, useRef, useEffect } from "react";
import { Share2, MoreHorizontal } from "lucide-react";

export default function TopNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-50  w-[calc(100%-12rem)] bg-[#1f1f1f]  px-4 py-2 flex items-center justify-between z-50">
      {/* Left side */}
      <div className="text-white text-base">IMugisha.io</div>

      {/* Right side */}
      <div className="flex gap-5 relative">
        {/* Share button */}
        <button className="flex items-center gap-1 text-xs font-light text-white hover:text-sky-400 text-sm">
          <Share2 size={13} /> Share
        </button>


        {/* Popup menu */}
     <div className="relative">
  <button
    className="text-white items-center hover:text-sky-400"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    <MoreHorizontal size={17} />
  </button>

  {menuOpen && (
    <div
      ref={menuRef}
      className="absolute right-0 top-full mt-1 w-30 bg-[#333] border border-gray-800 rounded shadow-lg py-2 flex flex-col"
    >
      <button className="px-2 py-1  text-sm font-light text-white hover:bg-gray-700 text-left">
        Option 1
      </button>
      <button className="px-2 py-1 text-sm font-light text-white hover:bg-gray-700 text-left">
        Option 2
      </button>
      <button className="px-2 py-1 text-sm font-light text-white hover:bg-gray-700 text-left">
        Option 3
      </button>
    </div>
  )}
</div>
      </div>
    </nav>
  );
}
