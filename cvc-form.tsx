import React, { useState } from 'react';

interface CVCFormProps {
  initialData?: {
    patientName?: string;
    cvcType?: string;
    lumens?: string;
    french?: string;
    serialNumber?: string;
    insertionDate?: string;
    insertionSite?: string;
    doctor?: string;
  };
  onSubmit?: (data: any) => void;
  className?: string;
}

const CVCForm: React.FC<CVCFormProps> = ({
  initialData = {},
  onSubmit,
  className = '',
}) => {
  const [formData, setFormData] = useState({
    patientName: initialData.patientName || '',
    cvcType: initialData.cvcType || '',
    lumens: initialData.lumens || '',
    french: initialData.french || '',
    serialNumber: initialData.serialNumber || '',
    insertionDate: initialData.insertionDate || '',
    insertionSite: initialData.insertionSite || '',
    doctor: initialData.doctor || '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Rimuovi l'errore quando l'utente modifica il campo
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Il nome del paziente è obbligatorio';
    }
    
    if (!formData.cvcType.trim()) {
      newErrors.cvcType = 'Il tipo di CVC è obbligatorio';
    }
    
    if (!formData.lumens.trim()) {
      newErrors.lumens = 'Il numero di lumi è obbligatorio';
    }
    
    if (!formData.french.trim()) {
      newErrors.french = 'Il French è obbligatorio';
    }
    
    if (!formData.serialNumber.trim()) {
      newErrors.serialNumber = 'Il numero seriale è obbligatorio';
    }
    
    if (!formData.insertionDate.trim()) {
      newErrors.insertionDate = 'La data di inserimento è obbligatoria';
    }
    
    if (!formData.insertionSite.trim()) {
      newErrors.insertionSite = 'Il sito di inserimento è obbligatorio';
    }
    
    if (!formData.doctor.trim()) {
      newErrors.doctor = 'Il nome del medico inseritore è obbligatorio';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      if (onSubmit) {
        onSubmit(formData);
      }
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-1">
            Nome e Cognome <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.patientName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.patientName && <p className="mt-1 text-sm text-red-500">{errors.patientName}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="cvcType" className="block text-sm font-medium text-gray-700 mb-1">
            Tipo di CVC <span className="text-red-500">*</span>
          </label>
          <select
            id="cvcType"
            name="cvcType"
            value={formData.cvcType}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.cvcType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Seleziona il tipo di CVC</option>
            <option value="Hickman tunnellizzato">Hickman tunnellizzato</option>
            <option value="Broviac tunnellizzato">Broviac tunnellizzato</option>
            <option value="Port-a-cath">Port-a-cath</option>
            <option value="PICC">PICC</option>
            <option value="CVC non tunnellizzato">CVC non tunnellizzato</option>
          </select>
          {errors.cvcType && <p className="mt-1 text-sm text-red-500">{errors.cvcType}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="lumens" className="block text-sm font-medium text-gray-700 mb-1">
            N. lumi <span className="text-red-500">*</span>
          </label>
          <select
            id="lumens"
            name="lumens"
            value={formData.lumens}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.lumens ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Seleziona il numero di lumi</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          {errors.lumens && <p className="mt-1 text-sm text-red-500">{errors.lumens}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="french" className="block text-sm font-medium text-gray-700 mb-1">
            French <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="french"
            name="french"
            value={formData.french}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.french ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.french && <p className="mt-1 text-sm text-red-500">{errors.french}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-700 mb-1">
            N. seriale <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="serialNumber"
            name="serialNumber"
            value={formData.serialNumber}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.serialNumber ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.serialNumber && <p className="mt-1 text-sm text-red-500">{errors.serialNumber}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="insertionDate" className="block text-sm font-medium text-gray-700 mb-1">
            Data di inserimento <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="insertionDate"
            name="insertionDate"
            value={formData.insertionDate}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.insertionDate ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.insertionDate && <p className="mt-1 text-sm text-red-500">{errors.insertionDate}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="insertionSite" className="block text-sm font-medium text-gray-700 mb-1">
            Sito di inserimento <span className="text-red-500">*</span>
          </label>
          <select
            id="insertionSite"
            name="insertionSite"
            value={formData.insertionSite}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.insertionSite ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Seleziona il sito di inserimento</option>
            <option value="Vena giugulare interna destra">Vena giugulare interna destra</option>
            <option value="Vena giugulare interna sinistra">Vena giugulare interna sinistra</option>
            <option value="Vena succlavia destra">Vena succlavia destra</option>
            <option value="Vena succlavia sinistra">Vena succlavia sinistra</option>
            <option value="Vena femorale destra">Vena femorale destra</option>
            <option value="Vena femorale sinistra">Vena femorale sinistra</option>
            <option value="Vena basilica destra">Vena basilica destra</option>
            <option value="Vena basilica sinistra">Vena basilica sinistra</option>
          </select>
          {errors.insertionSite && <p className="mt-1 text-sm text-red-500">{errors.insertionSite}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-1">
            Medico inseritore <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.doctor ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.doctor && <p className="mt-1 text-sm text-red-500">{errors.doctor}</p>}
        </div>
      </div>
      
      <div className="mt-6">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Salva Dati CVC
        </button>
      </div>
    </form>
  );
};

export default CVCForm;
