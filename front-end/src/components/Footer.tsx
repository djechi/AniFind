import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <nav className="bottom-0 w-full py-10 flex justify-center bg-ani-grey-200 text-ani-white-100">
        <Link to="/" className="site-title">
          <p className="text-4xl ml-[-30vw] text-ani-white-100 font-ani-default absolute">
            Ani<span className="text-ani-green-100">Find</span>
          </p>
        </Link>

        <p className="font-ani-default text-[2.2vh] flex gap-x-[5vw]">
          <Link to="/">Home</Link>
          <Link to="/recommendation">Recommendation</Link>
          <Link to="/about">About</Link>
        </p>
      </nav>
  );
};

export default Footer;
