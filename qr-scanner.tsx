import React, { useState } from 'react';

interface QRScannerProps {
  onScan: () => void;
  className?: string;
}

const QRScanner: React.FC<QRScannerProps> = ({
  onScan,
  className = '',
}) => {
  const [scanning, setScanning] = useState(false);
  
  const handleScan = () => {
    setScanning(true);
    
    // Simulazione della scansione
    setTimeout(() => {
      setScanning(false);
      onScan();
    }, 2000);
  };
  
  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-64 h-64 mx-auto border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-32 h-32 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h6v6H3V3zm8 0h2v2h-2V3zm4 0h6v6h-6V3zM3 11h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM3 15h6v6H3v-6zm8 0h2v2h-2v-2zm4 0h6v6h-6v-6z" />
          </svg>
        </div>
        {scanning && (
          <div className="absolute inset-0">
            <div className="w-full h-1 bg-green-500 absolute top-1/2 animate-pulse"></div>
            <div className="h-full w-1 bg-green-500 absolute left-1/2 animate-pulse"></div>
          </div>
        )}
      </div>
      <p className="text-sm text-gray-500 mt-4 text-center">
        Posiziona il QR code all'interno dell'area di scansione
      </p>
      <div className="text-center mt-6">
        <button 
          onClick={handleScan}
          disabled={scanning}
          className={`bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block ${scanning ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {scanning ? 'Scansione in corso...' : 'Simula Scansione QR'}
        </button>
      </div>
    </div>
  );
};

export default QRScanner;
