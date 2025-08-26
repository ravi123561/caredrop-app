import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Home = () => {
  return (
    <div className="font-sans bg-gray-100">
     

      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen text-center bg-[url('https://via.placeholder.com/1500x1000')]">
        <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
          <div className="text-white">
            <h1 className="text-5xl font-extrabold">Empowering Your Health with Caredrop</h1>
            <p className="mt-4 text-xl">Seamlessly connect with healthcare professionals and manage your well-being.</p>
            <Link to="/register" className="mt-6 inline-block bg-red-400 text-white px-6 py-3 rounded-full text-lg hover:bg-red-300">Get Started</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg p-6 rounded-xl text-center">
            <img src="/assets/consult.png" alt="Consultation" className="mx-auto mb-4 w-16 h-16" />
            <h3 className="text-xl font-semibold">Instant Medical Consultations</h3>
            <p>Connect with healthcare providers in minutes.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl text-center">
            <img src="/assets/healthrecord.jpg" alt="Health Records" className="mx-auto mb-4 w-16 h-16" />
            <h3 className="text-xl font-semibold">Confidential Health Records</h3>
            <p>Secure your health data with full privacy.</p>
          </div>
          {/* Add more features as needed */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-200 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Caredrop</h2>
        <p className="text-lg">Our mission is to make healthcare accessible and affordable for everyone, anytime, anywhere.</p>
        <div className="mt-6 flex justify-center gap-8">
          <div>10,000+ Consultations Completed</div>
          <div>24/7 Support</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <h2 className="text-3xl font-semibold text-center mb-8">What Our Users Say</h2>
        <div className="flex justify-center space-x-12">
          <div className="bg-white shadow-lg p-6 rounded-xl text-center w-80">
            <p>"Caredrop has been a lifesaver! The service is so quick and convenient!"</p>
            <div>- John Doe</div>
          </div>
          {/* Add more testimonials */}
        </div>
      </section>

      
    </div>
  );
};

export default Home;
