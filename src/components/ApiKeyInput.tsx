import React, { useState } from 'react';
import { Key } from 'lucide-react';

interface ApiKeyInputProps {
  onSubmit: (apiKey: string) => void;
}

export function ApiKeyInput({ onSubmit }: ApiKeyInputProps) {
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onSubmit(apiKey.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="rounded-lg bg-yellow-50 p-4">
        <div className="flex items-center gap-2">
          <Key className="h-5 w-5 text-yellow-600" />
          <h3 className="font-medium text-yellow-800">API Key Required</h3>
        </div>
        <p className="mt-2 text-sm text-yellow-700">
          Please provide your Hugging Face API key to generate images.
          You can get one from your{' '}
          <a
            href="https://huggingface.co/settings/tokens"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline hover:text-yellow-800"
          >
            Hugging Face account settings
          </a>
          .
        </p>
      </div>

      <div className="flex gap-2">
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your API key"
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={!apiKey.trim()}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          Save Key
        </button>
      </div>
    </form>
  );
}