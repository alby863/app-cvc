import React, { useState } from 'react';

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
  events?: {
    date: Date;
    title: string;
    type?: 'medicazione' | 'complicanza' | 'altro';
  }[];
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({
  onDateSelect,
  events = [],
  className = '',
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'];
  const monthNames = [
    'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
    'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
  ];
  
  // Funzione per ottenere i giorni del mese corrente
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  // Funzione per ottenere il primo giorno del mese (0 = Domenica, 1 = Lunedì, ecc.)
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  
  // Funzione per verificare se una data ha eventi
  const hasEvents = (date: Date) => {
    return events.some(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };
  
  // Funzione per ottenere gli eventi di una data
  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };
  
  // Funzione per verificare se una data è oggi
  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };
  
  // Funzione per verificare se una data è selezionata
  const isSelected = (date: Date) => {
    return selectedDate !== null &&
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear();
  };
  
  // Funzione per cambiare mese
  const changeMonth = (increment: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + increment);
    setCurrentDate(newDate);
  };
  
  // Funzione per gestire il click su una data
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };
  
  // Generazione dei giorni del mese
  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    // Giorni vuoti all'inizio del mese
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-10 p-1"></div>
      );
    }
    
    // Giorni del mese
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateHasEvents = hasEvents(date);
      const dateIsToday = isToday(date);
      const dateIsSelected = isSelected(date);
      
      let className = 'h-10 p-1 rounded-lg flex flex-col items-center justify-center cursor-pointer';
      
      if (dateIsToday) {
        className += ' bg-blue-100 text-blue-800 font-bold';
      }
      
      if (dateIsSelected) {
        className += ' ring-2 ring-green-500';
      }
      
      if (dateHasEvents) {
        className += ' font-semibold';
        
        // Colore in base al tipo di evento
        const events = getEventsForDate(date);
        const eventType = events[0]?.type || 'altro';
        
        if (eventType === 'medicazione') {
          className += ' bg-green-100 text-green-800';
        } else if (eventType === 'complicanza') {
          className += ' bg-amber-100 text-amber-800';
        } else {
          className += ' bg-gray-100 text-gray-800';
        }
      }
      
      days.push(
        <div
          key={day}
          className={className}
          onClick={() => handleDateClick(date)}
        >
          <span>{day}</span>
          {dateHasEvents && (
            <span className="text-xs mt-1">
              {getEventsForDate(date)[0]?.title.substring(0, 8)}
              {getEventsForDate(date)[0]?.title.length > 8 ? '...' : ''}
            </span>
          )}
        </div>
      );
    }
    
    return days;
  };
  
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <button
          className="p-2 rounded-full hover:bg-gray-100"
          onClick={() => changeMonth(-1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-xl font-semibold text-gray-800">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button
          className="p-2 rounded-full hover:bg-gray-100"
          onClick={() => changeMonth(1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-center font-medium text-gray-600">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {renderCalendarDays()}
      </div>
      
      {selectedDate && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            {selectedDate.getDate()} {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
          </h3>
          {getEventsForDate(selectedDate).length > 0 ? (
            <ul className="space-y-2">
              {getEventsForDate(selectedDate).map((event, index) => (
                <li key={index} className="text-sm">
                  <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                    event.type === 'medicazione' ? 'bg-green-500' :
                    event.type === 'complicanza' ? 'bg-amber-500' : 'bg-gray-500'
                  }`}></span>
                  {event.title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">Nessun evento programmato per questa data</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Calendar;
