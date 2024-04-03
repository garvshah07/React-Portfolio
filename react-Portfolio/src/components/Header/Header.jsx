const Header = () => {
  const navItems = ["Projects", "Skills", "Contact"];
  const logo = "GS";

  return (
    <header className="flex justify-center w-full">
      <nav className="  flex justify-between cursor-pointer tracking-wide gap-5 h-20 pl-10 pr-10 m-3 shadow-1 w-full  flex-wrap bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-700 ">
        <div className="flex justify-center items-center text-center ">
          <span className="text-lg pl-[10px] pr-[10px]">{logo}</span>
        </div>
        <div className="flex justify-center items-center text-center gap-8 list-none text-lg">
          {navItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
