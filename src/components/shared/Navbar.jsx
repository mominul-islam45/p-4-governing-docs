import React, { useState } from "react";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { Logo } from "./Logo";
import { navItems } from "../../lib/db/index";
import { NavMenu } from "./NavMenu";

export const Navbar = () => {
  const [isMenuOpen, setInMenuOpen] = useState(false);
  const toggleMenu = () => setInMenuOpen(!isMenuOpen);
  return (
    <nav className="pt-[46px]">
      <Container>
        <div className="flex justify-between items-center bg-white rounded-full py-5 px-[30px]">
          <Logo>GoverningDocs</Logo>
          <ul className="hidden lg:flex gap-4">
            {navItems.map(({ label, link }, i) => (
              <li key={i}>
                <a
                  href={link}
                  className="text-tertiary hover:text-secondary font-nunito text-[12px] md:text-base"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center gap-4">
            {/* Toggle button */}
            <button
              className="lg:hidden space-y-2 cursor-pointer"
              onClick={toggleMenu}
            >
              <div className="w-6 h-0.5 bg-secondary"></div>
              <div className="w-6 h-0.5 bg-secondary"></div>
              <div className="w-6 h-0.5 bg-secondary"></div>
            </button>
            <Button className="hidden sm:block">Get Started Today</Button>
          </div>
        </div>

        {isMenuOpen && <NavMenu toggleMenu={toggleMenu} />}
      </Container>
    </nav>
  );
};
