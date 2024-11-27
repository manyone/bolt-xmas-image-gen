import React from 'react';
import { GeneratedImage } from '../types/api';
import { Clock, Trash2 } from 'lucide-react';

interface ImageHistoryProps {
  history: GeneratedImage[];
  onClear: () => void;
}

export function ImageHistory({ history, onClear }: ImageHistoryProps) {
  if (history.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Clock className="h-5 w-5 text-gray-600" />
          Recent Generations
        </h2>
        <button
          onClick={onClear}
          className="flex items-center gap-1 text-red-600 hover:text-red-700"
        >
          <Trash2 className="h-4 w-4" />
          Clear History
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {history.map((image) => (
          <div key={image.id} className="rounded-lg overflow-hidden shadow-md">
            <img
              src={image.url}
              alt={image.prompt}
              className="w-full h-48 object-cover"
            />
            <div className="p-3 bg-white">
              <p className="text-sm text-gray-600 truncate">{image.prompt}</p>
              <p className="text-xs text-gray-400">
                {new Date(image.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}