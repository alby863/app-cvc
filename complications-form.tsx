import React, { useState } from 'react';

interface ComplicationsFormProps {
  onSubmit?: (data: any) => void;
  className?: string;
}

const ComplicationsForm: React.FC<ComplicationsFormProps> = ({
  onSubmit,
  className = '',
}) => {
  const [formData, setFormData] = useState({
    type: '',
    subtype: '',
    date: '',
    severity: '',
    description: '',
    intervention: '',
    operator: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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
    
    if (!formData.type) {
      newErrors.type = 'Il tipo di complicanza è obbligatorio';
    }
    
    if (!formData.subtype) {
      newErrors.subtype = 'Il sottotipo è obbligatorio';
    }
    
    if (!formData.date) {
      newErrors.date = 'La data di insorgenza è obbligatoria';
    }
    
    if (!formData.severity) {
      newErrors.severity = 'La gravità è obbligatoria';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'La descrizione è obbligatoria';
    }
    
    if (!formData.intervention.trim()) {
      newErrors.intervention = 'L\'intervento effettuato è obbligatorio';
    }
    
    if (!formData.operator.trim()) {
      newErrors.operator = 'Il nome dell\'operatore è obbligatorio';
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
      
      // Reset del form dopo l'invio
      setFormData({
        type: '',
        subtype: '',
        date: '',
        severity: '',
        description: '',
        intervention: '',
        operator: '',
      });
    }
  };
  
  // Opzioni per i sottotipi in base al tipo selezionato
  const getSubtypeOptions = () => {
    switch (formData.type) {
      case 'meccanica':
        return [
          { value: 'occlusione', label: 'Occlusione' },
          { value: 'dislocazione', label: 'Dislocazione' },
          { value: 'rottura', label: 'Rottura' },
          { value: 'stravaso', label: 'Stravaso' },
          { value: 'altro', label: 'Altro' },
        ];
      case 'infettiva':
        return [
          { value: 'exit-site', label: 'Infezione exit-site' },
          { value: 'tunnel', label: 'Infezione tunnel' },
          { value: 'batteriemia', label: 'Batteriemia CVC correlata' },
          { value: 'sepsi', label: 'Sepsi' },
          { value: 'altro', label: 'Altro' },
        ];
      case 'trombotica':
        return [
          { value: 'trombosi-venosa', label: 'Trombosi venosa' },
          { value: 'trombosi-catetere', label: 'Trombosi del catetere' },
          { value: 'embolia', label: 'Embolia polmonare' },
          { value: 'sindrome-vcs', label: 'Sindrome della vena cava superiore' },
          { value: 'altro', label: 'Altro' },
        ];
      default:
        return [{ value: '', label: 'Seleziona prima il tipo di complicanza' }];
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
            Tipo di Complicanza <span className="text-red-500">*</span>
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              errors.type ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Seleziona il tipo di complicanza</option>
            <option value="meccanica">Meccanica</option>
            <option value="infettiva">Infettiva</option>
            <option value="trombotica">Trombotica/Embolica</option>
          </select>
          {errors.type && <p className="mt-1 text-sm text-red-500">{errors.type}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="subtype" className="block text-sm font-medium text-gray-700 mb-1">
            Sottotipo <span className="text-red-500">*</span>
          </label>
          <select
            id="subtype"
            name="subtype"
            value={formData.subtype}
            onChange={handleChange}
            disabled={!formData.type}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              errors.subtype ? 'border-red-500' : 'border-gray-300'
            } ${!formData.type ? 'bg-gray-100 cursor-not-allowed' : ''}`}
          >
            <option value="">Seleziona il sottotipo</option>
            {getSubtypeOptions().map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.subtype && <p className="mt-1 text-sm text-red-500">{errors.subtype}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Data Insorgenza <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gravità <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="severity-lieve"
                name="severity"
                value="lieve"
                checked={formData.severity === 'lieve'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="severity-lieve">Lieve</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="severity-moderata"
                name="severity"
                value="moderata"
                checked={formData.severity === 'moderata'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="severity-moderata">Moderata</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="severity-grave"
                name="severity"
                value="grave"
                checked={formData.severity === 'grave'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="severity-grave">Grave</label>
            </div>
          </div>
          {errors.severity && <p className="mt-1 text-sm text-red-500">{errors.severity}</p>}
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Descrizione <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
            errors.description ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Descrivi la complicanza..."
        ></textarea>
        {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="intervention" className="block text-sm font-medium text-gray-700 mb-1">
          Intervento Effettuato <span className="text-red-500">*</span>
        </label>
        <textarea
          id="intervention"
          name="intervention"
          value={formData.intervention}
          onChange={handleChange}
          rows={4}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
            errors.intervention ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Descrivi l'intervento effettuato..."
        ></textarea>
        {errors.intervention && <p className="mt-1 text-sm text-red-500">{errors.intervention}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="operator" className="block text-sm font-medium text-gray-700 mb-1">
          Operatore <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="operator"
          name="operator"
          value={formData.operator}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
            errors.operator ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Nome e cognome dell'operatore"
        />
        {errors.operator && <p className="mt-1 text-sm text-red-500">{errors.operator}</p>}
      </div>
      
      <div className="mt-6">
        <button
          type="submit"
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Registra Complicanza
        </button>
      </div>
    </form>
  );
};

export default ComplicationsForm;
