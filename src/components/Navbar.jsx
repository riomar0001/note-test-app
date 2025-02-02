import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://umsdc.org/UMSDC-Logo.svg"
            className="h-10"
            alt="Flowbite Logo"
          />
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-row items-center gap-x-5">
            <li>
              <a
                href="#"
                className="text-xl font-semibold hover:text-yellow-500 hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/note/add"
                className="text-xl font-semibold hover:text-yellow-500 hover:underline"
              >
                Add Notes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
