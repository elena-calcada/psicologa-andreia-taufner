"use client"
import { linksNav } from "@/utils/linksNav";
import { Link as ScrollLink } from "react-scroll";
import SocialNav from "./SocialNav";

interface Props {
  containerStyles: string;
  onClickCloseNav: () => void
}

const MobileNav = ({ containerStyles, onClickCloseNav }: Props) => {
  return (
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
            onClick={onClickCloseNav}
          >
            {link.name}
          </ScrollLink>
        )
      })}

      <SocialNav onClickCloseNav={onClickCloseNav} containerStyles="flex gap-8 justify-center mt-6" />
    </nav>
  )
}

export default MobileNav