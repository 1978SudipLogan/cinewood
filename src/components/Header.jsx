import React, { useEffect, useState } from "react";
import movie_logo from "../assets/movies-stamp-png.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { navigation } from "../constant/navigation";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      navigate(`/search?q=${searchInput}`);
    }
  };



  return (
    <header className="fixed top-0 h-16 bg-opacity-80 bg-black mx-auto w-full z-50">
      <div className="container flex items-center h-full   mx-auto  px-3">
        <Link to="/" className="">
          <img src={movie_logo} alt="logo" width={120} />
        </Link>
        <nav className="hidden lg:flex gap-3 ml-5 items-center ">
          {navigation.map((nav, index) => (
            <div key={nav.label}>
              <NavLink
                to={nav.href}
                className={({ isActive }) =>
                  `text-white font-medium   ${
                    isActive ? "text-slate-400 underline" : ""
                  }`
                }
              >
                {nav.label}
              </NavLink>
            </div>
          ))}
        </nav>
        <div className="flex items-center ml-auto gap-3  ">
          <form
            action=""
            className="flex items-center gap-1 "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Search Movies, Tv Show & Cast Names here..."
              className="font-bold capitalize text-yellow-400 px-2 w-[500px] py-1 outline-none  rounded-full hidden lg:block bg-black border-2 border-blue-700"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button>
              {" "}
              <SearchIcon className=" text-white hover:text-red-500" />
            </button>
          </form>

          <div className="overflow-hidden w-8 h-8 cursor-pointer active:scale-50 transition-all duration-50 ease-in-out">
            <AccountCircleIcon fontSize="large" className="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
