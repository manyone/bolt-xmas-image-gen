import { useState, useEffect } from 'react';

const API_KEY_STORAGE_KEY = 'hf_api_key';

export function useApiKey() {
  const [apiKey, setApiKey] = useState<string | null>(() => {
    return localStorage.getItem(API_KEY_STORAGE_KEY);
  });

  const saveApiKey = (key: string) => {
    localStorage.setItem(API_KEY_STORAGE_KEY, key);
    setApiKey(key);
  };

  const clearApiKey = () => {
    localStorage.removeItem(API_KEY_STORAGE_KEY);
    setApiKey(null);
  };

  return { apiKey, saveApiKey, clearApiKey };
}