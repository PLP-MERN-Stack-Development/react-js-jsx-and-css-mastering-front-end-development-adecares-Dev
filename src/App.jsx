import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Tasks from "./Pages/Tasks";
import ApiData from "./Pages/ApiData";
import { ThemeProvider } from "./Context/ThemeContext";
import { useTheme } from "./Context/useTheme";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";

function Content() {
  const { toggleTheme } = useTheme();
  return (
    <>
      <Navbar toggleTheme={toggleTheme} />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/api" element={<ApiData />} />
          <Route path="/about" element={<About />} />
          {/* fallback to home for unknown routes */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

