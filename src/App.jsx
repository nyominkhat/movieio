import { createContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";
import BackgroundSlider from "./components/BackgroundSlider";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";

const bgimgs = ["witcher.jpg", "batman.jpg", "venon.png"];

export const faqContext = createContext();

function App() {
  const [query, setQuery] = useState(0);
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/FAQ")
      .then((res) => res.json())
      .then((data) => setFaq(data));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (query === 2) {
        setQuery(0);
      } else {
        setQuery(query + 1);
      }
    }, 7000);
  }, [query]);

  const faqContextValue = {
    faq,
  };

  return (
    <faqContext.Provider value={faqContextValue}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="hero">
          <nav className="w-full absolute top-0 h-20 backdrop-blur-sm z-40 p-4 px-6 flex items-center justify-between">
            <img
              className="sm:w-36 w-20"
              src="images/Movieio-logo.svg"
              // "src/images/Movieio-logo.svg"
              alt="logo"
            />

            <div className="flex items-center sm:gap-8 gap-1">
              <ul className="">
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>

              <Link
                to="/login"
                className="btn btn-error rounded-none text-white font-semibold"
              >
                Sign In
              </Link>
            </div>
          </nav>

          {bgimgs.map((img, index) => {
            return (
              <BackgroundSlider
                index={index}
                bgimgs={bgimgs}
                query={query}
                key={bgimgs[index]}
              />
            );
          })}
        </div>

        {/* router */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </motion.div>
    </faqContext.Provider>
  );
}

export default App;
