import React, { useState } from 'react';

/**
 * Componente de Análisis de Piel con IA
 * 
 * Permite mostrar de forma interactiva cómo funciona el análisis
 * de piel con IA de ISDIN, con una demo visual.
 */
const AISkinAnalysisFeature = () => {
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
    // Simular análisis de IA
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };
  
  const handleReset = () => {
    setStep(1);
    setIsAnalyzing(false);
    setShowResults(false);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            Tecnología Exclusiva
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Análisis inteligente de tu piel
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Prueba una demostración de cómo nuestra IA analiza tu piel para detectar necesidades específicas y recomendar productos personalizados.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Steps Navigation */}
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map((stepNumber) => (
                <div 
                  key={stepNumber}
                  className={`relative flex-1 ${stepNumber < 3 ? 'after:content-[""] after:h-1 after:w-full after:absolute after:top-4 after:left-0 after:bg-gray-200 dark:after:bg-gray-700' : ''}`}
                >
                  <div className="flex flex-col items-center">
                    <div 
                      className={`z-10 flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                        step >= stepNumber 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {stepNumber}
                    </div>
                    <span className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                      {stepNumber === 1 ? 'Seleccionar área' : stepNumber === 2 ? 'Análisis IA' : 'Resultados'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Demo */}
            <div className="relative">
              {step === 1 && (
                <div className="text-center">
                  <div className="relative mx-auto max-w-md mb-6">
                    <img 
                      src="/images/face-outline.webp" 
                      alt="Selecciona un área facial para analizar" 
                      className="w-full rounded-lg"
                    />
                    
                    {/* Interactive Hotspots */}
                    {[
                      { top: '25%', left: '25%', area: 'Frente' },
                      { top: '40%', left: '50%', area: 'Nariz' },
                      { top: '60%', left: '30%', area: 'Mejillas' },
                      { top: '75%', left: '50%', area: 'Barbilla' }
                    ].map((spot, index) => (
                      <button
                        key={index}
                        className="absolute w-8 h-8 rounded-full bg-indigo-600/80 hover:bg-indigo-600 text-white flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all"
                        style={{ top: spot.top, left: spot.left }}
                        onClick={() => setStep(2)}
                        aria-label={`Analizar ${spot.area}`}
                      >
                        <span className="text-xs font-medium">{index + 1}</span>
                        <span className="absolute -bottom-7 whitespace-nowrap text-xs bg-indigo-600 text-white px-2 py-1 rounded">{spot.area}</span>
                      </button>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    Haz clic en cualquier área para iniciar el análisis con IA
                  </p>
                </div>
              )}
              
              {step === 2 && (
                <div className="text-center">
                  <div className="relative mx-auto max-w-md mb-8 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <img 
                      src="/images/skin-closeup.webp" 
                      alt="Imagen cercana de la piel" 
                      className="w-full"
                    />
                    
                    {/* Scanning overlay */}
                    {isAnalyzing && (
                      <div className="absolute inset-0 bg-indigo-500/20">
                        <div className="absolute inset-0 border-2 border-indigo-500 animate-pulse"></div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 animate-scan"></div>
                      </div>
                    )}
                  </div>
                  
                  {!isAnalyzing && !showResults ? (
                    <button
                      onClick={handleStartAnalysis}
                      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
                    >
                      Comenzar análisis IA
                    </button>
                  ) : isAnalyzing ? (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Analizando características de la piel...</span>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setStep(3)}
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
                    >
                      Ver resultados
                    </button>
                  )}
                </div>
              )}
              
              {step === 3 && (
                <div>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Análisis IA</h3>
                      
                      <ul className="space-y-3">
                        {[
                          { label: 'Hidratación', value: 65, color: 'bg-blue-500' },
                          { label: 'Elasticidad', value: 78, color: 'bg-green-500' },
                          { label: 'Textura', value: 82, color: 'bg-purple-500' },
                          { label: 'Signos de edad', value: 45, color: 'bg-yellow-500' }
                        ].map((metric, index) => (
                          <li key={index} className="flex flex-col">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-700 dark:text-gray-300">{metric.label}</span>
                              <span className="font-medium text-gray-900 dark:text-white">{metric.value}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div 
                                className={`${metric.color} h-2 rounded-full`} 
                                style={{ width: `${metric.value}%` }}
                              ></div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Productos recomendados</h3>
                      
                      <ul className="space-y-4">
                        {[
                          { name: 'Sérum Hidratante Advanced', match: 98 },
                          { name: 'Crema Antiarrugas Pro', match: 94 },
                          { name: 'Ampollas Regeneradoras', match: 87 }
                        ].map((product, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow mr-4 flex-shrink-0"></div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 dark:text-white">{product.name}</h4>
                              <div className="flex items-center">
                                <span className="text-sm text-green-600 dark:text-green-400 font-medium">{product.match}% coincidencia</span>
                                <div className="ml-2 flex space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      Reiniciar demo
                    </button>
                    
                    <button
                      className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
                    >
                      Ver productos completos
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for animation */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AISkinAnalysisFeature;
