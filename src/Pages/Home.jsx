import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        Welcome to <span className="text-blue-600">TaskMaster</span> 📝
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Stay organized and productive with your personal Task Manager app.
        Create, view, and manage your daily tasks easily — built with{" "}
        <span className="font-semibold text-blue-500">React & Tailwind CSS</span>.
      </p>

      <div className="flex gap-4">
        <Link
          to="/tasks"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          View Tasks
        </Link>
        <Link
          to="/api"
          className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          Explore API Data
        </Link>
      </div>

      <footer className="mt-12 text-sm text-gray-500">
        Built with ❤️ using React + Tailwind
      </footer>
    </div>
  );
}
