import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-full items-center relative flex flex-col">
      <nav className="w-full py-10 flex bg-ani-grey-200 text-ani-white-100">
        <Link to="/" className="site-title">
          <p className="text-4xl ml-[6vw] text-ani-white-100 font-ani-default">
            Ani<span className="text-ani-green-100">Find</span>
          </p>
        </Link>

        <p className="font-ani-default items-center text-[2.2vh] flex ml-[23vw] gap-x-[5vw]">
          <Link to="/">Home</Link>
          <Link to="/recommendation">Recommendation</Link>
          <Link to="/about">About</Link>
        </p>
      </nav>
      <div className="absolute bg-ani-black-100 rounded-2xl w-[75vw] h-[.08vh] top-[13vh] ml-[6vw]" />
    </div>
  );
};

export default Footer;
