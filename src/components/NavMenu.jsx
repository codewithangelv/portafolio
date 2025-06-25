import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, FolderGit2, Info, Mail } from "lucide-react";

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
        <Link
          to="/"
          className="text-xl font-bold tracking-wide text-purple-400 animate-pulse drop-shadow-lg transition duration-300 hover:scale-105 hover:text-purple-300 hover:drop-shadow-xl"
        >
          Code With AngelV
        </Link>

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
