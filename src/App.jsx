import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-slate-800">Kontor-Design.dk</a>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-blue-600 transition-colors">Forside</a>
            <a href="#guide" className="hover:text-blue-600 transition-colors">Guide</a>
            <a href="#sammenlign" className="hover:text-blue-600 transition-colors">Webshops</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Kvalitetsmøbler til dit kontor
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Find alt fra hæve-sænkeborde til ergonomiske kontorstole. Vi guider dig til de bedste køb.
          </p>
          <a 
            href="#sammenlign" 
            className="inline-block bg-white text-slate-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Se webshops →
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Shop Section */}
        <section id="sammenlign" className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-2">Top webshops med kontormøbler</h2>
            <p className="text-gray-600 mb-8">Opdateret Februar 2026 - Danske butikker med god service og levering</p>
            
            <div className="space-y-6">
              {/* Shop 1 */}
              <article className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-md transition-all">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-xl">Kontormøbler.dk</h3>
                    <span className="bg-slate-100 text-slate-800 text-xs font-semibold px-2 py-1 rounded">Stort udvalg</span>
                  </div>
                  <p className="text-gray-600 mb-2">Bredt udvalg af kvalitetsmøbler med hurtig levering i hele Danmark.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ Hæve-sænkeborde fra 2.999 DKK</li>
                    <li>✓ Gratis levering over 500 DKK</li>
                    <li>✓ 30 dages returret</li>
                  </ul>
                </div>
                <div className="text-left md:text-right">
                  <span className="block text-sm text-green-600 font-semibold mb-2">Op til 40% rabat</span>
                  <a 
                    href="https://www.partner-ads.com/dk/klikads.php?id=7842&builtin=1" 
                    rel="noopener sponsored"
                    className="inline-block bg-slate-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-900 transition-colors"
                  >
                    Gå til shoppen →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section id="guide" className="mb-16">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Guide til kontormøbler</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              De rigtige <strong>kontormøbler</strong> er afgørende for dit velbefindende og produktivitet. Dårlige møbler fører til rygsmerter, dårlig holdning og nedsat koncentration. Her er hvad du skal vide.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Hæve-sænkebord - dit vigtigste valg</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Et <strong>hæve-sænkebord</strong> lader dig skifte mellem at sidde og stå i løbet af dagen. Dette reducerer risikoen for rygproblemer markant og øger din energi.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Elektrisk vs manuel</strong> - Elektriske er nemmere at justere og koster fra 3.000 DKK</li>
              <li>• <strong>Bordstørrelse</strong> - Mindst 120x60 cm til computer og dokumenter</li>
              <li>• <strong>Højdeinterval</strong> - Sørg for det passer til din højde (typisk 65-125 cm)</li>
              <li>• <strong>Bæreevne</strong> - Minimum 70 kg til skærme og udstyr</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Ergonomisk kontorstol</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              En god <strong>kontorstol</strong> skal støtte din lænd, have justerbare armlæn og god polstring. Invester i kvalitet - du sidder i den 8+ timer dagligt.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Lændestøtte</strong> - Justerbar støtte til nederste ryg</li>
              <li>• <strong>Sædedybde</strong> - Skal kunne justeres til dine lår</li>
              <li>• <strong>Armlæn</strong> - Justerbare i højde og bredde</li>
              <li>• <strong>Hovedstøtte</strong> - Vigtigt ved lange arbejdsdage</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Indretning af hjemmekontor</h3>
            <p className="text-gray-700 leading-relaxed">
              Ud over bord og stol skal du tænke på belysning (naturligt lys + skrivebordslampe), skærmhøjde (øjenhøjde med øverste kant) og opbevaring til dokumenter og udstyr.
            </p>
          </article>
        </section>

        {/* Product Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Populære kategorier</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🪑</div>
              <h3 className="font-bold text-lg mb-2">Kontorstole</h3>
              <p className="text-gray-600 text-sm">Ergonomiske stole til lange arbejdsdage</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="font-bold text-lg mb-2">Hæve-sænkeborde</h3>
              <p className="text-gray-600 text-sm">Skift mellem at sidde og stå</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-bold text-lg mb-2">Opbevaring</h3>
              <p className="text-gray-600 text-sm">Reoler, skuffer og arkivskabe</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Ofte stillede spørgsmål</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Hvad koster et godt hæve-sænkebord?
                <span className="text-slate-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Gode elektriske hæve-sænkeborde starter omkring 3.000-4.000 DKK. Premium modeller med memory-funktion koster 5.000-8.000 DKK.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Hvor meget skal jeg bruge på en kontorstol?
                <span className="text-slate-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                En ordentlig ergonomisk stol koster fra 2.000-5.000 DKK. Premium stole som HÅG og RH koster 5.000-15.000 DKK men holder også i mange år.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Kan jeg få kontormøbler på afbetaling?
                <span className="text-slate-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Ja, mange webshops tilbyder delbetaling eller leasing. Det er en god måde at få kvalitetsmøbler uden stor engangsinvestering.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Kontor-Design.dk</h4>
              <p className="text-sm">
                Din guide til de bedste kontormøbler i Danmark.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition-colors">Forside</a></li>
                <li><a href="#guide" className="hover:text-white transition-colors">Guide</a></li>
                <li><a href="#sammenlign" className="hover:text-white transition-colors">Webshops</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Information</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privatlivspolitik" className="hover:text-white transition-colors">Privatlivspolitik</a></li>
                <li><a href="/om-os" className="hover:text-white transition-colors">Om os</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Kontor-Design.dk - Alle rettigheder forbeholdes</p>
            <p className="mt-2 text-gray-500">
              Denne side indeholder affiliate links. Vi modtager provision ved køb gennem vores links.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
