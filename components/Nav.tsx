"use client"
import { linksNav } from "@/utils/linksNav";

import { Link as ScrollLink } from "react-scroll";

interface Props {
  containerStyles: string;
}

const Nav = ({ containerStyles }: Props) => {
  return (
    <div className="gap-24 items-center">
      <nav className={`${containerStyles}`}>
        {linksNav.map((link, index) => {
          return (
            <ScrollLink
              offset={link.offset}
              to={link.target}
              smooth
              spy
              activeClass="active"
              key={index}
              className="cursor-pointer hover:text-backgroundImgColor transition-all"
            >
              {link.name}
            </ScrollLink>
          )
        })}
      </nav>
    </div>
  )
}

export default Nav