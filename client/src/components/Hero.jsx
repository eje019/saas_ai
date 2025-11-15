import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url('/gradientBackground.png')] bg-cover bg-no-repeat min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Créez du contenu exclusif avec des{" "}
          <span className="text-primary">outils d'IA</span>
        </h1>

        <p className="mt-6 text-md sm:text-lg md:text-xl 2xl:text-2xl text-gray-700">
          Transformez votre création de contenu grâce à notre suite d'outils
          d'IA premium. Rédigez des articles, générez des images et optimisez
          votre flux de travail.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
        <button
          onClick={() => navigate("/ai")}
          className="bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer"
        >
          Commencez par créer maintenant
        </button>
        <button className="bg-white px-10 py-3 rounded-lg border border-gray hover:scale-102 active:scale-95 transition cursor-pointer">
          Regardez une demo
        </button>
      </div>
    </div>
  );
};

export default Hero;
