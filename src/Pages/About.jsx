import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center px-6 py-12 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        About <span className="text-blue-600">TaskMaster</span> 🧠
      </h1>

      <p className="max-w-2xl text-lg text-gray-600 mb-8 leading-relaxed">
        <span className="font-semibold">TaskMaster</span> is a simple yet
        powerful productivity app built with{" "}
        <span className="font-medium text-blue-500">React.js</span> and{" "}
        <span className="font-medium text-blue-500">Tailwind CSS</span>.  
        It helps you stay organized by allowing you to add, edit, and track your
        daily tasks effortlessly — all with a clean, modern interface.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            💡 Our Mission
          </h2>
          <p className="text-gray-600">
            To make task management simple and efficient for everyone — students,
            developers, and professionals alike.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            ⚙️ Technologies
          </h2>
          <p className="text-gray-600">
            Built with React, Tailwind CSS, and Vite for a fast, modern, and
            developer-friendly experience.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            🚀 Future Plans
          </h2>
          <p className="text-gray-600">
            We plan to add user authentication, cloud sync, and dark mode to
            enhance the overall experience.
          </p>
        </div>
      </div>

      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} TaskMaster — Created with ❤️ by adecares-Dev
      </footer>
    </div>
  );
}
