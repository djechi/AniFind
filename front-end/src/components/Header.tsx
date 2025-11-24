import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full h-full py-6 flex bg-ani-grey-200 text-ani-white-100">
      <Link to="/" className="site-title">
        <p className="text-4xl ml-[6vw] text-ani-white-100 font-ani-default">
          Ani<span className="text-ani-green-100">Find</span>
        </p>
      </Link>

      <p className="items-center text-[2.2vh] flex ml-[23vw] gap-x-[5vw]">
        <Link to="/">Home</Link>
        <Link to="/recommendation">Recommendation</Link>
        <Link to="/about">About</Link>
      </p>
    </nav>
  );
};

export default Header;
