import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
