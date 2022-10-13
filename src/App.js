import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Residential from "./components/Services/Residential";
import Cabinet from "./components/Services/Cabinet";
import Commercial from "./components/Services/Commercial";
import Construction from "./components/Services/Construction";
import Flooded from "./components/Services/Flooded";
import Garage from "./components/Services/Garage";
import Laundry from "./components/Services/Laundry";
import MoveIn from "./components/Services/Moving";
import MoveOut from "./components/Services/Moving";
import Party from "./components/Services/Party";
import Pets from "./components/Services/Pets";

import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booknow" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/residentialcleaning" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/postconstruction" element={<Construction />} />
          <Route path="/floodcleaning" element={<Flooded />} />
          <Route path="/garagecleaning" element={<Garage />} />
          <Route path="/laundryservices" element={<Laundry />} />
          <Route path="/movein" element={<MoveIn />} />
          <Route path="/moveout" element={<MoveOut />} />
          <Route path="/partycleanup" element={<Party />} />
          <Route path="/petcleanings" element={<Pets />} />
          <Route path="/cabinetcleanings" element={<Cabinet />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
