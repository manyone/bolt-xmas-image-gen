import React, { useState, useCallback, useMemo } from 'react';
import { Shuffle, Wand2 } from 'lucide-react';
import { LoadingSpinner } from './LoadingSpinner';
import {
  themes,
  scenes,
  characters,
  styles,
  colorings,
  effects,
  type Theme,
  type PromptOptions
} from '../data/promptOptions';

interface PromptBuilderProps {
  onGenerate: (prompt: string) => void;
  isLoading: boolean;
}

export function PromptBuilder({ onGenerate, isLoading }: PromptBuilderProps) {
  const [options, setOptions] = useState<PromptOptions>({
    theme: 'cozy',
    scene: scenes.cozy[0],
    character: '(none)',
    style: styles[0],
    coloring: colorings[0],
    effect: effects[0]
  });

  const generatedPrompt = useMemo(() => {
    const characterPart = options.character === '(none)' 
      ? '' 
      : `with ${options.character} `;
    
    return `A ${options.coloring.toLowerCase()}, ${options.style.toLowerCase()} of ${characterPart}${options.scene.toLowerCase()}, with ${options.effect.toLowerCase()} effects`;
  }, [options]);

  const randomize = useCallback(() => {
    const theme = themes[Math.floor(Math.random() * themes.length)];
    const themeScenes = scenes[theme];
    
    setOptions({
      theme,
      scene: themeScenes[Math.floor(Math.random() * themeScenes.length)],
      character: characters[Math.floor(Math.random() * characters.length)],
      style: styles[Math.floor(Math.random() * styles.length)],
      coloring: colorings[Math.floor(Math.random() * colorings.length)],
      effect: effects[Math.floor(Math.random() * effects.length)]
    });
  }, []);

  const handleThemeChange = (theme: Theme) => {
    setOptions(prev => ({
      ...prev,
      theme,
      scene: scenes[theme][0]
    }));
  };

  return (
    <div className="space-y-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-xl">
      <div className="space-y-4">
        <div className="flex gap-4">
          {themes.map(theme => (
            <label
              key={theme}
              className={`flex-1 cursor-pointer ${
                options.theme === theme ? 'text-red-600' : 'text-gray-500'
              }`}
            >
              <input
                type="radio"
                name="theme"
                value={theme}
                checked={options.theme === theme}
                onChange={(e) => handleThemeChange(e.target.value as Theme)}
                className="sr-only"
              />
              <div className={`text-center p-2 rounded-lg ${
                options.theme === theme ? 'bg-red-50' : 'hover:bg-gray-50'
              }`}>
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </div>
            </label>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Scene
            </label>
            <select
              value={options.scene}
              onChange={(e) => setOptions(prev => ({ ...prev, scene: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
            >
              {scenes[options.theme].map(scene => (
                <option key={scene} value={scene}>
                  {scene}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Character
            </label>
            <select
              value={options.character}
              onChange={(e) => setOptions(prev => ({ ...prev, character: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
            >
              {characters.map(character => (
                <option key={character} value={character}>
                  {character}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Style
            </label>
            <select
              value={options.style}
              onChange={(e) => setOptions(prev => ({ ...prev, style: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
            >
              {styles.map(style => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Coloring
            </label>
            <select
              value={options.coloring}
              onChange={(e) => setOptions(prev => ({ ...prev, coloring: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
            >
              {colorings.map(coloring => (
                <option key={coloring} value={coloring}>
                  {coloring}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Effect
            </label>
            <select
              value={options.effect}
              onChange={(e) => setOptions(prev => ({ ...prev, effect: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
            >
              {effects.map(effect => (
                <option key={effect} value={effect}>
                  {effect}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-green-50 p-4 border border-green-100">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Magic Christmas Prompt
          </label>
          <p className="text-gray-600 italic">{generatedPrompt}</p>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={randomize}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
        >
          <Shuffle className="h-5 w-5" />
          Surprise Me!
        </button>
        <button
          onClick={() => onGenerate(generatedPrompt)}
          disabled={isLoading}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
        >
          {isLoading ? <LoadingSpinner /> : <Wand2 className="h-5 w-5" />}
          Create Christmas Magic
        </button>
      </div>
    </div>
  );
}