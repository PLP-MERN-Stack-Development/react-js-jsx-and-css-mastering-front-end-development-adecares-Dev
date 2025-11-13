export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
        </p>
        <p className="text-xs mt-1 text-blue-100">
          Built with 💙 using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

