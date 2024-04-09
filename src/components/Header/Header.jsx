import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const menuList = [
    {
      linkName: "Home",
      url: "/",
    },
    {
      linkName: "About",
      url: "/about",
    },
    {
      linkName: "Project",
      url: "/project",
    },
    {
      linkName: "Contact",
      url: "/contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const linkHandler = () => {
    setIsOpen(false);
  };

  const logo = "GS";

  return (
    <header className="flex justify-center w-full">
      <nav className="  flex justify-between h-20 cursor-pointer  gap-5  pl-10 pr-10 m-3 shadow-1 w-full  flex-wrap bg-gray-400 rounded-full backdrop-filter backdrop-blur-lg bg-opacity-10  border border-gray-700 relative">
        <div className="flex justify-center items-center text-center ">
          <span className="text-lg">{logo}</span>
        </div>
        <div
          className={`${
            !isOpen
              ? "hidden"
              : "flex flex-col backdrop-filter bg-gray-900 backdrop-blur-lg  border border-gray-700 "
          } md:flex md:flex-row justify-center items-center text-center gap-4 text-lg absolute right-0 top-24 w-full md:relative md:top-0  rounded-3xl md:w-auto `}
        >
          {menuList.map((list, index) => {
            return (
              <Link
                key={index}
                onClick={linkHandler}
                className="p-4"
                to={list.url}
              >
                {list.linkName}
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center items-center m-3 gap-4  md:hidden">
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
