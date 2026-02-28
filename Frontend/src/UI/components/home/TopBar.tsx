import React from "react";
import { Link } from "react-router-dom";

export const TopBar: React.FC = () => {
  return (
    <header className="w-full h-13 bg-zinc-900 text-white flex items-center px-6 shadow-md">
      
      <nav className="flex items-center gap-[12px] text-[18px]">
        <Link to="/vps" className="hover:text-amber-400 transition duration-300 font-bold">
          VPS
        </Link>
        <Link to="/dedicated" className="hover:text-amber-400 transition duration-300 font-bold">
          Dedicated
        </Link>
        <Link to="/cloud" className="hover:text-amber-400 transition duration-300 font-bold">
          Cloud
        </Link>
        <Link to="/bare-metal-cloud" className="hover:text-amber-400 transition duration-300 font-bold">
          Bare Metal Cloud
        </Link>
        <Link to="/ask" className="hover:text-amber-400 transition duration-300 font-bold">
          Ask
        </Link>
      </nav>

      <div className="ml-auto flex items-center gap-[12px] text-[18px]">
        <Link to="/" className="hover:text-amber-400 transition duration-300 font-bold">
          Home
        </Link>
        <Link to="/login" className="hover:text-amber-400 transition duration-300 font-bold">
          Login
        </Link>
        <Link to="/register" className="hover:text-amber-400 transition duration-300 font-bold">
          Register
        </Link>
      </div>

    </header>
  );
};