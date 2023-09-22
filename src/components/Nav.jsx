import { navLinks } from "../constants";
import styles from "../style";
import { useState } from "react";

const menuIcon = () => (
  <div className={`${styles.flexCenter} flex-col w-[32px] h-[32px] gap-[4px]`}>
    <div className="w-[20px] h-[2px] bg-primaryBlue" />
    <div className="w-[20px] h-[2px] bg-primaryBlue" />
    <div className="w-[20px] h-[2px] bg-primaryBlue" />
  </div>
);

const closeIcon = () => (
  <div className={`${styles.flexCenter} flex-col w-[32px] h-[32px] relative`}>
    <div className="w-[24px] h-[2px] bg-primaryBlue rotate-45 absolute" />
    <div className="w-[24px] h-[2px] bg-primaryBlue -rotate-45 absolute" />
  </div>
);

const ExtendedMenu = () => (
  <ul className={`hidden sm:flex justify-center items-center flex-row gap-0 md:gap-8 h-full`}>
    {navLinks.map((link) => (
      <li
        key={link.id}
        className="uppercase text-[11px] leading-[15px] font-bold tracking-[3.3px] text-dimWhite h-full"
      >
        <a
          href={`#${link.id}`}
          className={`${styles.flexCenter} h-full w-[95px] hover:text-black hover:shadow-navLink font-openSans`}
        >
          {link.title}
        </a>
      </li>
    ))}
  </ul>
);

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle((received) => !received);

  return (
    <div className="relative z-[1]">
      <nav className={`flex flex-row items-center justify-between h-[70px] px-6 ss:px-16 lg:px-32 shadow-lg `}>
        <h1 className="text-[32px] leading-[37px] font-light text-primaryBlue">BestShop</h1>
        {ExtendedMenu()}

        <div onClick={handleClick} className={`${styles.flexCenter} flex sm:hidden`}>
          {toggle ? closeIcon() : menuIcon()}
        </div>
      </nav>

      <div
        className={`${
          toggle ? "block" : "hidden"
        } sm:hidden w-full absolute top-[70px] py-6 px-6 ss:px-16 lg:px-32 bg-white shadow-lg z-[-1] navbar`}
      >
        <ul className={`flex justify-start items-start flex-col`}>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="uppercase text-[11px] leading-[15px] font-bold tracking-[3.3px] text-dimWhite h-full"
            >
              <a
                href={`#${link.id}`}
                className={`flex justify-start items-center hover:text-black font-openSans h-10 w-[95px]`}
                onClick={handleClick}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
