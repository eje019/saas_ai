import React from "react";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Contenu principal */}
      <div className="pt-24 px-6">
        {" "}
        {/* pt-24 pour compenser la navbar fixe */}
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Bienvenue sur notre plateforme
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Une solution complète pour tous vos besoins.
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
            Commencer maintenant
          </button>
        </div>
        {/* Features */}
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8 mt-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                Service 1
              </h3>
              <p className="text-gray-700">Description du service 1</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-800">
                Service 2
              </h3>
              <p className="text-gray-700">Description du service 2</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-semibold mb-3 text-purple-800">
                Service 3
              </h3>
              <p className="text-gray-700">Description du service 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
