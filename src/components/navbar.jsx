import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" className="logo-text">
          Remotify
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
