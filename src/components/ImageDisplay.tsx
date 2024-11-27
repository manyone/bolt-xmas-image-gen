import React from 'react';

interface ImageDisplayProps {
  imageUrl: string;
  prompt: string;
}

export function ImageDisplay({ imageUrl, prompt }: ImageDisplayProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Generated Image</h2>
      <img
        src={imageUrl}
        alt={prompt}
        className="w-full rounded-lg shadow-lg"
      />
    </div>
  );
}