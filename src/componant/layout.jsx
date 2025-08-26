import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Layout = ({ children }) => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-red-500 text-white p-6">
        <div className="flex justify-between items-center">
          {/* Clickable Caredrop Logo and Donate Blood link */}
          <div className="text-xl font-bold flex space-x-4">
            <Link to="/" className="hover:text-gray-300">Caredrop</Link>
            <Link to="/donate-blood" className="hover:text-gray-300">Donate Blood</Link> {/* Donate Blood link */}
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
              <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
              <li><Link to="/register" className="hover:text-gray-300">Sign Up</Link></li>
              <li><Link to="/login" className="hover:text-gray-300">Sign In</Link></li>
              <li><Link to="/profile" className="hover:text-gray-300">Profile</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow relative">
        {/* Image in the center of the page */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center"
             style={{ backgroundImage: `url('/assets/bgimage.png')`, zIndex: -1 }}></div>
             
        {children} {/* This will render the content of each page */}
      </main>

      {/* Footer Section */}
      <footer className="bg-red-500 text-white py-6 text-center">
        <p>&copy; 2025 Caredrop. All rights reserved.</p>
        <div className="mt-4">
          <a href="#facebook" className="mx-2 hover:text-gray-300">Facebook</a>
          <a href="#twitter" className="mx-2 hover:text-gray-300">Twitter</a>
          <a href="#instagram" className="mx-2 hover:text-gray-300">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
