import { useState, useCallback } from 'react';
import { generateDalleImage, ImageGenerationError } from '../services/imageService';
import { GeneratedImage } from '../types/api';

export function useImageGeneration(apiKey: string | null) {
  const [generatedImage, setGeneratedImage] = useState<GeneratedImage | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateImage = useCallback(async (prompt: string) => {
    if (!apiKey) {
      setError('API key is required');
      return null;
    }

    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return null;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const imageUrl = await generateDalleImage(prompt, apiKey);
      const newImage: GeneratedImage = {
        id: Date.now().toString(),
        prompt,
        url: imageUrl,
        timestamp: Date.now(),
      };
      setGeneratedImage(newImage);
      return newImage;
    } catch (err) {
      const errorMessage = err instanceof ImageGenerationError 
        ? err.message 
        : 'An unexpected error occurred. Please try again.';
      
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [apiKey]);

  return {
    generatedImage,
    isLoading,
    error,
    generateImage,
  };
}