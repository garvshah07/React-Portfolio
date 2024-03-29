const Header = () => {
  return (
    <header className="flex justify-center w-full">
      <nav className="flex justify-between cursor-pointer tracking-wide gap-5 h-20 pl-10 pr-10 m-3 shadow-1 w-full max-w-[1180px] flex-wrap bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-700 ">
        <div className="flex justify-center items-center text-center ">
          <span className="text-lg pl-[10px] pr-[10px]">GS</span>
        </div>
        <div className="flex justify-center items-center text-center gap-8 list-none text-lg">
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </div>
      </nav>
    </header>
  );
};

export default Header;
