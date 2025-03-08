import React from "react";
import { Button } from "@mui/material";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <header className="w-full flex justify-between items-center py-4 px-6 bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold">Intelion</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-gray-400">Features</a></li>
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main className="flex-1 flex flex-col items-center text-center">
        <h2 className="text-4xl font-extrabold mb-4">Revolutionizing Finance with Intelion</h2>
        <p className="max-w-2xl text-lg mb-6">Empowering businesses with seamless financial solutions and innovative technology.</p>
        <Button variant="contained" color="primary" size="large">Get Started</Button>
      </main>

      <section id="features" className="w-full py-12 text-center">
        <h3 className="text-3xl font-bold mb-6">Our Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">Secure Transactions</h4>
            <p>We provide top-tier security for all your financial operations.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">Real-time Analytics</h4>
            <p>Get real-time insights to make data-driven decisions.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">User-Friendly Interface</h4>
            <p>Our intuitive design ensures seamless user experience.</p>
          </div>
        </div>
      </section>

      <footer className="w-full py-6 bg-gray-800 text-center">
        <p>&copy; 2025 Intelion. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;