import { useState } from "react";

import raj from "../assets/images/raj.svg";
import close from "../assets/images/close.svg";
import { navLinks } from "../constants/index";

const Nav = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClose, setMenuClose] = useState(false);
  const [currentPage, setCurrentPage] = useState(false);

  const ToggleMenu = () => {
    setMenuOpen(!menuOpen);

    console.log("menu open:", menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
    setMenuClose(!menuClose);

    console.log("menu close:", menuClose);
  };

  const handlePage = () => {
    setCurrentPage(true);
    console.log("paged");
  };

  return (
    // logo
    <header
      className={` w-full backdrop-blur-lg border-solid border-0 border-light-border fixed top-0 z-50  ${
        scrolled
          ? "bg-white-400 text-black max-lg:rounded-full max-lg:top-5"
          : "bg-light-white text-black"
      } shadow-md `}
    >
      <nav className=" flex flex-row justify-between    px-6 py-5">
        <div className="px-10">
          <h1 className="tracking-[.15rem] text-2xl font-semibold  ">
            <a href="#">RAPU</a>
          </h1>
        </div>
        {/* nav links */}
        <ul className="list-none px-10 flex flex-row gap-6  max-lg:hidden font-montserrat">
          {navLinks.map(({ href, label }) => (
            <li
              onClick={handlePage}
              key={href}
              className={`hover:border-solid tracking-[0.1rem]  text-black  hover:border-5 hover:border-coral-red  hover:bg-light-black  transition duration-300 hover:ease-linear hover:text-white rounded-lg 
             `}
            >
              <a href={href} className="px-6 py-1">
                {label}
              </a>
            </li>
          ))}
          <hr />
        </ul>
        {/* menu button */}
        <div className="hidden max-lg:block justify-end">
          <button onClick={ToggleMenu}>
            <img src={raj} alt="hamburger icon" width={25} height={25} />
          </button>
        </div>

        {/* small device navbar */}
        <div
          className={` list- none flex flex-col gap-6  w-250 bg-white h-screen fixed right-0 top-0 z-999  shadow overflow-auto  ${
            menuOpen ? "block " : "hidden"
          }  `}
        >
          {/* close button */}
          <div className=" w-full px-5 py-3 hover:bg-light-black text-end  ">
            <button onClick={closeMenu}>
              <img src={close} alt="close button" width={22} height={22} />
            </button>
          </div>
          <hr className="" />

          {/* small device nav links */}
          <ul className="flex flex-col gap-8 px-12 ">
            {navLinks.map(({ href, label }) => (
              <div>
                <li
                  onClick={closeMenu}
                  key={label}
                  className="   text-black rounded-2xl px-4 py-2 text-center hover:bg-light-black hover:text-white  transition duration-300 hover:ease-linear mb-1"
                >
                  <a href={href}>{label}</a>
                </li>
                <hr />
              </div>
            ))}
          </ul>

          <hr />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
