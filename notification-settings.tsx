import React, { useState } from 'react';

interface NotificationSettingsProps {
  onSave?: (settings: any) => void;
  className?: string;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  onSave,
  className = '',
}) => {
  const [settings, setSettings] = useState({
    frequency: 'settimanale',
    notifySameDay: true,
    notifyDayBefore: true,
    notifyCaregiver: true,
    email: '',
    phone: '',
  });
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setSettings(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setSettings(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (onSave) {
      onSave(settings);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Frequenza Medicazioni</label>
        <select
          name="frequency"
          value={settings.frequency}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="settimanale">Settimanale</option>
          <option value="bisettimanale">Bisettimanale</option>
          <option value="10giorni">Ogni 10 giorni</option>
          <option value="personalizzata">Personalizzata</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Notifiche</label>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="notifySameDay"
            name="notifySameDay"
            checked={settings.notifySameDay}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="notifySameDay">Il giorno della medicazione</label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="notifyDayBefore"
            name="notifyDayBefore"
            checked={settings.notifyDayBefore}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="notifyDayBefore">Un giorno prima</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="notifyCaregiver"
            name="notifyCaregiver"
            checked={settings.notifyCaregiver}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="notifyCaregiver">Invia notifica anche al caregiver</label>
        </div>
      </div>
      
      {settings.notifyCaregiver && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium text-gray-700 mb-3">Contatti Caregiver</h3>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="email@esempio.com"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Numero di telefono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="+39 123 456 7890"
            />
          </div>
        </div>
      )}
      
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
      >
        Salva Impostazioni
      </button>
    </form>
  );
};

export default NotificationSettings;
