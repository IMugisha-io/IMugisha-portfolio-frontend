import { useState } from "react";
import { Folder, FolderOpen, FileText, Mail } from "lucide-react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"; 

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* MOBILE TOGGLE BUTTON */}
      <button
        className={`md:hidden fixed top-4 z-50 text-white ${
          sidebarOpen ? "left-40 text-gray-400" : "left-4"
        }`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={16} /> : <Menu size={24} />}
      </button>

      <aside
        className={`
          h-screen w-50 bg-black fixed left-0 top-0 p-4 border-r border-gray-950
          flex flex-col justify-start overflow-y-auto transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Social links */}
        <div className="h-1/4 flex flex-col justify-end gap-4 mb-6 pt-4 w-25 border-b border-gray-800 pb-4">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter size={16} className="text-white hover:text-sky-400" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub size={16} className="text-white hover:text-sky-400" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin size={16} className="text-white hover:text-sky-400" />
          </a>
        </div>

        {/* Navigation Links */}
        <nav>
          <div className="flex flex-col pt-4 gap-3 pb-4">
            <a className="flex items-center gap-3 text-white text-xs hover:text-sky-400">
              <Folder size={15} /> Home
            </a>
            <a className="flex items-center gap-3 text-white text-xs hover:text-sky-400">
              <FolderOpen size={15} /> Projects
            </a>
            <a className="flex items-center gap-3 text-white text-xs hover:text-sky-400">
              <FileText size={15} /> Courses
            </a>
            <a className="flex items-center gap-3 text-white text-xs hover:text-sky-400">
              <Mail size={15} /> Contact
            </a>
          </div>

          {/* DETAILS DROPDOWN */}
          <div>
            <div
              className="flex items-center justify-between cursor-pointer group pt-2 pb-2"
              onClick={() => setOpen(!open)}
            >
              <a className="flex items-center gap-1 text-white text-xs font-light hover:text-sky-400">
                Details
              </a>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white">
                {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </div>
            </div>

            {open && (
              <div className="pl-1 flex flex-col gap-1 pb-3">
                <button className="text-gray-300 text-sm text-left hover:text-sky-400">
                  Profile
                </button>
                <button className="text-gray-300 text-sm text-left hover:text-sky-400">
                  Settings
                </button>
                <button className="text-gray-300 text-sm text-left hover:text-sky-400">
                  Analytics
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Bottom Profile */}
        <div className="border-t flex mt-auto w-25 border-gray-800 p-2">
          <div>
            <p className="text-sm text-gray-400 font-light">Isaac Mugisha</p>
            <p className="text-xs font-light text-gray-400">
              isaacmugisha2023@outlook.com
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
