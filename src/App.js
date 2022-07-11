import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./app/about/index";
import Contact from "./app/contact/index";
import Service from "./app/service/index";
import Home from "./app/home/index";

//global - shared
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
