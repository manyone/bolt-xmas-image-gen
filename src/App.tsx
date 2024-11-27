import React from 'react';
import { ImageGenerator } from './components/ImageGenerator';
import { Gift, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0c3440] bg-gradient-to-b from-[#0c3440] to-[#274c5a]">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white flex items-center justify-center gap-3">
            <Gift className="h-8 w-8 text-red-400" />
            Magical Christmas Image Creator
            <Sparkles className="h-8 w-8 text-yellow-300 animate-spin-slow" />
          </h1>
          <p className="mt-2 text-lg text-gray-300">
            Create enchanting holiday scenes with AI magic ✨
          </p>
        </div>
        
        <ImageGenerator />
      </div>
    </div>
  );
}

export default App;