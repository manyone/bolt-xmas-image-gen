import { ImageGenerationError } from '../types/api';

const HF_API_URL = 'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2';

export class ImageGenerationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ImageGenerationError';
  }
}

export async function generateDalleImage(prompt: string, apiKey: string): Promise<string> {
  if (!prompt.trim()) {
    throw new ImageGenerationError('Prompt cannot be empty');
  }

  if (!apiKey.trim()) {
    throw new ImageGenerationError('API key is required');
  }

  try {
    const response = await fetch(HF_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        inputs: prompt,
        options: {
          wait_for_model: true
        }
      }),
    });

    if (!response.ok) {
      let errorMessage = 'Failed to generate image';
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
      } catch {
        // If parsing error response fails, use default message
      }
      throw new ImageGenerationError(errorMessage);
    }

    const blob = await response.blob();
    if (blob.size === 0) {
      throw new ImageGenerationError('Generated image is empty');
    }

    return URL.createObjectURL(blob);
  } catch (error) {
    if (error instanceof ImageGenerationError) {
      throw error;
    }
    
    console.error('Error generating image:', error);
    throw new ImageGenerationError(
      error instanceof Error 
        ? error.message 
        : 'An unexpected error occurred while generating the image'
    );
  }
}