/*import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, FolderGit2, Info, Mail } from "lucide-react";
import Logo from "./Logo";

const NavMenu = () => {
  const location = useLocation();

  const navItems = [
    { name: "Inicio", path: "/", icon: <Home size={18} /> },
    { name: "Proyectos", path: "/projects", icon: <FolderGit2 size={18} /> },
    { name: "Sobre mí", path: "/about", icon: <Info size={18} /> },
    { name: "Contacto", path: "/contact", icon: <Mail size={18} /> },
  ];

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <ul className="flex gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-1 hover:text-purple-300 ${
                  location.pathname === item.path
                    ? "text-purple-400 font-semibold"
                    : ""
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
*/

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, User, FolderOpen, Mail } from "lucide-react";

export default function NavMenu() {
  return (
    <nav className="bg-[#20232a] shadow-lg py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      {/* Logo animado */}
      <Link
        to="/"
        className="text-2xl font-extrabold text-white drop-shadow-sm hover:drop-shadow-[0_0_10px_#61dafb] transition-all duration-500"
      >
        <span className="text-[#61dafb] animate-pulse">Code</span> With AngelV
      </Link>

      {/* Menú con íconos */}
      <div className="flex gap-4 text-sm md:text-base">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-1 px-4 py-2 rounded hover:bg-[#61dafb22] transition-all duration-300 ${
              isActive ? "text-[#61dafb]" : "text-white"
            }`
          }
        >
          <Home size={16} /> Inicio
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center gap-1 px-4 py-2 rounded hover:bg-[#61dafb22] transition-all duration-300 ${
              isActive ? "text-[#61dafb]" : "text-white"
            }`
          }
        >
          <User size={16} /> Sobre mí
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex items-center gap-1 px-4 py-2 rounded hover:bg-[#61dafb22] transition-all duration-300 ${
              isActive ? "text-[#61dafb]" : "text-white"
            }`
          }
        >
          <FolderOpen size={16} /> Proyectos
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center gap-1 px-4 py-2 rounded hover:bg-[#61dafb22] transition-all duration-300 ${
              isActive ? "text-[#61dafb]" : "text-white"
            }`
          }
        >
          <Mail size={16} /> Contacto
        </NavLink>
      </div>
    </nav>
  );
}
