import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className="w-48 bg-[#1c1c1c] h-screen p-4 space-y-4">
      <h2 className="text-xl font-bold text-purple-400">Code with AngelV</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/" className="hover:text-purple-400">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-purple-400">
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-purple-400">
            Servicios
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-purple-400">
            Sobre mí
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-purple-400">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
