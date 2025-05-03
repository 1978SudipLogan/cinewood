import React from "react";

import ClickSpark from '../ClickSpark';

import { Link, NavLink } from "react-router-dom";
import { navigation, mobileNavigation } from "../constant/navigation";
import { Colorize } from "@mui/icons-material";

const MobileNavigation = () => {
  return (
    <section className="lg:hidden flex items-center fixed bottom-0 h-16 z-50  w-full text-white font-normal">
      <div className="container flex  items-center justify-between  bg-black opacity-80 backdrop-blur-3xl mx-auto h-full px-3">
        {mobileNavigation.map((element, index) => {
          return (
            <NavLink
              to={element.href}
              className={({ isActive }) =>
                `font-serif text-center text-slate-400  ${
                  isActive ? "text-white " : ""
                }`
              }
              key={index}
            >
              
              <ClickSpark
                sparkColor="yellow"
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={500}
              >
                <div>
                {React.cloneElement(element.icon, { style: { fontSize: 30 } })}
              </div>
              <div className="text-sm ">{element.label}</div>
              </ClickSpark>
              
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;
