export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <h3
              className="text-2xl font-bold tracking-wider uppercase"
              style={{ fontFamily: 'MinhaFonte' }}
            >
              <span className="text-white">VOALA RECORDS</span>
            </h3>
          </div>

          <div
            className="text-gray-400 text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © 2026 Gravadora Voala. Todos os direitos reservados.
          </div>

          <div
            className="text-white text-sm font-semibold uppercase tracking-wider"
            style={{ fontFamily: 'Teko, sans-serif' }}
          >
            Das ruas para o mundo.
          </div>
        </div>
      </div>
    </footer>
  );
}
