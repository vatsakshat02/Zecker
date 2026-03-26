import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white/10 backdrop-blur-[40px] border border-white/30 flex justify-between p-4 absolute w-[80%] my-4 rounded-lg left-1/2 -translate-x-1/2 shadow-lg shadow-gray-800">
      <h1 className="text-white font-bold text-xl">Zecker</h1>
      <nav>
        <Link to="/Dashboard" className="text-white">
          Home
        </Link>
      </nav>
    </header>
  );
};

export default Header;
