import React from "react";

const Hero = () => {
  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url('/gradientBackground.png')] bg-cover bg-no-repeat min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Créez du contenu exclusif avec les outils d'IA
        </h1>
        <p>
          Transformez votre création de contenu grâce à notre suite d'outils
          d'IA premium. Rédigez des articles, générez des images et optimisez
          votre flux de travail.
        </p>
      </div>
    </div>
  );
};

export default Hero;
