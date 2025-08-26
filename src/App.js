import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './componant/layout'; // Corrected folder name
import Register from './componant/register'; // Corrected folder name
import Login from './componant/login'; // Corrected folder name
import Home from './componant/home'; // Corrected folder name
import About from './componant/about'; // Corrected folder name
import Service from './componant/service'; // Corrected folder name
import Contact from './componant/contact'; // Corrected folder name
import Profile from './componant/Profile'; // Corrected folder name
import DonateBloodForm from './componant/DonateBloodForm'; // Import DonateBloodForm component
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} /> {/* Service route */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} /> {/* Profile route */}
          <Route path="/donate-blood" element={<DonateBloodForm />} /> {/* Donate Blood route */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
