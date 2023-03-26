import React from "react";

function NavBar() {
  return (
    <nav className="bg-transparent fixed w-full py-4">
      <ul className="flex justify-center space-x-5">
        <li>Home</li>
        <li>Location</li>
        <li>About</li>
        <li>activities</li>
      </ul>
    </nav>
  );
}

export default NavBar;
