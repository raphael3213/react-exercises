import React from "react";

function Navbar() {
  return (
    <div className="bg-red-600 min-h-full p-3 md:bg-blue-500 md:w-full md:p-4">
      <div className="w-full gap-4 hidden md:flex">
        <p>Home</p>
        <p>Contact Us</p>
        <p>About Us</p>
      </div>
      <div className="md:hidden flex flex-col gap-4 items-start justify-end mb-3 min-h-full">
        <p>Home</p>
        <p>Contact Us</p>
        <p>About Us</p>
      </div>
    </div>
  );
}

export default Navbar;

{
  /* <div className="max-md:hidden flex justify-start items-center w-full gap-4">
        <p>Home</p>
        <p>Contact Us</p>
        <p>About Us</p>
      </div>
      <div className="sm:hidden flex flex-col justify-start items-start min-h-full sm:fixed">
        <p>Home</p>
        <p>Contact Us</p>
        <p>About Us</p>
      </div> */
}
