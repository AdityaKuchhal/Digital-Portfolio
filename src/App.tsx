import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen text-gray-800">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
