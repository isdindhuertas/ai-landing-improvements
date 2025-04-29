import React from 'react';

/**
 * Hero Section Component
 * 
 * Una sección hero moderna y atractiva con animación sutil,
 * mensaje claro sobre la IA en ISDIN y un CTA destacado.
 */
const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
      {/* Fondo con patrón de partículas o gráfico de IA */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="ai-pattern-animation h-full w-full"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Columna de texto */}
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
              La inteligencia artificial 
              <span className="text-indigo-600 dark:text-indigo-400"> al servicio de tu piel</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
              Descubre cómo en ISDIN utilizamos la IA para crear soluciones personalizadas 
              que revolucionan el cuidado de la piel.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-300 transform hover:scale-105">
                Descubrir soluciones
              </button>
              
              <button className="px-8 py-4 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition duration-300">
                Ver demostración
              </button>
            </div>
          </div>

          {/* Columna de imagen/visualización */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Círculo decorativo */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-300 dark:bg-indigo-800 rounded-full opacity-20"></div>
              
              {/* Imagen o animación 3D */}
              <div className="relative z-10 bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-xl">
                <img 
                  src="/images/ai-skin-analysis.webp" 
                  alt="Análisis de piel mediante IA" 
                  className="w-full rounded-xl"
                />
                
                {/* Indicador de IA trabajando */}
                <div className="absolute bottom-6 left-6 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  IA analizando
                </div>
              </div>
              
              {/* Elemento decorativo */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-400 dark:bg-indigo-700 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Stats/Highlights */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "92%", label: "de precisión en diagnósticos" },
            { number: "+500K", label: "análisis realizados" },
            { number: "15+", label: "productos personalizables" },
            { number: "24/7", label: "asistencia inteligente" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">{stat.number}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
