import "./header.css";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between h-16 p-4 bg-white m-3 ">
        <div className=" flex justify-center w-[50%]">
          <i>Logo</i>
        </div>
        <div className=" w-[50%]">
          <ul className="flex gap-4 justify-center">
            <li>Home</li>
            <li>Skills</li>
            <li>Home</li>
            <li>Skills</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
