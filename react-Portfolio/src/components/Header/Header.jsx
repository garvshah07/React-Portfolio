import { Link } from "react-router-dom";

const Header = () => {
  const logo = "GS";

  return (
    <header className="flex justify-center w-full">
      <nav className="  flex justify-between cursor-pointer  gap-5 h-20 pl-10 pr-10 m-3 shadow-1 w-full  flex-wrap bg-gray-400 rounded-full backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-700 ">
        <div className="flex justify-center items-center text-center ">
          <span className="text-lg">{logo}</span>
        </div>
        <div className="flex justify-center items-center text-center gap-3 text-lg">
          <Link to={"/"}>Home</Link>
          <Link to={"about"}>About Me</Link>
          <Link to={"project"}>Project</Link>
          <Link to={"contact"}>Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
