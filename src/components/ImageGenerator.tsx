import React from 'react';
import { useImageGeneration } from '../hooks/useImageGeneration';
import { useImageHistory } from '../hooks/useImageHistory';
import { useApiKey } from '../hooks/useApiKey';
import { PromptBuilder } from './PromptBuilder';
import { ImageDisplay } from './ImageDisplay';
import { ErrorMessage } from './ErrorMessage';
import { ImageHistory } from './ImageHistory';
import { ApiKeyInput } from './ApiKeyInput';
import { Settings } from 'lucide-react';

export function ImageGenerator() {
  const { apiKey, saveApiKey, clearApiKey } = useApiKey();
  const { generatedImage, isLoading, error, generateImage } = useImageGeneration(apiKey);
  const { history, addToHistory, clearHistory } = useImageHistory();
  const [showSettings, setShowSettings] = React.useState(false);

  const handleGenerate = async (prompt: string) => {
    const newImage = await generateImage(prompt);
    if (newImage) {
      addToHistory(newImage);
    }
  };

  if (!apiKey) {
    return <ApiKeyInput onSubmit={saveApiKey} />;
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="flex justify-end">
        <button
          onClick={() => {
            clearApiKey();
            clearHistory();
          }}
          className="flex items-center gap-1 text-gray-600 hover:text-gray-800"
        >
          <Settings className="h-4 w-4" />
          Change API Key
        </button>
      </div>

      <PromptBuilder
        onGenerate={handleGenerate}
        isLoading={isLoading}
      />
      
      {error && <ErrorMessage message={error} />}
      
      {generatedImage && <ImageDisplay imageUrl={generatedImage.url} prompt={generatedImage.prompt} />}
      
      <ImageHistory history={history} onClear={clearHistory} />
    </div>
  );
}