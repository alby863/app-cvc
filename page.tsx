import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      {/* Hero Section */}
      <div className="w-full max-w-5xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-green-600 mb-6">APP CVC 2025</h1>
        <p className="text-xl md:text-2xl mb-8">
          Gestione digitale dei Cateteri Venosi Centrali in oncoematologia pediatrica
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <Link 
            href="/demo/scan-qr" 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Prova la Demo
          </Link>
          <Link 
            href="/informazioni" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Informazioni sui CVC
          </Link>
        </div>
      </div>

      {/* Features Overview */}
      <div className="w-full max-w-5xl my-12">
        <h2 className="text-3xl font-bold text-center mb-8">Funzionalità Principali</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Scansione QR Code</h3>
            <p>Accesso rapido ai dati del paziente tramite scansione del codice QR personale.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Calendario Medicazioni</h3>
            <p>Gestione delle medicazioni programmate con notifiche e promemoria.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Monitoraggio Complicanze</h3>
            <p>Registrazione e monitoraggio delle complicanze del CVC (meccaniche, infettive, trombotiche).</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full max-w-5xl my-12 bg-green-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Vantaggi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Per gli Operatori Sanitari</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Riduzione dei missing data</li>
              <li>Trasferimento diretto dei dati su database</li>
              <li>Estrazione dati per analisi statistiche in tempo reale</li>
              <li>Aggiornamento in tempo reale del materiale educativo</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Per Pazienti e Caregiver</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Libretto elettronico che accompagna il paziente nel percorso di cure</li>
              <li>Eliminazione del formato cartaceo</li>
              <li>Accesso a materiale educativo e video dimostrativi</li>
              <li>Promemoria per le medicazioni programmate</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full max-w-5xl my-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Scopri di più sull'APP CVC 2025</h2>
        <p className="text-xl mb-8">
          Esplora le funzionalità e scopri come questa app può migliorare la gestione dei CVC in oncoematologia pediatrica.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link 
            href="/video-educativi" 
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Video Educativi
          </Link>
          <Link 
            href="/about" 
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Informazioni sul Progetto
          </Link>
        </div>
      </div>
    </main>
  )
}
