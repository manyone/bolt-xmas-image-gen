import React from 'react';
import { Wand2 } from 'lucide-react';
import { LoadingSpinner } from './LoadingSpinner';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

export function PromptInput({ prompt, setPrompt, onGenerate, isLoading }: PromptInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
        Enter your prompt
      </label>
      <div className="flex gap-2">
        <input
          id="prompt"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
          placeholder="A serene landscape with mountains..."
          disabled={isLoading}
        />
        <button
          onClick={onGenerate}
          disabled={isLoading}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? <LoadingSpinner /> : <Wand2 className="h-5 w-5" />}
          Generate
        </button>
      </div>
    </div>
  );
}