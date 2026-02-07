import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MarkdownContent from '../components/MarkdownContent';
import modulo1 from '../modulo1_introducao.md?raw';
import modulo2 from '../modulo2_blockchain.md?raw';
import modulo3 from '../modulo3_principais_criptomoedas.md?raw';
import modulo4 from '../modulo4_defi.md?raw';
import modulo5 from '../modulo5_investimentos_mercado.md?raw';
import modulo6 from '../modulo6_exemplos_praticos.md?raw';

const modulos = [
  { id: 1, title: 'Introdução às Criptomoedas', content: modulo1 },
  { id: 2, title: 'Tecnologia Blockchain', content: modulo2 },
  { id: 3, title: 'Principais Criptomoedas', content: modulo3 },
  { id: 4, title: 'Finanças Descentralizadas (DeFi)', content: modulo4 },
  { id: 5, title: 'Investimentos e Mercado', content: modulo5 },
  { id: 6, title: 'Exemplos Práticos e Estudos de Caso', content: modulo6 },
];

export default function ModulePage() {
  const { id } = useParams<{ id: string }>();
  const moduloId = parseInt(id || '1');
  const modulo = modulos.find(m => m.id === moduloId);

  if (!modulo) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Módulo não encontrado</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
          Voltar ao início
        </Link>
      </div>
    );
  }

  const prevModulo = moduloId > 1 ? moduloId - 1 : null;
  const nextModulo = moduloId < modulos.length ? moduloId + 1 : null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white rounded-lg p-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-sm font-semibold bg-yellow-500 text-gray-900 px-3 py-1 rounded-full">
            Módulo {moduloId}
          </span>
        </div>
        <h1 className="text-4xl font-bold">{modulo.title}</h1>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg">
        <MarkdownContent content={modulo.content} />
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center gap-4">
        {prevModulo ? (
          <Link
            to={`/modulo${prevModulo}`}
            className="flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition"
          >
            <ChevronLeft className="h-5 w-5" />
            Módulo Anterior
          </Link>
        ) : (
          <div></div>
        )}

        <Link
          to="/"
          className="px-6 py-3 bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition"
        >
          Voltar ao Início
        </Link>

        {nextModulo ? (
          <Link
            to={`/modulo${nextModulo}`}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            Próximo Módulo
            <ChevronRight className="h-5 w-5" />
          </Link>
        ) : (
          <div></div>
        )}
      </div>

      {/* Progress */}
      <div className="bg-gray-100 dark:bg-slate-800 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold text-gray-900 dark:text-white">Progresso do Curso</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">{moduloId} de {modulos.length}</span>
        </div>
        <div className="w-full bg-gray-300 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-yellow-500 to-purple-600 h-full transition-all duration-300"
            style={{ width: `${(moduloId / modulos.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
