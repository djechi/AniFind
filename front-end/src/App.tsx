import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/home/home";
import Recommendation from "./page/recommendation/recommendation";
import About from "./page/about/about";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
