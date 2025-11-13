import { Link } from "react-router-dom";

export default function Navbar({ toggleTheme }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <div className="flex items-center gap-4">
        <h1 className="font-bold text-xl">React Week 3</h1>
        <div className="flex gap-2">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/tasks" className="hover:underline">
            Tasks
          </Link>
          <Link to="/api" className="hover:underline">
            API
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </div>
      </div>

      <button
        onClick={toggleTheme}
        className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200"
      >
        Toggle Theme
      </button>
    </nav>
  );
}
