import MarkdownContent from '../components/MarkdownContent';
import defiContent from '../defi_tendencias_2025.md?raw';
import { TrendingUp } from 'lucide-react';

export default function DefiPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-lg p-8">
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="h-8 w-8" />
          <span className="text-sm font-semibold bg-white text-green-600 px-3 py-1 rounded-full">
            Conteúdo Avançado
          </span>
        </div>
        <h1 className="text-4xl font-bold">DeFi: Tendências e Inovações 2025</h1>
        <p className="text-green-100 mt-2">Aprofundamento sobre Finanças Descentralizadas</p>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg">
        <MarkdownContent content={defiContent} />
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-lg p-8 border-2 border-green-200 dark:border-green-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Próximos Passos
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Agora que você entendeu as tendências e inovações do DeFi em 2025, explore os módulos do curso para aprofundar seu conhecimento sobre cada aspecto das finanças descentralizadas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/modulo4"
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105"
          >
            Ver Módulo 4: DeFi
          </a>
          <a
            href="/"
            className="px-6 py-3 bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition"
          >
            Voltar ao Início
          </a>
        </div>
      </div>
    </div>
  );
}
