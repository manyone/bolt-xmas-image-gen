import { useState, useEffect } from 'react';
import { GeneratedImage } from '../types/api';

export function useImageHistory() {
  const [history, setHistory] = useState<GeneratedImage[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('imageHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const addToHistory = (image: GeneratedImage) => {
    const newHistory = [image, ...history].slice(0, 10); // Keep last 10 images
    setHistory(newHistory);
    localStorage.setItem('imageHistory', JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('imageHistory');
  };

  return { history, addToHistory, clearHistory };
}