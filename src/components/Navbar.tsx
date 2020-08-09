import * as React from "react";
import Logo from "../images/laser-adventure-logo-1.png";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap w-full p-3 md:p-6 fixed top-0 z-50 md:h-24 bg-gray-200">
      <div className="flex items-center flex-shrink-0">
        <img src={Logo} className="w-12 md:w-16" alt="laseradventure logo" />
      </div>
      <div className="block md:hidden">
        <button
          className="flex items-center px-3 py-2 rounded text-blue-500 hover:text-blue-700"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <svg className="fill-current h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Close Menu</title>
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          ) : (
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          )}
        </button>
      </div>
      <div className={`w-full md:w-auto ${open ? "block" : "hidden"} md:flex  md:items-center flex-grow bg-gray-200 pb-4 md:pb-0 -mx-6 px-6`}>
        <div className="text-sm md:flex-grow md:space-x-4 md:flex md:justify-end">
          <NavbarItem label="Home" />
          <NavbarItem label="Game on!" />
          <NavbarItem label="Tarieven" />
          <NavbarItem label="Reserveren" />
          <NavbarItem label="Kampactie" />
          <NavbarItem label="Info" />
        </div>
      </div>
    </nav>
  );
}

interface NavbarItemProps {
  label: string;
  href?: string;
}

function NavbarItem({ label, href }: NavbarItemProps) {
  return (
    <a href={href} className="block mt-4 md:inline-block md:mt-0 uppercase font-semibold text-black hover:text-blue-500">
      {label}
    </a>
  );
}
