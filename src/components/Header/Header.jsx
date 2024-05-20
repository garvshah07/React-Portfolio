 import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const menuList = [
    {
      linkName: "HOME",
      url: "/",
    },
    {
      linkName: "ABOUT ME",
      url: "/about",
    },
    {
      linkName: "PROJECT",
      url: "/project",
    },
    {
      linkName: "CONTACT",
      url: "/contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const linkHandler = () => {
    setIsOpen(false);
  };

  const logo = "GS";

  return (
    <header className="flex justify-center w-full relative z-50">
      <nav className="  flex justify-between h-20 cursor-pointer  gap-5  pl-10 pr-10 m-3 shadow-1 w-full  flex-wrap bg-gray-400 rounded-full backdrop-filter backdrop-blur-lg bg-opacity-10  border border-gray-700 relative">
        <div className="flex justify-center items-center text-center ">
          <Link to={"/"}>
            <span className="text-lg">{logo}</span>
          </Link>
        </div>
        <div
          className={`${
            !isOpen
              ? "hidden"
              : "flex  flex-col bg-[#1c2938] border border-[#374151] md:bg-none md:border-none md:border md:border-transparent "
          } md:flex md:flex-row justify-center items-center text-center gap-4 text-lg fixed right-0 top-24 w-full md:relative md:top-0 index rounded-3xl md:w-auto md:bg-none lg:bg-none  
          `}
        >
          {menuList.map((list, index) => {
            return (
              <Link
                key={index}
                onClick={linkHandler}
                className="p-4 hover:text-cyan-500 rounded-full"
                to={list.url}
              >
                {list.linkName}
              </Link>
            );
          })}
        </div>

        <div className=" flex justify-center items-center m-3 gap-4  md:hidden">
          {!isOpen ? (
            <MenuIcon
              onClick={() => {
                setIsOpen(true);
              }}
            ></MenuIcon>
          ) : (
            <CloseIcon
              onClick={() => {
                setIsOpen(false);
              }}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
