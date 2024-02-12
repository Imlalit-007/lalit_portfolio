import "./styles/App.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";
import portfolio_hero from "./assets/portfolio_hero.png";
import logo2 from "./assets/logo_2.png";

import { IoLocationSharp } from "react-icons/io5";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  });

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div className='App'>
          <Navbar />
          <div className='hero-img'>
            <img
              src={portfolio_hero}
              alt={portfolio_hero}
              loading='lazy'
            />
          </div>
          <div className='logo2-img'>
            <img
              src={logo2}
              alt={logo2}
              loading='lazy'
            />
          </div>
          <div className='location'>
            <IoLocationSharp />
            <span>india</span>
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
}

export default App;
