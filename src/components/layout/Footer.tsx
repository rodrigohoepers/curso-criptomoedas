import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-8 border-t border-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Curso de Criptomoedas</h3>
            <p className="text-gray-400">Do básico ao avançado com foco técnico e prático</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navegação Rápida</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition">Início</a></li>
              <li><a href="/modulo1" className="hover:text-white transition">Módulos</a></li>
              <li><a href="/defi-2025" className="hover:text-white transition">DeFi 2025</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Curso de Criptomoedas. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-400 mt-4 md:mt-0">
              Educação financeira descentralizada
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
