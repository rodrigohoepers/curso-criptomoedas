import { Link } from 'react-router-dom';
import { BookOpen, Zap, TrendingUp, Shield } from 'lucide-react';

export default function HomePage() {
  const modules = [
    {
      id: 1,
      title: 'Introdução às Criptomoedas',
      description: 'Conceitos fundamentais, história e funcionamento do ecossistema cripto',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Tecnologia Blockchain',
      description: 'Fundamentos, mecanismos de consenso e aplicações práticas',
      icon: Zap,
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      title: 'Principais Criptomoedas',
      description: 'Bitcoin, Ethereum, Stablecoins, Altcoins e NFTs',
      icon: TrendingUp,
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      id: 4,
      title: 'Finanças Descentralizadas (DeFi)',
      description: 'Protocolos, yield farming, staking e governança',
      icon: Shield,
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Curso Completo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-purple-600">Criptomoedas</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Do nível iniciante ao avançado, com foco técnico e prático. Aprenda sobre blockchain, DeFi e as principais criptomoedas do mercado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/modulo1"
            className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105"
          >
            Começar Curso
          </Link>
          <Link
            to="/defi-2025"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105"
          >
            DeFi 2025
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">📚 Estrutura do Curso</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">✓</span> 6 módulos progressivos
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">✓</span> Conteúdo detalhado e atualizado
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">✓</span> Exemplos práticos e estudos de caso
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">✓</span> Foco em DeFi e inovações 2025
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🎯 O que você aprenderá</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✓</span> Fundamentos de criptomoedas
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✓</span> Tecnologia blockchain em profundidade
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✓</span> Estratégias de investimento
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✓</span> Protocolos DeFi avançados
            </li>
          </ul>
        </div>
      </section>

      {/* Modules Preview */}
      <section>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Módulos do Curso
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Link
                key={module.id}
                to={`/modulo${module.id}`}
                className="group bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${module.color} h-2`}></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`bg-gradient-to-r ${module.color} p-3 rounded-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                      Módulo {module.id}
                    </h3>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {module.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {module.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-purple-900 text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para começar sua jornada?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Explore o mundo das criptomoedas e finanças descentralizadas com nosso curso completo.
        </p>
        <Link
          to="/modulo1"
          className="inline-block px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition transform hover:scale-105"
        >
          Iniciar Aprendizado
        </Link>
      </section>
    </div>
  );
}
