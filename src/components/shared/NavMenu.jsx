import React from "react";
import { Logo } from "./Logo";
import { navItems } from "../../lib/db";
import { Button } from "../common/Button";

export const NavMenu = ({ toggleMenu }) => {
  return (
    <div className=" absolute top-0 left-0 bg-white h-screen w-full px-4 pt-8 space-y-3">
      <div className=" flex justify-between">
        <Logo>GoverningDocs</Logo>

        {/* Close Button */}
        <button className=" cursor-pointer relative" onClick={toggleMenu}>
          <div className="w-6 h-0.5 bg-secondary  absolute rotate-45"></div>
          <div className="w-6 h-0.5 bg-secondary  -rotate-45"></div>
        </button>
      </div>

      <ul className="flex flex-col gap-2">
        {navItems.map(({ label, link }, i) => (
          <li key={i}>
            <a
              href={link}
              className="text-tertiary hover:text-secondary font-nunito"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <Button>Get Started Today</Button>
    </div>
  );
};
