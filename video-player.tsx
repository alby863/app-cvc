import React, { useState } from 'react';

interface VideoPlayerProps {
  title: string;
  description?: string;
  videoUrl?: string;
  posterUrl?: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  title,
  description,
  videoUrl,
  posterUrl,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // In una implementazione reale, questo componente utilizzerebbe un vero player video
  // Per questa demo, simuliamo un player video con un placeholder
  
  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className={`w-full ${className}`}>
      <h3 className="text-xl font-semibold text-green-600 mb-3">{title}</h3>
      
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <div className="w-full h-0 pb-[56.25%] relative bg-gray-200 rounded-lg flex items-center justify-center">
          {videoUrl ? (
            <div className="absolute inset-0">
              {/* In una implementazione reale, qui ci sarebbe un vero player video */}
              <div className="w-full h-full flex items-center justify-center">
                {isPlaying ? (
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Video in riproduzione...</p>
                    <button 
                      onClick={handlePlayClick}
                      className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Pausa
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <button 
                      onClick={handlePlayClick}
                      className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Riproduci
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-4 text-gray-600">Video dimostrativo</p>
              <p className="text-sm text-gray-500 mt-2">(In un'implementazione reale, qui sarebbe presente un video)</p>
            </div>
          )}
        </div>
      </div>
      
      {description && (
        <p className="text-gray-700 mb-4">{description}</p>
      )}
    </div>
  );
};

export default VideoPlayer;
